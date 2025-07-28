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
    function dfs(root, curr){
        if(!root) return 0;

        curr = curr * 10 + root.val;
        // If it's a leaf node
        if(!root.left && !root.right){
            return curr;
        }
        // Recursive calls to left and right subtrees
        return dfs(root.left, curr) + dfs(root.right, curr);
    }

    return dfs(root, 0);
};