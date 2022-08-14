function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let z = 0; z < arr.length - 1 - i; z++) {
      if (arr[z] > arr[z + 1]) {
        const temp = arr[z];
        arr[z] = arr[z + 1];
        arr[z + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([4, 5, 3, 2, 1]));

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let originMinIndex = i;
    let minIndex = originMinIndex;

    for (let z = minIndex + 1; z < arr.length; z++) {
      // 当前最小值大于下一个值
      if (arr[minIndex] > arr[z]) {
        minIndex = z;
      }
    }

    const temp = arr[originMinIndex];
    arr[originMinIndex] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
// selectSort([5, 4, 3, 2, 1]);

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let originIndex = i;
    let index = originIndex;
    let targetIndex = originIndex;

    while (index--) {
      if (arr[originIndex] < arr[index]) {
        targetIndex = index;
      } else {
        break;
      }
    }

    if (originIndex !== targetIndex) {
      const result = arr.splice(originIndex, 1);
      arr.splice(targetIndex, 0, ...result);
    }
  }

  return arr;
}

// insertSort([5, 4, 3, 2, 1]);

// [5, 4] [3, 2, 1] [1, 2, 3, 4, 5]
// [5], [4] -- merge  [4, 5]
// [3, 2], [1] -- merge [1, 2, 3]
// [3] [2] -- merge [2, 3]
// [1] --- merge  [1]

function mergeSort(arr) {
  function divide(arr) {
    if (arr.length === 1) {
      return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);

    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);

    const orderLeft = divide(left);
    const orderRight = divide(right);

    const result = [];

    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        result.push(
          orderLeft[0] > orderRight[0] ? orderRight.shift() : orderLeft.shift()
        );
      } else if (orderLeft.length) {
        result.push(orderLeft.shift());
      } else if (orderRight.length) {
        result.push(orderRight.shift());
      }
    }

    return result;
  }

  const result = divide(arr);
}

// mergeSort([5, 4, 3, 2, 1]);

function fastSort(data) {
  function divide(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = arr[0];

    const finalLeft = [];
    const finalRight = [];

    for (let i = 1; i < arr.length; i++) {
  
      const value = arr[i];
    
      if (value >= mid) {
        finalRight.push(value);
      } else {
        finalLeft.push(value);
      }
    }

    const orderLeft = divide(finalLeft);
    const orderRight = divide(finalRight);

    return [...orderLeft, mid, ...orderRight];
  }

  return divide(data)
}

// console.log(fastSort([2, 4, 5, 3, 1]));