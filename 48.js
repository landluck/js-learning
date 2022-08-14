/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const len = matrix.length;
    const half = Math.floor(len / 2);

    function swap(i1, j1, i2, j2) {
        const temp  = matrix[i1][j1];

        matrix[i1][j1] =  matrix[i2][j2]
        matrix[i2][j2] = temp;        
    }

    // 水平
    for (let i = 0; i < half; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
           swap(i, j, len  - i - 1, j)
        }
    }


    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            swap(i, j, j, i);
        }
    }

    return matrix;
};


rotate([[1,2,3],[4,5,6],[7,8,9]])
