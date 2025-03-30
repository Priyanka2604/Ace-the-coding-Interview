/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var temp = head;
    var curr = head;
    while(n>0){
            temp = temp.next;
            n--;
    }

    if(temp===null) return head.next;

    while(temp.next){
        curr = curr.next;
        temp = temp.next;
    }

    let node = curr.next;
    curr.next = curr.next.next;
    node = null;
    return head;
};