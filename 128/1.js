/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const map = {};

    nums.forEach(n => map[n] = n);

    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i] - 1] === undefined) {
            let curLen = 1;

            let j = nums[i];

            while(map[j + 1] !== undefined) {
                j++;
                curLen++;
            }

            maxLen = Math.max(maxLen, curLen);
        }
    }


    return maxLen;
};

longestConsecutive([0,-1])