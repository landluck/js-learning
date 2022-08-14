/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if (!s || !t) {
        return false;
    }

    let i = 0, l = 0;


    while(i < s.length && l < t.length) {
        const v = s[i];
        const v2 = t[l];

        // 说明遇到相同字符了
        if (v === v2) {
            i++;
            l++;
        } else {
            l++;
        }
    }



    return i === s.length;
};

isSubsequence("abc", "ahbgdc")