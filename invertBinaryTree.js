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
 * @return {TreeNode}
 */
var invertTree = function(root) {
   function invertNode(node) {
    if (node === null) return; 

    [node.left, node.right] = [node.right, node.left];
    invertNode(node.left);
    invertNode(node.right);
   } 

   invertNode(root);
   return root; 

};
