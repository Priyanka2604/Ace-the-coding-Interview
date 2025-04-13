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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return dfs(root) !== -1;
};

var dfs = (root) => {
    if(!root) return 0;
    let lh = dfs(root.left);
    if(lh===-1) return -1;
    let rh = dfs(root.right);
    if(rh===-1) return -1;
    if(Math.abs(lh-rh)>1) return -1;
    return Math.max(lh,rh)+1;
}