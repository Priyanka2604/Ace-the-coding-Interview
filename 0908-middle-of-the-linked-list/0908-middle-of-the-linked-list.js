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
var middleNode = function(head) {
    let c = 0;
    var temp = head;
    while(temp!==null){
        c++;
        temp = temp.next;
    }
    c = c%2==0?c/2:(c-1)/2;
    temp = head;
    while(c-->0){
        temp = temp.next;
    }

    return temp;
};