/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let p1 = i + 1;
    let p2 = nums.length - 1;

    while (p1 < p2) {
      const val = nums[i] + nums[p1] + nums[p2];

      if (val < 0) {
        p1++;
      } else if (val > 0) {
        p2--;
      } else {
        result.push([nums[i], nums[p1], nums[p2]]);

        while (p1 < p2 && nums[p1] === nums[p1 + 1]) {
          p1++;
        }

        while (p2 > p1 && nums[p2] === nums[p2 - 1]) {
          p2--;
        }

        p1++;
        p2--;
      }
    }
  }

  return result;
};

threeSum([-1,0,1,2,-1,-4])