// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 
 //if nodes are all null or the val is equal, they are same node;
 
 //if nodes number are not the same, false, means one node is null.
 
 var isSameTree = function (p,q) {
    if(p === null && q === null) return true;
    if(p !== null && q === null || p === null && q !== null) return false;
    if(p.val != q.val) return false;
  
    return isSameTree(p.left,q.left) && isSameTree(q.right,p.right);
 }
