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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxi = -Infinity;  
    function helper(node) {
        if (node === null) return 0;
        let lhs = Math.max(helper(node.left), 0); 
        // Ignore negative paths
        let rhs = Math.max(helper(node.right),0); 
        // Ignore negative paths
        maxi = Math.max(maxi, lhs + rhs + node.val);
        return node.val + Math.max(lhs, rhs);
    }
    helper(root);
    return maxi;
}