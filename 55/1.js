/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    if (nums.length < 2) {
        return true;
    }

    let maxDistance = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (i < maxDistance) {
            maxDistance = Math.max(maxDistance, i + nums[i])
        } else {
            break;
        }       
    }

    return maxDistance >= nums.length - 1;
};

canJump([2,3,1,1,4])

