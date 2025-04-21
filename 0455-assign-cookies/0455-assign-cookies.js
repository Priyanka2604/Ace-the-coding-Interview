/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    let i=0, j=0, c=0;
    for(j=0; j<s.length;j++){
        if(s[j] >= g[i]){
            c++;
            i++;
        }
    }

    return c;
};