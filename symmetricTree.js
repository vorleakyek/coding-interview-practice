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
var isSymmetric = function(root) {

    function compareSubTrees (subTree1, subTree2) {
        if(subTree1 === null && subTree2 === null) return true;

        if (subTree1 === null || subTree2 === null || subTree1.val !== subTree2.val) return false; 

        return compareSubTrees(subTree1.left, subTree2.right) && compareSubTrees(subTree1.right, subTree2.left);
    }

   return compareSubTrees(root.left,root.right);
    
   
};
