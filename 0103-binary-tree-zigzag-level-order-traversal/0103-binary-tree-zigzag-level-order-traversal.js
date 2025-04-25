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
    let q = [root], ans = [], flag = true;
    while(q[0]){
        let qlen = q.length;
        let level = [];
        if(flag){
            for(let i=0;i<qlen;i++){
                let curr = q.shift();
                level.push(curr.val);
                if(curr.left) q.push(curr.left);
                if(curr.right) q.push(curr.right);
            }
            flag = false;
        } else {
            for(let i=0;i<qlen;i++){
                let curr = q.pop();
                level.push(curr.val);
                if(curr.right) q.unshift(curr.right);
                if(curr.left) q.unshift(curr.left);
            }
            flag = true;
        }

        ans.push(level);
    }

    return ans;
};