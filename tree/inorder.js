const tree = require("./tree");

function inOrder(root) {
  if (!root) {
    return;
  }
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

function inOrderStack(root) {
  if (!root) {
    return;
  }

  const stack = [];

  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);

      p = p.left;
    }

    const n = stack.pop();
    console.log(n.value);

    p = n.right;
  }
}

// inOrder(tree);
// inOrderStack(tree);
