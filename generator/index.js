function* yes() {
  yield 1;
  yield 2;
  return 3;
}

const iterator = yes();

// for (const i of iterator) {
//   console.log(i);
// }

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())