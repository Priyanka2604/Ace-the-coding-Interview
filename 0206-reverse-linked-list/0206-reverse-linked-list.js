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
    let arr = [];
    let temp = head;
    if(head===null || head.next===null) return head;
    while(temp!==null){
        arr.push(temp.val);
        temp = temp.next;
    }

    temp = head;
    while(temp!==null){
        temp.val = arr.pop();
        temp = temp.next;
    }

    return head;
};