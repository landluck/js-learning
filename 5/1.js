/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s;
    }

    let maxStr = '';

    for (let i = 0;  i < s.length; i++) {
        checkMax(i, i);
        checkMax(i, i + 1);
    }


    function checkMax(l, r) {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }

        const start = l + 1;
        
        if (r - start > maxStr.length) {
            maxStr = s.slice(start, r);
        }
    }

    return maxStr;
};

longestPalindrome('babad')