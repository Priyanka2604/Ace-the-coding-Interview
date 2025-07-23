/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
    let ans = new Array(n).fill(0);
    for(let i = 0; i < n; i++){
        let j = 0, c = 0;
        if(k > 0){
            j = i + 1;
            while(c++ < k){
                if(j === n) j = 0;
                ans[i] += code[j];
                j++;
            }
        } else if (k < 0){
            j = i - 1;
            while(c-- > k){
                if(j === -1) j = n - 1;
                ans[i] += code[j];
                j--;
            }
        }

    }

    return ans;
};