/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = []

    function generate(str, left, right) {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }

        if (left > 0) {
            generate(str + '(', left - 1, right);
        }

        if (right > left) {
            generate(str + ')', left, right - 1);
        }
    }

    generate('', n, n)

    return result;
};  

generateParenthesis(5);