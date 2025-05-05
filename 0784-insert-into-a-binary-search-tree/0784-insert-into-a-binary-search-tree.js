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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let newR = root;
    if(!root) return new TreeNode(val);
    while(true){
        if(root.val<val){
            if(root.right){
                root = root.right;
            } else {
                root.right = new TreeNode(val);
                break;
            }
        } else {
            if(root.left){
                root = root.left;
            } else {
                root.left = new TreeNode(val);
                break;
            }
        }

    }

    return newR;
};