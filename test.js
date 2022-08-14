/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];

    if (!nums || !nums.length) {
        return result;
    }

    nums = nums.sort((a, b) => a - b);

    const visited = {};

    function recursion(arr, start) {
        result.push([...arr]);

        for (let i = start; i < nums.length; i++) {
            if (i - 1 >= 0 && nums[i] === nums[i - 1] && visited[nums[i]]) {
                continue;
            }


            arr.push(nums[i]);

            recursion(arr, i + 1);

            arr.pop();
    
            visited[nums[i]] = true;
        }
    }

    
    recursion([], 0)
   
    return result;
};

subsetsWithDup([1,2,2])