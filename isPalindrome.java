// Given a singly linked list, determine if it is a palindrome.

//the first approach is to reverse the whole list and then compare
 public boolean isPalindrome(ListNode head) {
    if(head == null || head.next == null) return true;
    
    ListNode cur = head;
    ListNode pre = new ListNode(head.val);
    
    // reverse the whole list
    while(cur != null){
      ListNode temp = new ListNode(head.next.val);
      temp.next = pre;
      pre = temp;
      cur = cur.next;
    }
    
    ListNode p1 = head;
    ListNode p2 = pre;
    
    // compare two lists 
    while(p1 != null){
      if(p1.val != p2.val) {return false;}
      p1 = p1.next;
      p2 = p2.next;
    }
    return true;
 }
