// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:
// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True
// Example 2:
// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 28

// Output: False

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 *
class Solution {
    public boolean findTarget(TreeNode root, int k) {
       List<Integer> list = traverse(root);
       
       int i = 0;
       int j = list.size() - 1;
       while (i < j) {
        int sum = list.get(i) + list.get(j);
        if (sum == k) {
          return true;
        } else if (sum > k) {
          j--;
        } else {
          i++;
        }
       }
       
       return false;
    }
    
    public List<Integer> traverse (TreeNode root) {
    
      List<Integer> list = new ArrayList<>();
      if (root == null) {
        return list;
      }
      
      List<Integer> left = traverse(root.left);
      List<Integer> right = traverse(root.right);
      
      list.addAll(left);
      list.add(root.val);
      list.addAll(right);
      
      return list;
    }
}
