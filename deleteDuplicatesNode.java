public ListNode deleteDuplicatesNode(ListNode head){
  if(head == null || head.next == null){
    return head;
  }
  ListNode cur = head;
  
  while(cur != null && cur.next != null){
    if(cur.val == cur.next.val){
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
    
/* while(cur != null){
    ListNode temp = cur.next;
    while(temp != null && temp.val == cur.val){
      temp = temp.next;
    }
    cur.next = temp;
    cur = cur.next;
}
*/
    return head;
  }
}
