var canFinish = function (numCourses, prerequisites) {
  // 课程表问题，是一种拓扑排序问题。可参考210题目，但此题只需要返回是否可以修完的布尔值

  //  BFS遍历，关键是构造邻接表和找到初始未依赖的课程编号
  const graph = {};
  const degree = new Array(numCourses).fill(0);

  // 采用邻接表来保存课程的依赖关系，并且记录被依赖课程的先导次数
  for (const it of prerequisites) {
    if (graph[it[0]] === undefined) graph[it[0]] = [it[1]];
    else graph[it[0]].push(it[1]);

    degree[it[1]]++;
  }

  //degree[i]为0，表示该课程不属于任何课程的先导课
  // 则需要将这些课程编号入栈
  const stack = [];
  for (let i = 0; i < numCourses; i++) {
    if (degree[i] === 0) stack.push(i);
  }

  let cnt = 0;
  while (stack.length) {
    const c = stack.pop();
    cnt++;
    for (const pre of graph[c] || [c]) {
      // 注意下面degree[pre]可能为负数，但是不影响结果
      degree[pre]--;

      if (degree[pre] === 0) {
        stack.push(pre);
      }
    }
  }

  return cnt === numCourses;
};

canFinish(2, [[1, 0]]);
