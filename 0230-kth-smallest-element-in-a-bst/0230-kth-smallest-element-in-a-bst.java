/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    private static int ans = 0;
    private static int c = 0;

    public int kthSmallest(TreeNode root, int k) {
        c = k;
        inorder(root);
        return ans;
    }

    public void inorder(TreeNode root) {
        if(root.left!=null) inorder(root.left);
        c--;
        if(c==0){
            ans = root.val;
            return;
        }
        if(root.right!=null) inorder(root.right);
    }
}