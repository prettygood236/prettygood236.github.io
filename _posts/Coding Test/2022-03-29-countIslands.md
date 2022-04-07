---
layout:     post
title:     'countIslands'
subtitle:  'countIslands'
category:   coding-test 
tags:       dfs-and-bfs coding-test
image: 
  path: /assets/img/coding-test/countIslands_main.jpg
related_posts: 
  - _posts/Data Structures and Algorithms/2022-02-05-dfs-and-bfs.md
  - _posts/Coding Test/2022-03-06-robotpath1.md
accent_color: rgba(69,104,220,1)
accent_image: 
  background: linear-gradient(to right, rgba(69,104,220,1) 0%, rgba(176,106,179,1) 74%);
  overlay: false
theme_color: rgba(176,106,179,1)
---

* toc
{:toc .large-only}

## Problem
---

세로와 가로의 길이가 각각 R, M인 2차원 R X M 배열 `grid`가 주어졌을 때, `'1'`은 땅을 의미하고 `'0'` 은 물을 의미한다. 주어진 2차원 배열에 존재하는 섬의 개수를 리턴해야 한다.

**입력** <br/>
인자 1 : `grid` <br/>
\- 세로와 가로의 길이가 각각 R, M인 2차원 배열 <br/>
\- `arr.length`는 R <br/>
\- `arr[i].length`는 M <br/>
\- `arr[i][j]`는 0 또는 1 <br/>

**출력** <br/>
number 타입을 리턴

**주의사항** <br/>
섬이란 물로 둘러싸여 있는 땅을 말한다.<br/>
가로 혹은 세로로 땅이 연결되어 있는 경우 하나의 섬으로 간주한다.<br/>
2차원 배열의 범위 밖은 물로 둘러싸여 있다고 가정한다.<br/>

**입출력 예시**
~~~js
let grid = [
  ['0', '1', '1', '1'],
  ['0', '1', '1', '1'],
  ['1', '1', '0', '0'],
];
let result = countIslands(grid);
console.log(result); // --> 1

grid = [
  ['0', '1', '1', '1', '0'],
  ['0', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
];
result = countIslands(grid);
console.log(result); // --> 3
~~~

## Solution
---

### BFS 

~~~js
// file:'countIslands_bfs.js'
const countIslands = function (grid) {
  // 빈 배열을 입력받은 경우, 0을 리턴한다.
  if (grid.flat().length == 0) return 0;
  // n은 가로(x) m은 세로(y) 이다.
  const m = grid.length;
  const n = grid[0].length;
  // 이동할 네 가지 방향을 정의한다. (위쪽(0), 오른쪽(1), 아래쪽(2), 왼쪽(3) 순)
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let count = 1;
  let result = 0;

  // BFS를 구현할 큐를 만들고 왼쪽 맨 위에서 출발한다.
  const queue = [];
  queue.push([0, 0]);

  // grid를 직접 바꾸어 답을 도출할 것이므로 값을 다루기 편한 숫자형으로 바꾸어준다.
  grid = grid.map((el) => el.map((el) => (el == '0' ? -1 : 0)));
  // 0,0이 땅이라면 1을 미리 할당해준다.
  grid[0][0] = grid[0][0] == 0 ? 1 : -1;

  // BFS를 수행한다. (큐가 바닥날 때까지 수행하면 된다.)
  while (queue.length) {
    // 반복할 떄 마다 큐에서 원소를 꺼내고,
    const [y, x] = queue.shift();
    // 현재 위치에서 4가지 방향으로 한번씩 방문한다.
    for (let i = 0; i < 4; i++) {
      // 방문기록을 남기는 것은 필수이다!
      while (true) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        // 다음 땅이 공간을 벗어난 경우 이 반복을 탈출한다.
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) break;
        // 다음 땅이 연결되어 있으나 이전 땅보다 큰 값이라면 다시 초기화 해준다.
        if (grid[ny][nx] > 0 && grid[y][x] > 0) {
          grid[ny][nx] = Math.min(grid[ny][nx], grid[y][x]);
          count = grid[ny][nx] + 1;
        }
        // 다음 땅이 이미 방문한적 있다면 이 반복을 탈출한다.
        if (grid[ny][nx] > 0 || grid[ny][nx] == -2) break;
        // 다음 땅이 물이라면 방문체크를 하고 다음 땅으로 가기위해 큐에 좌표만 넣어주고 이 반복을 탈출한다.
        if (grid[ny][nx] == -1) {
          grid[ny][nx] = -2;
          queue.push([ny, nx]);
          break;
        }
        // 다음 땅이 땅이고 땅에서 땅으로 이동하면 섬의 개수는 동일한 것이다.
        if (grid[ny][nx] == 0 && grid[y][x] > 0) {
          grid[ny][nx] = grid[y][x];
        }
        // 다음 땅이 땅이고 땅에서 물에서 땅으로 이동했을 때만 섬의 개수를 세어준다.
        if (grid[ny][nx] == 0 && grid[y][x] < 0) {
          grid[ny][nx] = count;
          count += 1;
        }
        // 방문 노드의 좌표를 큐에 넣는다.
        queue.push([ny, nx]);
      }
    }
  }
  result = Math.max(...grid.flat());
  return result;
};
~~~

### DFS

~~~js
// file:'countIslands_dfs.js'
const countIslands = function (grid) {
  // dfs solution
  const HEIGHT = grid.length;
  const WIDTH = HEIGHT && grid[0].length;
  let count = 0;

  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      if (grid[row][col] === '0') continue;
      count++;
      searchIsland(row, col);
    }
  }

  function searchIsland(row, col) {
    if (row < 0 || col < 0 || row >= HEIGHT || col >= WIDTH) return;
    if (grid[row][col] === '0') return;

    grid[row][col] = '0';
    searchIsland(row - 1, col);
    searchIsland(row + 1, col);
    searchIsland(row, col - 1);
    searchIsland(row, col + 1);
  }

  return count;
};
~~~



<br/>
<br/>
<br/>
<br/>

