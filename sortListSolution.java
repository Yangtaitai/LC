/* Sort a linked list in O(n log n) time using constant space complexity
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
 
// time comlexity require we can use quick sort or merge sort for linked list

public class sortListSolution{
    public ListNode sortList{
      if(head == null && head.next == null) return head;
      
      ListNode middle = getMiddle(head);
      
      ListNode right = sortList(middle.next); // right half of the list
      middle.next = null; // seperate the left half
      ListNode left = sortList(head); // left half of the list
      
      return merge(left,right);
    }
    
    // get the middle node of the list
    public ListNode getMiddle(ListNode head){
      if(head == null || head.next == null) return head;
      ListNode slow = head;
      ListNode fast = head.next;
      // use fast and slow to find the middle of the list;
      while(fast != null && fast.next != null){
          slow = slow.next;
          fast = fast.next.next;
      }
      return slow;
    }
    
    /*merge-sort the two subLists */

    public ListNode merge(ListNode head1, ListNode head2){
      ListNode dummy = new ListNode(0);
      ListNode cur = dummy;
      while(head1 != null && head2 != null){
        if(head1.val > head2.val){
          cur.next = head2;
          head2 = head2.next;
        }else{
          cur.next = head1;
          head1 = head1.next;
        }
        cur = cur.next;
      }
    if(head1 != null){
      cur.next = head1;
    } else {
      cur.next = head2;
    }
    return dummy.next;
  }
}
