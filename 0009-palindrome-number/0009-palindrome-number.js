/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    y = String(x);
    l = y.length-1;
    for(let i=0;i<y.length/2;i++) {
        if(y[i]!=y[l]){
            return false;
        }
        l--;
    }

    return true;
};