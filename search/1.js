// 找出第一个大于目标元素的索引

// nums = {1,3,5,5,6,6,8,9,11} target = 7

function searchFirstOver(nums, target) {
    let l = 0, r = nums.length - 1;

    while(l <= r) {
        const mid = Math.floor((r + l) / 2);


        if (nums[mid] > target) {
           if (mid === 0 || nums[mid - 1] <= target) {
                return mid;
           } else {
            r = mid - 1;
           }

        } else if (nums[mid] <= target) {
            l = mid + 1;
        }
    }


    return - 1;
}


// 找出第一个小于目标元素的索引, 6
function searchFirstLess(nums, target) {
    let l = 0, r = nums.length - 1;

    while(l <= r) {
        const mid = Math.floor((l + r) / 2);

        // 
        if (nums[mid] > target) {

        }

    }


}
// l = 0, r = 8 -> mid = 4; value -> 6 -< r = mid - 1;
const nums = [1,3,5,5,6,6,8,9,11]

// nums = {} target = 7

console.log(searchFirstOver(nums, -1))