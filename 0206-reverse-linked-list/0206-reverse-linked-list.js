/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head===null || head.next===null) return head;
    let temp = head, prev = null;
    while(temp!==null){
        let curr = temp.next;
        temp.next = prev;
        prev = temp;
        temp = curr;
    }

    return prev;
};