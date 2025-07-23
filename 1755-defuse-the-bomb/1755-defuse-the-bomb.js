/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const decode = (code, k) => {
        const res = new Array(code.length).fill(0);
        let sum = 0;

        for(let i = 0; i< k; i++){
            sum += code[i];
        }

        for(let i = 0; i < code.length; i++){
            sum = sum - code[i] + code[(i+k) % code.length];
            res[i] = sum;
        }

        return res;
    }

    return k > 0 ? decode(code, k) : decode(code.reverse(), -k).reverse();
};

/**
5 7 1 4.     2, -2.   4 1 7 5
8 5 9 12.             8 12 9 5
5 9 12 8              5 9 12 8
 */