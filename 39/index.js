/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const result = [];

    function  recursion (arr, value, index) {
        // 这种组合可用
        if (value === target) {
            result.push([...arr]);
            return;
        } else if (value > target) {
            return;
        }


        for (let i = index; i < candidates.length; i++) {
            arr.push(candidates[i]);

            recursion(arr, value + candidates[i], i);

            arr.pop();
        }
    }

    recursion([], 0, 0)

    return result;
};

combinationSum([2,3,5], 8)