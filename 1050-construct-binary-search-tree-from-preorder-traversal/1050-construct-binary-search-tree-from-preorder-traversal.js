/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length===0) return null;
    if(preorder.length===1) return new TreeNode(preorder[0]);

    let ans = new TreeNode(preorder[0])
    for(let i=1; i<preorder.length; i++){
        res = bst(ans, preorder[i]);
    }

    function bst(root, val) {
        if(!root) return new TreeNode(val);
        if(val < root.val){
            root.left = bst(root.left, val);
        } else {
            root.right = bst(root.right, val);
        }

        return root;
    }

    return ans;
};