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
    let hs = new Set();
    while(tempA){
        hs.add(tempA);
        tempA = tempA.next;
    }

    tempA = headB;
    while(tempA){
        if(hs.has(tempA)){
            return tempA;
        }
        tempA = tempA.next;
    }

    return null;
};