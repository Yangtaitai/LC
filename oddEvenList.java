/* Given a singly linked list, group all odd nodes together followed by the even nodes. 
*  Please note here we are talking about the node number and not the value in the nodes.
*/

/* the basic idea is to seperate the list into 2 lists, odd list (pre1) and even list (cur1). Link
*  these two lists at last. variable cur is used to keep track of the head of even list.
*/
    public ListNode oddEvenList(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode pre1 = head;
        ListNode cur = pre1.next;
        ListNode cur1 = cur;
        while(cur1 != null && cur1.next != null){
            pre1.next = pre1.next.next;   // link the odd list
            pre1 = cur1.next;             // move the pre1 to next odd
            cur1.next = pre1.next;        // link the even list
            cur1 = pre1.next;             // move the cur1 to next even
        }
        pre1.next = cur;                  // link the tail of odd list with head of even
        return head;
    }
