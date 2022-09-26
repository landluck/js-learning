/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // let i = nums.length - 2;
    // // 12345 -> 12354

    function swap(i1, i2) {
        const temp = nums[i1];

        nums[i1] = nums[i2];
        nums[i2] = temp;
    }


    // while(i >= 0 && nums[i] >= nums[i + 1]) {
    //     i--;
    // }

    // if (i >= 0) {
    //     let j = nums.length - 1;

    //     while(j >=0 && nums[i] >= nums[j]) {
    //         j--;
    //     }

    //     swap(i, j);
    // }

  


    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[i] < nums[j]) {
                swap(i, j);
                
                const sortArr = nums.slice(i + 1).reverse();

                nums.splice(i + 1, sortArr.length, ...sortArr);
                return;
            }
        }
    }

    return nums.reverse();

};

nextPermutation([1, 3, 4, 2])