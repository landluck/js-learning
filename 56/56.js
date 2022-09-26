function compare(v2, v1) {
    const [start1, end1] = v1;
    const [start2, end2] = v2;

    // v1 < v2
    if (end1 <= start2) {
        return 1;
    }


    // v1 > v2
    if (start1 >= end2) {
        return -1;
    }

    //  v1  < v2
    if (start1 <= start2) {
        return 1;
    } else {
        return -1;
    } 
}

function merge(intervals) {
    const result = intervals.sort(compare);

    let p1 = 0;
    let p2 = 1;

    const data = [];

    while(p1 < intervals.length) {
        const [start1, end1] = intervals[p1]; 
        const [start2, end2] = intervals[p2] || [];

        // 说明两个集合没有交集了，那需要进行合并
        if (end1 < start2 || p2 === intervals.length) {
            const [_, prevEnd] = intervals[p2 - 1];
            data.push([start1, prevEnd])
    
            p1 = p2;
        }

        if (p2 < intervals.length) {
            p2++;
        }

    }


    return data;
}

merge([[1,3],[2,6],[8,10],[15,18]])