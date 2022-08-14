/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //    const memo = {};

  //     function tryRob(index) {
  //         if (index >= nums.length) {
  //             return 0;
  //         }

  //         if (memo[index]) {
  //             return memo[index];
  //         }

  //         let res = 0;

  //         for (let i = index; i < nums.length; i++) {
  //             const value = nums[i] + tryRob(i + 2);

  //             res = Math.max(res, value);
  //         }

  //         memo[index] = res;

  //         return res;
  //     }

  //     return tryRob(0)

  if (!nums.length) {
    return 0;
  }

  const db = [0, nums[0]];

  for (let i = 2; i <= nums.length; i++) {
    db.push(Math.max(db[i - 2] + nums[i - 1], db[i - 1]));
  }

  console.log(db);

  return db[nums.length];
};

console.log(rob([1, 2, 3, 1]));
// console.log(rob([2,7,9,3,331]));
// console.log(rob([2,1,1,2]));
