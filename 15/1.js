/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const result = [];

    if (nums.length < 3) {
        return result;
    }


    nums = nums.sort();

    for (let i = 0; i < nums.length; i++) {
        // 数组排序后，如果值已经大于 0， 后面也会是大于0，相加不可能为 0，直接退出循环
        if (nums[i] > 0) {
            break;
        }

        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let p1 = i + 1;
        let p2 = nums.length - 1;

        // 开始查找
        while(p1 < p2) {
            const val = nums[i] + nums[p1] + nums[p2];

            // 说明值大了
            if (val > 0) {
                p2--;
            } else if (val < 0) {
                p1++;
            } else {
                // 值相等
                result.push([nums[i], nums[p1], nums[p2]]);
                p1++;
                p2--;

                // 对 p1 和 p2 去重
                if (p1 < p2 && nums[p1] === nums[p1 + 1]) {
                    p1++;
                }

                if (p2 > p1 && nums[p2] === nums[p2 - 1]) {
                    p2--;
                }

            }
        
        }
    }


    return result;
};

threeSum([-1,0,1,2,-1,-4])