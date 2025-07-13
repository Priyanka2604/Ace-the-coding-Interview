/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let mp = {};
    for(let i of s){
        mp[i] = (mp[i] || 0) + 1;
    }

    for(let i=0; i<s.length; i++){
        if(mp[s.at(i)] === 1){
            return i;
        }
    }

    return -1;
};