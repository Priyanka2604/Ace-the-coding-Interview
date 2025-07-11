/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hmp = new Map();
    for(let i=0; i<magazine.length; i++){
        if(hmp.has(magazine.at(i))){
            hmp.set(magazine.at(i), hmp.get(magazine.at(i))+1);
        } else {
            hmp.set(magazine.at(i), 1);
        }
    }

    for(let i=0; i<ransomNote.length; i++){
        if(hmp.has(ransomNote.at(i)) && hmp.get(ransomNote.at(i))>=1 ){
            hmp.set(ransomNote.at(i), hmp.get(ransomNote.at(i))-1);
            continue;
        } else {
            return false;
        }
    }

    return true;
};