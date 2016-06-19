/*Remove all elements from a linked list of integers that have value val.
*
*Example
*Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
*Return: 1 --> 2 --> 3 --> 4 --> 5
*/

public ListNode removeElements(ListNode head, int val) {
  ListNode helper = new ListNode(0);
  helper.next  = head;
  head = helper;
  
  while (head.next != null) {
    if (head.next.val == val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return helper.head;
}
