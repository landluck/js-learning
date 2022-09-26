/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    // const sLen = s.length;
    
    // let result = false;

    // function recursion(str) {
    //     if (str.length > sLen) {
    //         return;
    //     }

    //     if (str === s) {
    //         result = true;
    //         return;
    //     }

    //     for (let i = 0; i < wordDict.length; i++) {
    //         recursion(str + wordDict[i]);
    //     }
    // }

    // recursion('');

    // return result;

    const map = {};

    for (const str of wordDict) {
        map[str] = true;
    }


    let p1 = 0;
    let p2 = 0;
    
    

    while(p2 < s.length) {
        p2++;
    
        const str = s.slice(p1, p2);

        if (map[str] !== undefined) {
            p1 = p2;
        }

        if (map[s.slice(p1)] !== undefined) {
            p1 = p2 = s.length;
        }

    }

    return p1 === p2;
};

wordBreak("aaaaaaa", ["aaaa","aaa"])