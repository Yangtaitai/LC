/** Given a singly linked list L: L0→L1→…→Ln-1→Ln,
* reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
* You must do this in-place without altering the nodes' values.
* For example,
* Given {1,2,3,4}, reorder it to {1,4,2,3}.
*/
public void reorderList(ListNode head) {
    if(head == null || head.next == null || head.next.next == null) return;
    ListNode pre = head;
    
    ListNode secondHead = getMid(head);
    secondHead = reverseList(secondHead);
        
    while(pre != null && secondHead != null){
      ListNode cur = pre.next;
      ListNode temp = secondHead.next;
            
      pre.next = secondHead;
      secondHead.next = cur;
            
      pre = cur;
      secondHead = temp;
    }
}
    
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
