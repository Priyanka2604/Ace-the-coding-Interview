/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let hs = new Set();
    while(head!==null){
        if(hs.has(head)){
            return true;
        } 
        hs.add(head);
        head = head.next;
    }

    return false;
};