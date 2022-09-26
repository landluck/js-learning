/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const [start, end] = newInterval;

    const result = [];

    let placed = false;


    for (const interval of intervals) {
        // 在插入的右侧 且没有交集
        if (intervals[0] > end) {
            if (!placed) {
                result.push(newInterval);
                placed = true;
            }

            result.push(interval);
        } else if (intervals[1] < left) {

        }




    }




};

insert([[1,3],[6,9]], [2, 5])