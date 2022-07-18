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


// 1 2 4 5 3 6 7

// arr = [1]
// 1 -> [3, 2]
// 2 -> [3, 5, 4]
// 4 -> [3, 5]
// 5 -> [3]
// 3 -> [7, 6]
// 6 -> [7]
// 7 -> []

function preOrder(root) {
  if (!root) {
    return;
  }
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}



function preOrderStack(root) {
  if (!root) {
    return;
  }

  const stack = [root];

  while (stack.length) {
    const n = stack.pop();

    console.log(n.value);

    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
}

preOrder(tree);
preOrderStack(tree);
