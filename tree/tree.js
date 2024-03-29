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


function deepFirst(tree) {
    if (!tree) {
        return;
    }
    console.log(tree.value);

    deepFirst(tree.left)
    deepFirst(tree.right)
}

// deepFirst(tree);

function breadthFist(tree) {
    const queue = [tree];

    while (queue.length) {
        const value = queue.shift();

        console.log(value.value);

        if (value.left) {
            queue.push(value.left)
        }

        if (value.right) {
            queue.push(value.right)
        }

    }

}

// breadthFist(tree)

module.exports = tree;

