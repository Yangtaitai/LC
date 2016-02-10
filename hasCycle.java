// use two pointers, if there is a cycle in the list, the two pointers will meet finally.

public boolean hasCycle(ListNode head) {
    if(head == null || head.next == null) return false;
    ListNode fast = head.next;
    ListNode slow = head;
    
    // watch the border issue.
    while(fast.next != null && fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next;
        
        if(slow == fast){
            return true;
        }
    }
    return false;
}
