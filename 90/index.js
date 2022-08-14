var subsetsWithDup = function(nums) {
    const result = [];

    if (!nums || !nums.length) {
        return result;
    }

    nums = nums.sort((a, b) => a - b)

    const visited = new Array(nums.length).fill(false);

    function dfs(arr, start){
        result.push([...arr]);

        for (let i = start; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
                continue;
            }


            visited[i] = true;
            arr.push(nums[i]);

            dfs(arr, i + 1);

            visited[i] = false;
            arr.pop();
        }
    }

    dfs([], 0);

    return result;
};

subsetsWithDup([1, 1, 2])
