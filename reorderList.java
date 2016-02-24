/** Given a singly linked list L: L0→L1→…→Ln-1→Ln,
* reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
* You must do this in-place without altering the nodes' values.
* For example,
* Given {1,2,3,4}, reorder it to {1,4,2,3}.
*/

// this problem is a little like isPalindrome problem

/* the basic idea to to divide the list into first half and second half,
*  reverse the second half list,
*  concat the first half and second half in crossing way.
*/

public void reorderList(ListNode head) {
    if(head == null || head.next == null || head.next.next == null) return; //if the list contains 0,1,2 elements, do nothing.
    
    ListNode pre = head;
    ListNode secondHead = getMid(head); // list: 3 -> 4
    secondHead = reverseList(secondHead); // reverse the second half list: 4 -> 3
        
    while(pre != null && secondHead != null){
      ListNode cur = pre.next; 
      ListNode temp = secondHead.next; // cur, temp is to track the list next element, since pre, secondHead will be used concat.
            
      pre.next = secondHead; // 1 -> 4
      secondHead.next = cur; // 1 -> 4 -> 2
            
      pre = cur; // pre point to 2
      secondHead = temp; // secondHead point to 3,  so the next iteration will be 1 -> 4 -> 2 -> 3 (pre.next = secondHead;)
    }
}
// used to reverse the second half of the list    
public ListNode reverseList(ListNode head){
    if(head == null || head.next == null) return head;
        
    ListNode pre = head;
    ListNode cur = head.next;
    head.next = null;
        
    while(pre != null && cur != null){
        ListNode temp = cur.next;
        cur.next = pre;
        pre = cur;
        if(temp != null){
            cur = temp;
        }else{
            break;
        }
    }
    return cur;
}

// get the mid node of the list, so we can get the second half of the list
public ListNode getMid(ListNode head){
    if(head == null || head.next == null) return head;
      ListNode slow = head;
      ListNode fast = head.next;
      while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
      }
    return slow;
}
