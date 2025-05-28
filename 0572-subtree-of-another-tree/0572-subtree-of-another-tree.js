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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return subRoot===null;
    if(isIdentical(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isIdentical(root, subRoot) {
    if(!root && !subRoot) return true;
    if(!root || !subRoot) return false;
    if(root.val !== subRoot.val){
        return false;
    }

    return isIdentical(root.left, subRoot.left) && isIdentical(root.right, subRoot.right);
}