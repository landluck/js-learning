/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {

    function compare(a, b) {
        const aStr = a.toString();
        const bStr = b.toString();

        return  Number(bStr + aStr) - Number(aStr + bStr);
    }


    const arr = nums.sort(compare);


    return arr.reduce((str, cur) => str += cur.toString(), '')
};

console.log(largestNumber([10,2]))