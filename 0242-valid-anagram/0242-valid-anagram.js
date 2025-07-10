/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    // if(s.split('').sort().join('') !== t.split('').sort().join('')) return false;
    const a = "a".charCodeAt(0);
    let alphabets = new Array(26).fill(0);

    for(let i=0;i<s.length;i++){
        alphabets[s.charCodeAt(i) - a]++;
        alphabets[t.charCodeAt(i) - a]--;

    }

    return alphabets.every(c => c === 0);
};