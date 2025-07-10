/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = new Map();
    let mapT = new Map();

    if(s.length!==t.length) return false;
    for(let i=0;i<s.length;i++){
        if((mapS.has(s.at(i)) && mapS.get(s.at(i)) !== t.at(i)) ||
         (mapT.has(t.at(i)) && mapT.get(t.at(i)) !== s.at(i))){
            return false;
        }

        mapS.set(s.at(i), t.at(i));
        mapT.set(t.at(i), s.at(i));
    }

    return true;
};