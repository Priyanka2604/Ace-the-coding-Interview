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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let ans = [];
    const dfs = (node, curSum, path) => {
        if(!node) return;
        curSum += node.val;
        path.push(node.val);

        if(!node.left && !node.right && curSum === targetSum) {
            ans.push([...path]);
        }

        dfs(node.left, curSum, path);
        dfs(node.right, curSum, path);
        path.pop();
    }

    dfs(root, 0, []);
    return ans;
};