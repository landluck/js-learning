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

function preOder(root) {
    if (!root) {
        return;
    }
    console.log(root.value);

    preOder(root.left);
    preOder(root.right);
}

function preOderStack(root) {
    const stack = [root];

    while(stack.length) {
        const value = stack.pop();

        console.log(value.value);

        if (value.right) {
            stack.push(value.right);
        }

        if (value.left) {
            stack.push(value.left);
        }
    }
}

preOder(tree);
preOderStack(tree);