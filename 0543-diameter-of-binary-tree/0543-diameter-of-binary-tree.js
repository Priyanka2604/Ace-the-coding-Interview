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


var diameterOfBinaryTree = function(root) {
    let diameter = 0
    dfs(root);
    return diameter;

    function dfs(root) {
        if(root===null) return 0;
        if(root.left === null && root.right===null) return 1;
        const lh = dfs(root.left);
        const rh = dfs(root.right);
        diameter = Math.max(diameter, lh+rh)

        return Math.max(lh, rh)+1;
    }
}