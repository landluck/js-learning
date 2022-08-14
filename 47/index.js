/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    const temp = [];
    const visited = new Array(nums.length).fill(false);

    nums = nums.sort((a, b) => a - b);
  
  
    function dfs() {
      if (temp.length === nums.length) {
        result.push([...temp]);
        return;
      }
  
      for (let i = 0; i < nums.length; i++) {      
        if (i > 0 && nums[i] === nums[i-1] && !visited[i - 1]) {
          continue;
        }
  
        if (visited[i]) {
          continue;
        }
  
        visited[i] = true;
        temp.push(nums[i]);
  
        dfs();
  
        temp.pop();
        visited[i] = false;
      }
    }
  
    dfs();
  
    return result;
};


permuteUnique([1,1,2]);