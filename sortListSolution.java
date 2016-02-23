/* Sort a linked list in O(n log n) time using constant space complexity
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
 
// time comlexity require we can use quick sort or merge sort for linked list

// mergeSort way of sort list
public class sortListSolution{
    public ListNode sortList{
      if(head == null && head.next == null) return head;
      
      ListNode middle = getMiddle(head);
      
      ListNode right = sortList(middle.next); // right half of the list
      middle.next = null; // seperate the left half
      ListNode left = sortList(head); // left half of the list
      
      return merge(left,right);
    }
    
    // get the middle node of the list
    public ListNode getMiddle(ListNode head){
      if(head == null || head.next == null) return head;
      ListNode slow = head;
      ListNode fast = head.next;
      // use fast and slow to find the middle of the list;
      while(fast != null && fast.next != null){
          slow = slow.next;
          fast = fast.next.next;
      }
      return slow;
    }
    
    /*merge-sort the two subLists */

    public ListNode merge(ListNode head1, ListNode head2){
      ListNode dummy = new ListNode(0);
      ListNode cur = dummy;
      while(head1 != null && head2 != null){
        if(head1.val > head2.val){
          cur.next = head2;
          head2 = head2.next;
        }else{
          cur.next = head1;
          head1 = head1.next;
        }
        cur = cur.next;
      }
    if(head1 != null){
      cur.next = head1;
    } else {
      cur.next = head2;
    }
    return dummy.next;
  }
}

//quickSort way of sort list, the partition done a lot work similar to the merge part of the mergeSort way.
public class sortListSolution{
  public ListNode sortList(ListNode head){
    if(head == null || head.next == null) return head;
    ListNode mid = getMiddle(head);
    
    ListNode leftDummy = new ListNode(0), leftTail = leftDummy;
    ListNode middleDummy = new ListNode(0), middleTail = middleDummy;
    ListNode rightDummy = new ListNode(0), rightTail = rightDummy;
    
    while(head != null){
     if(head.val < mid.val){
      leftTail.next = head;
      head = head.next;
     }else if(head.val > mid.val){
      rightTail.next = head;
      head = head.next;
     }
     middleTail.next = head;
     head = head.next;
    }
    leftTail = null;
    middleTail = null;
    rightTail = null;
    
    ListNode left = sortList(leftDummy.next);
    ListNode right = sortList(rightDummy.next);
    
    return concat(left, middleDummy.next,right);
  }
  
  // get the middle of the linked list
  public ListNode getMiddle(ListNode head){
   if(head == null || head.next == null) return head;
   ListNode slow = head;
   ListNode fast = head.next;
   while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
   }
   return slow;
  }
  
  // concat the partitioned lists
  public ListNode concat(ListNode left,ListNode middle, ListNode right){
   ListNode dummy = new ListNode(0), tail = dummy;
   tail.next = left;
   tail = getTail(tail);
   tail.next = middle;
   tail = getTail(tail);
   tail.next = right;
   tail = getTail(tail);
   return dummy.next;
  }
  
  //get the tail of the linked list for the concat part
  public ListNode getTail(ListNode head){
   if(head == null) return head;
   while(head.next != null){
    head = head.next;
   }
   return head;
  }
  
}

