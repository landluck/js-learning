const tree = require("./tree");



// module.exports = {
//     value: 1,
//     left: {
//         value: 2,
//         left: {
//             value: 4,
//             left: null,
//             right: null,
//         },
//         right: {
//             value: 5,
//             left: null,
//             right: null,
//         },
//     },
//     right: {
//         value: 3,
//         left: {
//             value: 6,
//             left: null,
//             right: null,
//         },
//         right: {
//             value: 7,
//             left: null,
//             right: null,
//         },
//     },
// }


function postOrder(root) {
  if (!root) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}


//  [4, 5, 2, 6, 7, 3, 1]
//  [1, 2, 4, 5, 3, 6, 7]


// output [1, 3, 7, 6, 2, 5, 4]
// -> [1]
// 1 -> [2, 3]
// 3 -> [2, 6, 7]
// 7 -> [2, 6]
// 6 -> [2]
// 2 -> [4, 5]
// 5 -> [4]
// 4 -> []


function postOrderStack(root) {
  if (!root) {
    return;
  }

  const stack = [root];
  const outputStack = [];


  while(stack.length) {
    const n = stack.pop();

    outputStack.push(n);

    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);

  }

  while(outputStack.length) {
    const n = outputStack.pop();

    console.log(n.value)
  }


}

// postOrder(tree);
postOrderStack(tree);
