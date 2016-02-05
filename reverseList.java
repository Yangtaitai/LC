/* Reverse a singly linked list in 2 ways.
*  recursive way
*  iterative way
*/

// Recursive way
 public ListNode reverseList(ListNode head) {
    if(head == null || head.next == null){
      return head;
    }
    
   ListNode cur = head.next;
   head.next = null;
   
   ListNode tail = reverseList(cur);
   cur.next = head;
   
   return tail;
  }
  
  // Iterative way
  public ListNode reverseList(ListNode head) {
    if(head == null || head.next == null){
      return head;
    }
    
    ListNode pre = head;
    ListNode cur = head.next;
    head.next = null;
    
    while(pre != null && cur != null){
      ListNode temp = cur.next;     // keep track of the node next to cur since it will point to its previous
      cur.next = pre;
      pre = cur;
      if(temp != null){
        cur = temp;
      } else {
        break;
      }
    }
   return cur;
  }
  
