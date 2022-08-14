// function orderSearch(array, value) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if (element === value) {
//       return index;
//     }
//   }

//   return -1;
// }

// // console.log(orderSearch([1, 3, 4], 4))

// function halfSearch(arr, value) {
//     const l = arr.length - 1;

//     function halfSearchInner(startIndex, endIndex) {
//         if (startIndex > endIndex) {
//             return -1;
//         }

//         const mid = Math.floor((endIndex + startIndex) / 2);

//         const midValue = arr[mid];

//         if (midValue === value) {
//             return mid;
//         } else if (midValue < value) {
//             return halfSearchInner(mid + 1, endIndex)
//         } else {
//             return halfSearchInner(startIndex, mid - 1);
//         }
//     }

//     return halfSearchInner(0, l)
// }

// function halfSearch2(arr, target) {
//     let endIndex = arr.length - 1;
//     let startIndex = 0;

//     while(startIndex <= endIndex) {
//         const mid = Math.floor((startIndex + endIndex) / 2)
//         const midValue = arr[mid];

//         if (midValue < target) {
//             startIndex = mid + 1;
//         } else if(midValue > target) {
//             endIndex = mid - 1;
//         } else {
//             return mid;
//         }
//     }

//     return -1;
// }

// const arr = []
// const r = 1000;
// let i = 0;

// while(i < r) {
//     arr.push(i)
//     i++;
// }

// console.time('test')
// console.log(orderSearch(arr, 999))
// console.timeEnd('test')

// console.time('test1')
// console.log(halfSearch(arr, 999))
// console.timeEnd('test1')

// console.time('test2')
// console.log(halfSearch2(arr, 999))
// console.timeEnd('test2')

function search(arr, target) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

// console.log(search([1, 2, 3, 4, 5, 6, 9], 6));

function search(arr, target) {
    let start = 0,
      end = arr.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
