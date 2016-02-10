/*Remove all elements from a linked list of integers that have value val.
*
*Example
*Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
*Return: 1 --> 2 --> 3 --> 4 --> 5
*/

public ListNode removeElements(ListNode head, int val) {
  if(head == null) return head;
  while(head != null && head.val == val) head = head.next; // if head has value val
  
  ListNode pre = head;
  ListNode cur = pre.next;
  
  while(cur != null){
    if(cur.val == val){
      pre.next = cur.next;
      cur = cur.next
    }else{
      pre = pre.next;
      cur = cur.next;
    }
  }
  return head;
}
