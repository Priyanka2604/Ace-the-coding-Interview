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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let inans = [];
    inorder(root, inans)
    return inans[k-1];

    function inorder(root, inans) {
        if(root==null) return;
        inorder(root.left, inans);
        inans.push(root.val);
        inorder(root.right, inans);
        return;
    }
};

// 1,2-3,4-5,6