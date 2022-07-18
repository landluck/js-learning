const tree = {
  value: 1,
  left: { 
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

// 4 5 2 6 7 3 1
// 1 2 4 5 3 6 7

// 1 3 7 6 2 5 4

function postOrder(root) {
  if (!root) {
    return;
  }

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}


function postOrderStack(root) {
  const stack = [root];
  const out = [];

  while(stack.length) {
    const value = stack.pop();

    out.push(value);

    if (value.left) {
      stack.push(value.left)
    }

    if (value.right) {
      stack.push(value.right);
    }
  }

  while(out.length) {
    const value = out.pop();

    console.log(value.value);
  }
}

// postOrder(tree);
postOrderStack(tree);
