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
    if(!root) return true;
    let lh = getHeight(root.left);
    let rh = getHeight(root.right);
    if(Math.abs(lh-rh)<=1 && isBalanced(root.left) && isBalanced(root.right)){
        return true;
    }

    return false;
};

var getHeight = (root) => {
    if(!root) return 0;
    let q = [], level = 0;
    q.push(root);
    while(q.length>0){
        const qlen = q.length;
       for(let i=0;i<qlen;i++){
            const curr = q.shift();
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        level++;
    }
    return level;
}