/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // const result = [];

  // if (!nums || !nums.length) {
  //     return result;
  // }

  // function recursion(arr) {
  //     // 满足条件
  //     if (arr.length === nums.length) {
  //         result.push(arr);
  //     }

  //     for (let i = 0;  i < nums.length; i++){
  //         if (!arr.includes(nums[i])) {
  //             recursion(arr.concat([nums[i]]))
  //         }
  //     }

  // }

  // recursion([]);

  // return result;

  const result = [];
  const temp = [];
  const visited = {};

  function dfs() {
    if (temp.length === nums.length) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[nums[i]]) {
        continue;
      }

      visited[nums[i]] = true;
      temp.push(nums[i]);

      dfs();

      temp.pop();
      visited[nums[i]] = false;
    }
  }

  dfs();

  return result;
};
