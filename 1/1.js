/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // n 数的解决思路主要在 指针对撞, 前提是进行排序

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diffValue = target - nums[i];

        if (map.has(diffValue)) {
            return [i, map.get(diffValue)];
        }

        map.set(nums[i], i);
    }


    return [-1, -1];
};