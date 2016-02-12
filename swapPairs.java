/* Given a linked list, swap every two adjacent nodes and return its head.
*  For example,
* Given 1->2->3->4, you should return the list as 2->1->4->3.
* Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

// the first approach is to swap the value of two adjacent nodes
public ListNode swapPairs(ListNode head){
    if(head == null || head.next == null)return head;
    ListNode pre = head;
    ListNode cur = head.next;
    
    while(cur != null && cur.next != null){
        ListNode temp = cur.next;
        int x = pre.val;
        pre.val = cur.val;
        cur.val = x;
        
        pre = temp;
        cur = cur.next.next;
    }
    
    // the last two nodes they need additional code to swap
    if(cur != null){
        int x = pre.val;
        pre.val = cur.val;
        cur.val = x;
    }
    return head;
}

// the second approach is only to swap the nodes instead of the value in it
public ListNode swapPairs(ListNode head){
    if(head == null || head.next == null)return head;
    ListNode pre = head;
    ListNode cur = head.next;
    
    ListNode helper = head;  //if the list contain odd numbers, this will help track the node previous of temp/pre, cur is equal null.
    head = cur;   // if not the first node of cur can not be included in the result.
    while(cur != null && cur.next != null){
        ListNode temp = cur.next;
        cur.next = pre;
        
        helper = pre; // keep track of the previous node pair
        
        pre.next = temp.next;
        pre = temp;
        cur = temp.next;
    }
    if(pre! = null && cur != null){
        cur.next = pre;
        pre.next = null;
    }
    if(cur == null){
        helper.next = pre;
    }
    return head;
}
