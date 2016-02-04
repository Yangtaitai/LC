public class deleteNode{

	/* move forward the node value and pointer to the deleteNode */

	public void delete(ListNode node){
		if (node.next == null) node = null;
		node.val = node.next.val;
		node.next = node.next.next;
	}

	public class ListNode{
		int val;
		ListNode next;
		ListNode(int x) { val = x;}
	}
	
	public static void main(String[] args){

	}
}
