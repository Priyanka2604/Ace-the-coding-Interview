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
    let tempA = headA, tempB =  headB;
    while(tempA){
        while(tempB){
            if(tempA === tempB){
            return tempA;
            }
            tempB = tempB.next;
        }
        tempB = headB;
        tempA = tempA.next;
    }

    return null;
};