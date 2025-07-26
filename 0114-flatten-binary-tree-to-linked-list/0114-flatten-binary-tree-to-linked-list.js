/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let prev = null;

    function flattenTree(node){
        if(!node) return;

        flattenTree(node.right);
        flattenTree(node.left);

        node.right = prev;
        node.left = null;
        prev = node;
    }

    flattenTree(root);

    return;
};