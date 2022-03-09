---
layout:     post
title:     'robotPath'
subtitle:  'robotPath(BFS)'
category:   coding-test
tags:       coding-test
image: 
  path: /assets/img/coding-test/robotPath_main.jpg
related_posts: 
  - _posts/Data Structures and Algorithms/2022-02-01-greedy.md
  - _posts/Data Structures and Algorithms/2022-02-05-dfs-and-bfs.md
accent_color: rgba(0,174,239,1)
accent_image:
  background: url('/assets/img/background/abstract.jpg') center/cover
  overlay:    false
theme_color:  rgba(27,10,58,1)
---

* toc
{:toc .large-only}

## Problem

세로와 가로의 길이가 각각 M, N인 방의 지도가 2차원 배열로 주어졌을 때, 1은 장애물을 의미하고 0 이동이 가능한 통로를 의미한다. 로봇은 지도 위를 일분에 한 칸씩 상하좌우로 이동할 수 있다. 로봇의 위치와 목표 지점이 함께 주어질 경우, 로봇이 목표 지점까지 도달하는 데 걸리는 최소 시간을 리턴해야 한다.

**입력** <br/>
인자 1 : room <br/>
\- 배열을 요소로 갖는 배열 <br/>
\- room.length는 M <br/>
\- room[i]는 number 타입을 요소로 갖는 배열 <br/>
\- room[i].length는 N <br/>
\- room[i][j]는 세로로 i, 가로로 j인 지점의 정보를 의미 <br/>
\- room[i][j]는 0 또는 1 <br/>

인자 2 : src <br/>
\- number 타입을 요소로 갖는 배열 <br/>
\- src.length는 2 <br/>
\- src[i]는 0 이상의 정수 <br/>
\- src의 요소는 차례대로 좌표평면 위의 y좌표, x좌표 <br/>

인자 3 : dst <br/>
\- number 타입을 요소로 갖는 배열 <br/>
\- dst.length는 2 <br/>
\- dst[i]는 0 이상의 정수 <br/>
\- dst의 요소는 차례대로 좌표평면 위의 y좌표, x좌표 <br/>

**출력** <br/>
number 타입을 리턴

**주의사항** <br/>
M, N은 20 이하의 자연수.<br/>
src, dst는 항상 로봇이 지나갈 수 있는 통로이다.<br/>
src에서 dst로 가는 경로가 항상 존재한다.<br/>

**입출력 예시**
~~~js
let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8
~~~

## Solution

BFS는 시작 지점부터 가까운 노드까지 차례대로 그래프의 모든 노드를 탐색한다. <br>
상,하,좌,우로 연결된 모든 노드로의 거리가 1로 동일하므로 src(출발지)부터 BFS를 수행하여 모든 노드의 최단 거리 값을 기록하면 해결할 수 있다. 

~~~js
// file:'RobotPath.js'
const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const n = room[0].length
  const m = room.length
  // 편의상 x,y 좌표를 이용하기 위해 src를 reverse 해준다.
  const x = [...src].reverse()[0]
  const y = [...src].reverse()[1]
  // 이동할 네 가지 방향을 정의한다. (상,하,좌,우)
  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]

  // BFS는 queue자료 구조를 이용하고, javascript에선 배열의 push, shift method로 쉽게 queue를 구현할 수 있다. 
  const queue = []
  // 현재 위치를 queue에 넣는다 
  queue.push([x,y])

  function bfs(x,y){
    // 큐가 빌 때 까지 반복한다. 
    while (queue.length){
       // 반복할 떄 마다 queue에서 원소를 꺼내고,
       const temp = queue.shift()
       x = temp[0]
       y = temp[1]
       // 현재 위치에서 4가지 방향으로 한번씩 방문한다. 
       for (let i=0; i<4; i++){
         nx = x+dx[i]
         ny = y+dy[i]
         // 공간을 벗어난 경우 무시한다.
         if (nx < 0 || nx >= n || ny < 0 || ny >= m){
          continue;
         }
         // 이동 위치가 장애물인 경우 무시한다.
         if (room[ny][nx]===1){
          continue;
         }
         // 해당 노드를 처음 방문하는 경우에만 최단거리를 기록한다.
         if (room[ny][nx]===0){
          // 직전 위치에 1을 더하면 이동 거리(시간)가 된다.
          room[ny][nx] = room[y][x] + 1
          queue.push([nx,ny])
         }
         // 목적지에 도달했다면 탐색을 멈추고 출력한다.
         // JSON.strigify를 이용해 배열을 비교할 수 있다.
         if (JSON.stringify(room[ny][nx])===JSON.stringify(room[dst[0]][dst[1]])){
          return room[dst[0]][dst[1]]
         }
       }
     }
  }
  return bfs(x,y)
}
~~~