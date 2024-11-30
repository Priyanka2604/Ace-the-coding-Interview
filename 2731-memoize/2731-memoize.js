/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let res = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in res){
            return res[key];
        }else {
            let val = fn(...args);
            res[key] = val;
            return val;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */