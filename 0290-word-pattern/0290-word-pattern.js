/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordArr= s.split(/\s+/);
    if(pattern.length!==wordArr.length) return false;

    let pm = new Map();
    let sm = new Map();

    for(let i=0; i<pattern.length;i++){
        let p = pattern.at(i);
        let s = wordArr[i];
        if(
            (pm.has(p) && pm.get(p) !== s) || 
            (sm.has(s) && sm.get(s) !== p))
            {
                return false;
            }

        pm.set(pattern.at(i), wordArr[i]);
        sm.set(wordArr[i], pattern.at(i));
    }

    return true;
};