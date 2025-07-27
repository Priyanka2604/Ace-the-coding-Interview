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
    if(!root) return root;
    let st = [];
    st.push(root);
    while(st.length){
        curr = st.pop();
        if(curr.right){
            st.push(curr.right);
        }
        if(curr.left){
            st.push(curr.left);
        }
        if(st.length){
            curr.right = st[st.length - 1];
        }
        curr.left = null;
    }

    return root;
};