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
    if(!root) return;
    let curr = root;
    while(curr){
        if(curr.left){
            // Find the rightmost node of the left subtree
            let prev = curr.left;
            while(prev.right){
                prev = prev.right;
            }
            // Connect the right subtree to the rightmost node
            prev.right = curr.right;
            // Move the left subtree to the right
            curr.right = curr.left;
            curr.left = null; // Set left to null
        }
        curr = curr.right; // Move to the next node
    }

    return;
};