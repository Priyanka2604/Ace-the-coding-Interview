/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sum = 0;
    for(let i=0; i<s.length;i++){
        sum ^= s.charCodeAt(i) ^ t.charCodeAt(i);
    }

    sum ^= t.charCodeAt(t.length-1);

    return String.fromCharCode(sum);
};