// Given a list, rotate the list to the right by k places, where k is non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null || k === 0) 
        return head;
        
    var len = 1;
    var tail = head;
    while(tail.next !== null){
        tail = tail.next;
        len++;
    }
    
    k = k % len;
    if(k === 0) return head;
    
    var pre = head;
    while(len - k > 1){
        pre = pre.next;
        len--;
    }
    
    var newHead = pre.next;
    pre.next = null;
    tail.next = head;
    head = newHead;
    
    return head;

}
