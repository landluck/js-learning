/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) {
        return '';
    }

    const firstStr = strs[0];

    if (strs.length === 1) {
        return firstStr;
    }

    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            // 不相等，退出
            if (firstStr[i] !== strs[j][i]) {
                return firstStr.slice(0, i);
            }
        }
    }

    return firstStr;
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));