/* Given a linked list, remove the nth node from the end of list and return its head.
* For example,
*   Given linked list: 1->2->3->4->5, and n = 2.
*   After removing the second node from the end, the linked list becomes 1->2->3->5.
*/

public ListNode removeNthFromEnd(ListNode head, int n) {
    if(head.next == null && n == 1) return null;
    
    //get the length of the list
    int len = 1;
    ListNode cur = head;
    while(cur != null){
      cur = cur.next;
      len = len + 1;
    }
    
    //move the pointer to the previous of the deleted one
    int count = len - n;
    cur = head;
    while(count > 1){
      cur = cur.next;
      count = count - 1;
    }
    
    //delete the node
    cur.next = cur.next.next;
    
    return head;
}
