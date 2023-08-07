/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    function rl(prev, head){
        if(head==null){ //when entire linklist is traversed
           return
        }
        else if(head.val==val){  //removing matching element's from in betweens
            prev.next=head.next;
            rl(prev,head.next);
        }
        else{
            rl(head,head.next); // continue ahead if element is unmatched
        } 
    }
    
    while(head && head.val==val){   //removing matching element's from head
        head=head.next; 
    }
    rl(null, head); //head set to first unmatched element
    return head;
};