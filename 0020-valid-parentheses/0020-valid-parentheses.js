/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [];
    let sArr = s.split("");
    for(let i=0;i<sArr.length;i++){
        if(sArr[i]==="("){
            st.push(")");
        }
        else if(sArr[i]==="{"){
            st.push("}");
        }
        else if(sArr[i]==="["){
            st.push("]");
        }
        else if(st.length===0 || st.pop()!==sArr[i]){
            return false;
        }
    }

    return st.length===0;
};