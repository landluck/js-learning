function Iterator(arr) {
  let index = 0;
  const maxIndex = arr.length;

  return {
    next() {
      const value = index < maxIndex ? arr[index++] : undefined;

      return { value, done: index === maxIndex };
    },

    return () {
      console.log('i am return')
      return { }
    }
  };
}

const iterator = Iterator([1, 2, 3, 4]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log('end')
console.log(iterator.next());
console.log(iterator.next());

const obj = {
  [Symbol.iterator]: () => Iterator([1, 2, 3, 4])
}




// for (const i of obj) {
//   console.log(i)
//   if (i === 3) {
//     break;
//   }
// }