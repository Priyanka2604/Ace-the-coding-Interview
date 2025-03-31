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
    if(head===null || head.next===null) return true;
    var slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let newHead = reverseLL(slow);
    slow = head, fast = newHead;
    while(slow && fast){
        if(slow.val!==fast.val){
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    
    return true;
};

var reverseLL = function(head) {
    let temp = head, back = null;
    while(temp){
        let curr = temp.next;
        temp.next = back;
        back = temp;
        temp = curr;
    }

    return back;
}