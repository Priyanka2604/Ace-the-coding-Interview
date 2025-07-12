/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const mag = [...magazine];
    const note = [...ransomNote];

    while(mag.length>0){
        let c = mag.pop();
        let indx = note.indexOf(c);
        if(indx!==-1){
            note.splice(indx, 1);
        }
    }

    const ans = note.length ? false : true;

    return ans;
};