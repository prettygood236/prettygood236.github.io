/**
 * Product Name : DodamSoft OTP / FDS
 * Copyrights DodamSoft Co.,Ltd. all rights reserved.
 * Author : DodamSoft Co.,Ltd. (Y.S.Rhyou)
 * 
 * 주식회사 도담소프트 OTP/FDS 패키지이며, 본 제품은 산업인력공단에 납품 설치되어 산업인력동단에서 제공하는 서비스에 한하여 사용 가능합니다.
 * 이 외의 용도로 무단 사용하거나 복제, 수정 등의 행위가 발생할 경우 저작권법의 적용을 받을 수 있습니다.
 * 아울러 제품 소유자의 허락 없이 무단 수정으로 인한 장애 및 손실에 대해서는 일체의 책임을 지지 않습니다.
 * 
 * 제품 소유자 : 주식회사 도담소프트 류용식  ( Contact email : whynot@dodam-soft.com )
 */

var isDebug = false;
var keypadUtils = null;

/* ======================================================================================== */
/* HRD URL DEFINE */
/* ======================================================================================== */
/*
var hrdUrl = "https://hrd.thinkinnovation.co.kr/fdsService/hrdFDS/Library/";
var otpUrl = "https://hrd.thinkinnovation.co.kr/fdsService/hrdOTP/Library/";
*/
var hrdUrl = "https://fds.hrdkorea.or.kr/fdsService/hrdFDS/Library/";
var otpUrl = "https://fds.hrdkorea.or.kr/fdsService/hrdOTP/Library/";

/* ======================================================================================== */

var hrdFrame = {
	Frame_Arr : [
		this.hrdUrl + "fdsLibs/hrdjquery-1.8.2.min.js", 
		this.otpUrl + "otpLibs/keyPad.js",
	    this.otpUrl + "otpLibs/core.js", 
	    this.otpUrl + "otpLibs/Base32.js", 
	    this.otpUrl + "otpLibs/OTP.js",	    
	    this.hrdUrl + "fdsLibs/hrdLib.js", 
		this.otpUrl + "otpLibs/envChecker.js"
	],
	CSS_Arr : [
		this.otpUrl + "res/CSS.css"
	],
	loadHrdFrame : function(debugYN) {
		/* ======================================================================== */
		if(debugYN != null && debugYN == true) this.isDebug = debugYN;
		/* ======================================================================== */
		try {
			return this.loadScript();
		} catch(e) {
			if(this.isDebug)
				alert("loadHrdFrame Ex : " + e.message);
			
			return false;
		}
	},
	loadScript : function() {

		try {
			for(var i=0 ; i < this.Frame_Arr.length ; i++) {
				/**
				* Rhyou
				* 만일 jQuery가 이미 로드되어 있을 경우 hrdjquery는 별도로 로드시키지 않고 Skip 처리 함.
				*/
				if(window.jQuery) {
					if(this.Frame_Arr[i].indexOf("hrdjquery") >= 0) continue; 
				} 
				
				var script = document.createElement('script');
			    script.type = 'text/javascript';
			    script.src = this.Frame_Arr[i] + "?" + Math.floor(Math.random() * 10) + 1;
			    document.getElementsByTagName('head')[0].appendChild(script);
			}
			
			for(var i=0 ; i < this.CSS_Arr.length ; i++) {
				var cssLink = document.createElement("link")
			    cssLink.setAttribute("rel", "stylesheet")
			    cssLink.setAttribute("type", "text/css")
			    cssLink.setAttribute("href", this.CSS_Arr[i])
				document.getElementsByTagName('head')[0].appendChild(cssLink);
			}
			
			this.callBackLoadScript();
			
			return true;
			
		} catch(e) {
			if(this.isDebug)
				alert("loadScript Ex : " + e.message);
			
			return false;
		}
	},
	callBackLoadScript : function() {
		try {
			(function chkScript(i) {    
				setTimeout(function () {    
					if(--i) {
						if(window.jQuery && typeof otpErrHandler !== 'undefined' && typeof otpErrHandler === 'function') { 
							if(typeof loadAPIReceiver !== 'undefined' && typeof loadAPIReceiver === 'function') {
								loadAPIReceiver("101", "");
							} else {
								chkScript(i);    
							}
						} else {
							chkScript(i);    
						}
					}
				}, 50)
			})(100);  
			
		} catch(e) {
			if(typeof loadAPIReceiver !== 'undefined' && typeof loadAPIReceiver === 'function') {
				loadAPIReceiver("102", e.message);
			} 
			
			return false;
		}
	},
	loadFDS : function(agtID, usrID, sessionID) {
		(function chkScript(i) {    
			setTimeout(function () {    
				if(--i) {
					if(i == 1) {
						if(typeof checkLoaded !== 'undefined' && typeof checkLoaded === 'function') { 
							return false;
						}
					}
					
					if(window.jQuery && typeof checkLoaded !== 'undefined' && typeof checkLoaded === 'function') { 
						var hrdUtils = new hrdFDSUtils();
						setTimeout(function () {    
							hrdUtils.hrdFDS(agtID, usrID, sessionID, this.isDebug);
						},500);
					} else {
						chkScript(i);    
					}
				}
			}, 50)
		})(40);  
	},
	loadOTPTest : function(agtID, usrID, sessionID, viewType) {
		(function chkScript(i) {    
			setTimeout(function () {    
				if(--i) {
					if(i == 1) {
						if(typeof loadOtpReceiver !== 'undefined' && typeof loadOtpReceiver === 'function') { 
							loadOtpReceiver("102","API Loading 실패");
							return false;
						}
					}
					
					if(window.jQuery && typeof otpErrHandler !== 'undefined' && typeof otpErrHandler === 'function') { 
						if(typeof startOtpProc !== 'undefined' && typeof startOtpProc === 'function') {
							
							/* Rhyou 공단 URL이 CVList에 등재되어 IE에서 정상표출되지 않아 강제로 프레임기반만 처리함. */
							if(viewType == "102") setFrameOtpLoader();
							
							setTimeout(function () {    
								startOtpProc(agtID, usrID, sessionID, viewType);
							},70);
						} else {
							chkScript(i);    
						}
					} else {
						chkScript(i);    
					}
				}
			}, 50)
		})(40);  
	},
	loadOTP : function(agtID, usrID, sessionID, viewType) {
		(function chkScript(i) {    
			setTimeout(function () {    
				if(--i) {
					if(i == 1) {
						if(typeof loadOtpReceiver !== 'undefined' && typeof loadOtpReceiver === 'function') { 
							loadOtpReceiver("102","API Loading 실패");
							return false;
						}
					}
					
					if(window.jQuery && typeof otpErrHandler !== 'undefined' && typeof otpErrHandler === 'function') { 
						if(typeof startOtpProc !== 'undefined' && typeof startOtpProc === 'function') {
							
							if(viewType == "102") setFrameOtpLoader();
							
							setTimeout(function () {    
								startOtpProc(agtID, usrID, sessionID, viewType);
							},70);
						} else {
							chkScript(i);    
						}
					} else {
						chkScript(i);    
					}
				}
			}, 50)
		})(40);  
	},
	loadKeyPad : function(ele, padType, fWidth) {
		if(typeof hrdKeyPadLoaded !== 'undefined' && typeof hrdKeyPadLoaded === 'function') { 
			if(keypadUtils == null) {
				keypadUtils = new hrdKeyPadUtils();
			}
			keypadUtils.fillHrdKeyPad(ele, padType, fWidth);
		} else {
			(function chkScript(i) {    
				setTimeout(function () {    
					if(--i) {
						if(i == 1) {
							loadKeypadReceiver("102","API Loading 실패");
							return false;
						}
						
						if(typeof hrdKeyPadLoaded !== 'undefined' && typeof hrdKeyPadLoaded === 'function') { 
							if(keypadUtils == null) {						
								keypadUtils = new hrdKeyPadUtils();
							}
							keypadUtils.fillHrdKeyPad(ele, padType, fWidth);
						} else {
							chkScript(i);    
						}
					}
				}, 50)
			})(40);  
		}
	},
	hideKeyPad : function() {
		if(typeof hrdKeyPadLoaded !== 'undefined' && typeof hrdKeyPadLoaded === 'function') { 
			if(keypadUtils == null) {
				keypadUtils = new hrdKeyPadUtils();
			}
			keypadUtils.clearKeyPad();
		} else {
			(function chkScript(i) {    
				setTimeout(function () {    
					if(--i) {
						if(i == 1) {
							loadKeypadReceiver("102","API Loading 실패");
							return false;
						}
						
						if(typeof hrdKeyPadLoaded !== 'undefined' && typeof hrdKeyPadLoaded === 'function') { 
							if(keypadUtils == null) {
								keypadUtils = new hrdKeyPadUtils();
							}
							keypadUtils.clearKeyPad();
						} else {
							chkScript(i);    
						}
					}
				}, 50)
			})(30);  
		}
	},
	getUT : function() {
		try {
			function zeroPadding(n, digits) {
				try {
					var zero = "";
					n = n.toString();

					if (n.length < digits) {
						for (i = 0; i < digits - n.length; i++)
							zero += "0";
					}
					return zero + n;
				} catch(e) {
					return n.toString();
				}
				  
			}
			
			var d = new Date();
			var s =
				zeroPadding(d.getFullYear(), 4) + '-' +
				zeroPadding(d.getMonth() + 1, 2) + '-' +
				zeroPadding(d.getDate(), 2) + ' ' +

				zeroPadding(d.getHours(), 2) + ':' +
				zeroPadding(d.getMinutes(), 2) + ':' +
				zeroPadding(d.getSeconds(), 2);
			
			return s;
		} catch(e) {
			if(this.isDebug)
				alert("getUT Ex : " + e.message);
			
			return "";
		}
	}
};


