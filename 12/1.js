/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    // const map = {
    //     1: 'I',
    //     4: 'IV',
    //     5: 'V',
    //     9: 'IX',
    //     10: 'X',
    //     40: 'XL',
    //     50: 'L',
    //     90: 'XC',
    //     100: 'C',
    //     400: 'CD',
    //     500: 'D',
    //     900: 'CM',
    //     1000: 'M',
    // };

    // if (map[num]) {
    //     return map[num];
    // }

    // // 可以二分，因为数组排序了
    // function findMaxValue (num, nums) {
    //     if (map[num]) {
    //         return [num, map[num]];
    //     }

    //     let l = 0, r = nums.length - 1;

    //     while(l <= r) {
    //         const mid = Math.floor((l + r) / 2);

    //         if (nums[mid] < num) {
    //             l = mid + 1;
    //         } else {
    //             r = mid - 1;
    //         }
    //     }

    //     return [nums[l - 1], map[nums[l - 1]]];
    // }

    // const keys = Object.keys(map);

    // let result = '';

    // while(num > 0) {
    //     const [value, str] = findMaxValue(num, keys);

    //     num -= value;
    //     result += str;
    // }


    // return result;

    const map = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    };

    if (map[num]) {
        return map[num];
    }

    const result = [];

    for (const [value, str] of Object.entries(map)) {
        while(num >= value) {
            result.push(str);
            num -= value;
        }

        if (num === 0) {
            break;
        }
    }

    return result.join('');
};

intToRoman(58);