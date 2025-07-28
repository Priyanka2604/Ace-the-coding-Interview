/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumNumbers(root *TreeNode) int {
    var dfs func(node *TreeNode, curr int) int

    dfs = func(node *TreeNode, curr int) int {
        if node == nil {
            return 0
        }

        curr = curr * 10 + node.Val

        if(node.Left == nil && node.Right == nil){
            return curr
        }

        return dfs(node.Left, curr) + dfs(node.Right, curr)
    }
    
    return dfs(root, 0)
}