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
var sumNumbers = function(root) {
    let totalSum = 0;

    function dfs(root, curr){
        if(!root) return;

        curr = curr * 10 + root.val;

        if(!root.left && !root.right){
            totalSum += curr;
            return;
        }

        return dfs(root.left, curr) + dfs(root.right, curr);
    }

    dfs(root, 0);
    return totalSum;
    
};