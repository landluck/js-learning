/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const result = [];

    const aArr = a.split('');
    const bArr = b.split('');
    let isAdd = false;

    while(aArr.length || bArr.length) {
        const value = Number(aArr.pop() || 0) + Number(bArr.pop() || 0) + (isAdd ? 1 : 0);
       
        if (value % 2 === 1) {
            result.unshift('1');
        } else {
            result.unshift('0');
        }

        isAdd = value > 1; 
    }

    if (isAdd) {
        result.unshift('1');
    }

    return result.join('')
};

console.log(addBinary('1111', '1111'))