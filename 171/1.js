/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;

    const charValueA = 'A'.charCodeAt(0);
    const maxIndex = columnTitle.length - 1;

    for (let i = maxIndex; i >=0; i--) {
        const charValue = columnTitle[i].charCodeAt(0) - charValueA + 1;

        result += charValue * Math.pow(26, maxIndex - i);
    }


    return result;
};



console.log(titleToNumber('ZY'));