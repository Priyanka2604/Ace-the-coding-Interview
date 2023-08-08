/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head.val === null || head.next === null) return true;
    let s = [];
    let curr = head, c = 0;
    while(curr){
        s.push(curr.val)
        curr = curr.next;
        c++;
    }
    
    curr = head;
    c /= 2
    while(c>0){
        if(curr.val != s.pop()){
            return false;
        }
        curr = curr.next;
        c--;
    }

    return true;
};