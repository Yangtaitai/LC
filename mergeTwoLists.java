/* Merge two sorted linked lists and return it as a new list. 
*  The new list should be made by splicing together the nodes of the first two lists.
*/

public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
      if(l1 == null && l2 == null) return null;
      if(l1 == null && l2 != null) return l2;
      if(l1 != null && l2 == null) return l1;
      
      // use two pointers to track each list
      ListNode p1 = l1;
      ListNode p2 = l2;
      
      // the new list return
      ListNode head = new ListNode(0);
      ListNode cur = head;
      
      
      while(p1 != null && p2 != null){
        if(p1.val <= p2.val){     // sort
          cur.next = p1;
          p1 = p1.next;
        }else{
          cur.next = p2.next;
          p2 = p2.next;
        }
        cur = cur.next;
      }
      
      // if one of the lists is longer than others and had left bigger values, just concat the rest.
      if(p1 == null && p2 != null){
        cur.next = p2;
      }
      if(p1 != null && p2 == null){
        cur.next = p1;
      }
      
      return head.next;
}
