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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let dq = [root], ans = [], flag = true;
    while(dq[0]){
        let qlen = dq.length;
        let level = [];
        for(let i=0;i<qlen;i++){
            let curr = flag ? dq.shift() : dq.pop();
            level.push(curr.val);
            if(flag){
                if(curr.left) dq.push(curr.left);
                if(curr.right) dq.push(curr.right);
            } else {
                if(curr.right) dq.unshift(curr.right);
                if(curr.left) dq.unshift(curr.left);
            }
        }
        ans.push(level);
        flag = !flag;
    }

    return ans;
};