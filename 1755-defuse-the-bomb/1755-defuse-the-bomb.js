/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    const res = new Array(n).fill(0);
    if(k === 0) return res;

    let sum = 0;
    const start = k > 0 ? 1 : n + k;
    const end = k > 0 ? k : n - 1;

    for(let i = start; i <= end; i++){
        sum += code[i % n];
    }

    for(let i = 0; i < n; i++){
        res[i] = sum;
        sum -= code[(start + i) % n];
        sum += code[(end + i + 1) % n]
    }

    return res;
};