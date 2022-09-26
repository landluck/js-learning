var convertToTitle = function(columnNumber) {
    // base charcode
    const charCodeOfBase = 'A'.charCodeAt();

    const result = [];

    while(columnNumber > 0) {
        // 当前字符的值
        const num = (columnNumber - 1) % 26 + 1;

        // 转换成字符
        result.unshift(String.fromCharCode(num - 1 + charCodeOfBase))

        columnNumber = Math.floor((columnNumber - num) / 26)
    }


    return result.join('');
};

console.log(convertToTitle(701));