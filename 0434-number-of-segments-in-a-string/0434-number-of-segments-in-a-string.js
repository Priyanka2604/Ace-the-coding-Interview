/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let sarr = s.split(" ");
    let c = 0;
    for(let i of sarr){
        if(i.length>0){
            c++;
        }
    }
    return c;
};