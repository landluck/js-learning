/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    // 排序
    intervals.sort((a, b) => a[0] - b[0])

    const result = [];

    
    for (const interval of intervals) {
        const [l, r] = interval;

        if (result.length === 0 || result[result.length - 1][1] < l) {
            result.push(interval);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], r)   
        }
    }


    return result;
};