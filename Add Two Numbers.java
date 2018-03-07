// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        ListNode newHead = new ListNode(0);
        ListNode curr = newHead;
        
        while (l1 != null && l2 != null) {           
            ListNode node = new ListNode(l1.val + l2.val);
            curr.next = node;
            curr = node;
            l1 = l1.next;
            l2 = l2.next;
        }
         
        while (l1 != null) {
            ListNode node = new ListNode(l1.val);
            curr.next = node;
            curr = node;
            l1 = l1.next;
        }
        
      
        while (l2 != null) {
            ListNode node = new ListNode(l2.val);
            curr.next = node;
            curr = node;
            l2 = l2.next;
        }
        
        curr = newHead;
        
        while (curr != null) {
            if (curr.val >= 10) {
                curr.val = curr.val % 10;
                if (curr.next != null)
                    curr.next.val++;
                else { 
                    ListNode node = new ListNode(1);
                    curr.next = node;
                }
            }
            curr = curr.next;
        }
        return newHead.next;
    }
}}
