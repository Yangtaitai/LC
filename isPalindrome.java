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
 
 // the second approach is reverse half of the list and compare two sublists, which is O(1) space
  public boolean isPalindrome(ListNode head) {
    if(head == null || head.next == null) return true;
    
    ListNode fast = head;
    ListNode slow = head;
    
    //use fast to find the middle of the list
    while(fast.next != null && fast.next.next != null){
      fast = fast.next.next;
      slow = slow.next;
    }
    
    //get the second part of the list
    ListNode secondHead = slow.next;
    slow.next = null;
    
    ListNode p1 = secondHead;
    ListNode p2 = p1.next;
    secondHead.next = null;
    
    while(p1 != null && p2 != null){
      ListNode temp = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = temp;
    }
    
    ListNode newPre = p1;
    ListNode newHead = head;
    while(newPre != null){
       if(newPre.val != newHead.val){ reture false;}
       newPre = newPre.next;
       newHead = newHead.next;
    }
    return true;
  }
