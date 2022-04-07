---
layout:     post
title:     'Ownerheler and Tokenlock'
subtitle:  'Ownerheler and Tokenlock'
category:   blockchain
tags:       blockchain
image: 
  path: /assets/img/blockchain/encryption-technology-and-security_main.png
accent_color: rgba(67,67,67,1)
accent_image:
  background: rgba(78,112,150,1)
  overlay: false
theme_color: rgba(52,52,52,1)
---

* toc
{:toc .large-only}

## 1. Ownerheler and Tokenlock 계획
---
작동방식은 다음과 같다. 

1. 3명의 관리자가 투표를 통해 Owner를 선정
2. 컨트랙트를 배포할 때 관리자주소를 3개 선정할 수 있지만 관리자1명이 배포한 것으로 하여 1명의 관리자가 2명의 관리자를 더 추가하고 총 3명의 관리자가 투표를 통해 1명의 Owner를 선정
3. 투표는 1번만 할 수 있으며 만약 투표 결과가 1:1:1로 나온다면 기존에 Owner가 유지

- 관리자 추가함수 addOwner를 작성하였고 , _OwnerNumbers를 받아서 새 관리자 주소를 할당하고 투표완료수와 투표값은 0으로 다시 초기화 한다.
- voteForOwner에서 함수를 실행한사람의 주소랑, 투표할 주소를 인자로 받아 _voteforOwner로 보낸다.
- _voteforOwner에서는 관리자 목록 _owers에서 실행한게 맞는지, 투표한적 있는지 확인하고 투표결과 업데이트, 투표상태 업데이트 한다.
- 그 다음 result()에서 투표 결과를 확인하고, transferOwnership에서 투표 결과대로 owner를 변경하도록 하였다. 
- 현재 owner만 투표결과대로 owner를 변경하는 함수를 실행할수 있다.

## 2.  Ownerheler and Tokenlock 구현
---
- ICO는 CHANCHANCHAN(CHCHCH)이라는 자체 토큰과 교환하여 ETH를 받는 스마트 컨트랙트가 될 것이다. 
- CHCHCH 토큰은 완전히 호환되는 ERC20 토큰이며 ICO 시간에 생성된다.
- 투자자는 ETH를 ICO 계약 주소로 보내고 그 대가로 일정량의 CHCHCH를 받는다.
- ICO 계약으로 전송된 ETH를 자동으로 받는 입금 주소(EOA 계정)가 있다.
- wei단위 CHCHCH 토큰 가격은 다음과 같다. 1CHCHCH = 0.001Eth = 10**15 wei, 1Eth = 1000 CHCHCH);
- 최소 투자 금액은 0.01 ETH이고 최대 투자 금액은 5 ETH이다.
- ICO 하드캡은 300 ETH이다.
- ICO에는 ICO 시작 및 종료 시간을 지정하는 관리자가 있다.
- ICO는 하드캡 또는 종료 시간에 도달하면 종료된다(둘 중 먼저 도래하는 시점).
- CCH 토큰은 가격 폭락을 막기위해 일정기간 잠그어 관리자가 설정한 특정 시간 후에만 거래할 수 있다.
- 긴급 상황의 경우 관리자는 ICO를 중지할 수 있으며 손상될 경우 예금 주소를 변경할 수 있다.
- ICO는 다음 상태 중 하나이다. beforeStart, running, afterEnd, halted;
- 또한 ICO에서 판매되지 않은 토큰은 소각할 수 있도록 구현한다.
- ICO 투자 후 Invest 이벤트가 발생한다.

### 2.2 전체 코드

github repo : [https://github.com/prettygood236/ownerhelper_and_tokenlock](https://github.com/prettygood236/ownerhelper_and_tokenlock)

contract address : 

~~~go
// file: 'ChanChanChanICO_erc20.sol'

// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;

interface ERC20Interface {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function transferFrom(address spender, address recipient, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Transfer(address indexed spender, address indexed from, address indexed to, uint256 amount);
    event Approval(address indexed owner, address indexed spender, uint256 oldAmount, uint256 amount);
}

library SafeMath {
  	function mul(uint256 a, uint256 b) internal pure returns (uint256) {
		uint256 c = a * b;
		assert(a == 0 || c / a == b);
		return c;
  	}

  	function div(uint256 a, uint256 b) internal pure returns (uint256) {
	    uint256 c = a / b;
		return c;
  	}

  	function sub(uint256 a, uint256 b) internal pure returns (uint256) {
		assert(b <= a);
		return a - b;
  	}

  	function add(uint256 a, uint256 b) internal pure returns (uint256) {
		uint256 c = a + b;
		assert(c >= a);
		return c;
	}
}

abstract contract OwnerHelper {
  	address private _owner;
    address[3] private _owners;
    mapping(address => uint8) private voteResult;
    mapping(address => uint8) private voteCount;

  	event OwnershipTransferred(address indexed preOwner, address indexed nextOwner);

  	modifier onlyOwner {
		require(msg.sender == _owner, "OwnerHelper: caller is not owner");
		_;
  	}

  	constructor() {
            _owner = msg.sender;
            _owners[0] = msg.sender;
            voteCount[msg.sender] = 0;
            voteResult[msg.sender] =0;
  	}

    function owner() public view virtual returns (address) {
        return _owner;
    }
    function addOwner (uint8 _ownerNumber,address _newOwner) onlyOwner public returns(bool) { //오너투표에 참여할 사람들 입력 0~2
        require(_ownerNumber>0 &&_ownerNumber<3);
        _owners[_ownerNumber] = _newOwner;
        voteCount[_newOwner] = 0;
        voteResult[_newOwner] =0;
        return true;
    }
    function voteForOwner(address _voteforAddress) public virtual returns(bool){
       _voteforOwner(msg.sender,_voteforAddress);
        return true;
    }

    function _voteforOwner(address sender, address voteforAddress) internal virtual returns (bool){
        require(_owners[0]==sender || _owners[1]==sender || _owners[2]==sender);
        require(voteCount[sender] == 0);
        voteResult[voteforAddress]+=1;
        voteCount[sender]+=1;
        return true;
    }

    function result() public view returns (uint8){
        return voteResult[msg.sender];
    }


    function transferOwnership() onlyOwner public returns (bool) {

            if(voteResult[_owners[1]] > voteResult[_owners[2]]){
            require(_owners[1] != _owner);
            require(_owners[1] != address(0x0));
            address preOwner = _owner;
            _owner = _owners[1];
            emit OwnershipTransferred(preOwner, _owners[1]);
            }
            else if(voteResult[_owners[2]] > voteResult[_owners[0]]){
            require(_owners[2] != _owner);
            require(_owners[2] != address(0x0));
            address preOwner = _owner;
            _owner = _owners[2];
            emit OwnershipTransferred(preOwner, _owners[2]);
            }
    return true;
    }
}


contract SimpleToken is ERC20Interface, OwnerHelper {
    using SafeMath for uint256;
    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) public _allowances;
    mapping (address => bool) public _personalTokenLock;

    uint256 public _totalSupply;
    string public _name;
    string public _symbol;
    uint8 public _decimals;
    bool public _tokenLock;

    constructor(string memory getName, string memory getSymbol) {
        _name = getName;
        _symbol = getSymbol;
        _decimals = 18;
        _totalSupply = 100000000e18;
        _balances[msg.sender] = _totalSupply;
        _tokenLock = true;
    }

    function name() public view returns (string memory) {
        return _name;
    }
    
    function symbol() public view returns (string memory) {
        return _symbol;
    }
    
    function decimals() public view returns (uint8) {
        return _decimals;
    }
    
    function totalSupply() external view virtual override returns (uint256) {
        return _totalSupply;
    }
    
    function balanceOf(address account) external view virtual override returns (uint256) {
        return _balances[account];
    }
    
    function transfer(address recipient, uint amount) public virtual override returns (bool) {
        _transfer(msg.sender, recipient, amount);
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }
    
    function allowance(address owner, address spender) external view override returns (uint256) {
        return _allowances[owner][spender];
    }
    
    function approve(address spender, uint256 amount) external virtual override returns (bool) {
        uint256 currentAllownace = _allowances[msg.sender][spender];
        require(currentAllownace >= amount, "ERC20: Transfer amount exceeds allowance");
        _approve(msg.sender, spender, currentAllownace, amount);
        return true;
    }
    
    function transferFrom(address sender, address recipient, uint256 amount) external virtual override returns (bool) {
        _transfer(sender, recipient, amount);
        emit Transfer(msg.sender, sender, recipient, amount);
        uint256 currentAllowance = _allowances[sender][msg.sender];
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        _approve(sender, msg.sender, currentAllowance, currentAllowance - amount);
        return true;
    }
    
    function _approve(address owner, address spender, uint256 currentAmount, uint256 amount) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");
        require(currentAmount == _allowances[owner][spender], "ERC20: invalid currentAmount");
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, currentAmount, amount);
    }


    function _transfer(address sender, address recipient, uint256 amount) internal virtual {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");
        require(isTokenLock(sender, recipient) == false, "TokenLock: invalid token transfer");
        uint256 senderBalance = _balances[sender];
        require(senderBalance >= amount, "ERC20: transfer amount exceeds balance");
        _balances[sender] = senderBalance.sub(amount);
        _balances[recipient] = _balances[recipient].add(amount);
    }

    function isTokenLock(address from, address to) public view returns (bool lock) {
        lock = false;

        if(_tokenLock == true)
        {
             lock = true;
        }

        if(_personalTokenLock[from] == true || _personalTokenLock[to] == true) {
             lock = true;
        }
    }

    // 토큰이 언락되어 있을때 락을 거는 함수 추가 
    function setTokenLock() onlyOwner public {
        require(_tokenLock == false);
        _tokenLock = true;
    }
    // 토큰이 언락되어 있을때 락을 거는 함수 추가 
    function setPersonalTokenLock(address _who) onlyOwner public {
        require(_personalTokenLock[_who] == false);
        _personalTokenLock[_who] = true;
    }

    function removeTokenLock() onlyOwner public {
        require(_tokenLock == true);
        _tokenLock = false;
    }

    function removePersonalTokenLock(address _who) onlyOwner public {
        require(_personalTokenLock[_who] == true);
        _personalTokenLock[_who] = false;
    }
}
~~~


## 3. 개발회고

**Keep** 

---
개발은 개선과의 싸움이다. 항상 더 나은 방식을 고려해야 한다.  
<br/>
<br/>
<br/>

**Problem**

---
탈중앙화에 가까운 관리자 선정방식을 고려하느라 힘들었다. 
<br/>
<br/>
<br/>

**Try**

---
특수한 상황에 대한 예외처리를 더 생각해야겠다.

<br>
<br>
<br>
