/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let slow = 0;
    let fast = 0;
    let sum = 0;

    let minLen = Infinity;

    while(fast < nums.length) {
        sum += nums[fast];
        

        while(sum >= target) {
            minLen = Math.min(minLen, fast - slow  + 1);
            sum -= nums[slow];
            slow++
        }
    
        fast++;
    }

    return minLen;
};


minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])