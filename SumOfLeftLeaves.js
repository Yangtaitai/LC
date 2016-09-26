// Find the sum of all left leaves in a given binary tree.
//   3
//   / \
//   9  20
//     /  \
//   15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
 // first I need to decide whether it is a leaf, then do the calculation.
 var sumOfLeftLeaves = function(root) {
    // it is used to detect leaves.
    var isLeave = function(root) {
        if(root == null) return false;
        if(root.left == null && root.right == null) return true;
        return false;
    }
    
    var result = 0;
   if(root != null) {
      if(isLeave(root.left)){         // when the root.left is a leaf.
          result += root.left.val
       }else{
          result += sumOfLeftLeaves(root.left);   // when the root.left is not a leaf
       }
       result += sumOfLeftLeaves(root.right);   // find left leave in the root.right  
    }
    
    return result;
 }
