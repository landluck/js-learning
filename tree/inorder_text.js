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

function inOrder(root) {
  if (!root) {
    return;
  }

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

// inOrder(tree);

function inOrderStack(root) {
  const stack = [];
  let p = root;

  while (stack.length || p) {

    // [1, 2, 4]
    while (p) {
      stack.push(p);
      p = p.left;
    }

    // 2
    const n = stack.pop();
    console.log(n.value);

    p = n.right;
  }
}

inOrderStack(tree);
