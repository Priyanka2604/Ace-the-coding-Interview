/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */ // 3 -> 2 -> 1 -> null
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head===null || head.next===null) return head;
    let newHead = reverseList(head.next);
    var curr = head.next;
    curr.next = head;
    head.next = null;

    return newHead;
};