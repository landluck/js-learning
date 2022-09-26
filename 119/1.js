/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let prev = [];

    for (let i = 0; i <= rowIndex; i++) {
        const result  = new Array(i + 1).fill(0);
        
        result[0] = result[i] = 1;

        for (let j = 1; j < i; j++) {
            result[j] =  prev[j - 1] + prev[j]
        }

        prev = result;
    }


    return prev;
};

console.log(getRow(3))