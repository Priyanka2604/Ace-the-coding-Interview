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
    let tempA = headA, tempB = headB;
    while(tempA!==tempB){
        tempA = tempA===null?headB:tempA.next;
        tempB = tempB===null?headA:tempB.next;
    }
    
    return tempA;
};