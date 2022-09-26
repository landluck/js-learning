/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0, r = nums.length - 1;

    while(l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid;
        } 
        
        // 这一半是有序的
        if (nums[0] <= nums[mid]) {
            if(nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target < nums[nums.length - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }


    return - 1;
};

search([1, 3, 5], 1)