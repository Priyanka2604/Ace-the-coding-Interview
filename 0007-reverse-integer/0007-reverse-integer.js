/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let bit = Math.pow(2,31) - 1
    let s = "";
    s += x;
    let rs = "";
    let l = s.length;
    while(l>0){
        rs += s[--l];
    }
    r = parseInt(rs);

    if(r>bit || r<-(bit)){
        return 0;
    }
    if(x<0){
        return -r;
    }
    return r;
};