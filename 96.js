/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    let res = 0;


    function recursion(index) {
        if (index === 0) {
            res++;
            return;
        }

        for (let i = 1; i < index; i++) {
            recursion(i);
        }

        for (let i = index + 1; i < n; i++) {
            recursion(i);
        }
    }



    for (let i = 1 ; i < n; i++) {
        recursion(i);
    }

    return res;
};

numTrees(3)