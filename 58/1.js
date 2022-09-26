/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {

    let len = 0;
    let isWorld = false;
    let p = s.length - 1;

    while(p >= 0) {
        if (s[p] !== ' ') {
            isWorld = true;
            len++;
        } else {
            if (isWorld) {
                return len;
            }
        }
        p--;
    }

    return len;
};

lengthOfLastWord("Hello World")