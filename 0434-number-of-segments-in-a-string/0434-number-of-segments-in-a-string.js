/**
 * @param {string} s
 * @return {number}
 */
 //In this efficient approach, we iterate through the characters of the string, and whenever we encounter a non-space character that is preceded by a space or is at the beginning of the string, we increment the count. This avoids splitting the string and is more efficient for large input strings with many spaces
 
var countSegments = function(s) {
    let c = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] !== ' ' && (i===0 || s[i-1] === ' ')){
            c++;
        }
    }
    return c;
};