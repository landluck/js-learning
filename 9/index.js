/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s = x.toString();

    if (x.length < 2) {
        return true;
    }

    let l = 0, r = s.length - 1;

    while(l !== r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
};


function reverteNum(x) {
    let cur = 0;
    let num = x;

    while(num != 0) {
        cur = cur * 10 + num % 10;
        num /= 10;
    }

    return cur;
}

console.log(reverteNum(121));
