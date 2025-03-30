/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let tempA = headA;
    while(tempA){
        let tempB = headB;
        while(tempB){
            if(tempA === tempB){
            return tempA;
            }
            tempB = tempB.next;
        }
        tempA = tempA.next;
    }

    return null;
};