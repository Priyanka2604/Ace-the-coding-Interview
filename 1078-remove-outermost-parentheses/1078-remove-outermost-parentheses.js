/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let cnt = 0, ans = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            if(cnt===0){
                cnt++;
            } else {
                ans += s[i];
                cnt++;
            }
           
        }
        
        if(s[i] === ")"){
            if(cnt===1){
                cnt--;
            } else {
                ans += s[i];
                cnt--;
            }
           
        }
    }

    return ans;
};