/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const mid = Math.floor(nums.length / 2);

    const node = new TreeNode(nums[mid]);

    if (mid !== 0) {
        node.left = sortedArrayToBST(nums.slice(0, mid));
    }

    if (mid + 1 !== nums.length) {
        node.right = sortedArrayToBST(nums.slice(mid + 1))
    }


    return node;
};

sortedArrayToBST([1,3])