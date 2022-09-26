/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    // 暴力求解
    // 时间: O(n * n)
    // 空间：O(1)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }

    // return [-1, -1];

    // 字典求解

    const map = new Map();

    for (const [index, value] of nums.entries()) {
        if (map.has(target - value)) {
            return [index, map.get(target - value)]
        }

        map.set(value, index);
    }

    return [-1, -1];
};

console.log(twoSum([3, 2, 4], 6));