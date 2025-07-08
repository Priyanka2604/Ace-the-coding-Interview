/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let c = init;
    const n = init;
    const increment = () => {
        c = c+1;
        return c;
    }
    const decrement = () => {
        c = c-1
        return c;
    }
   const reset = () => {
        c = n;
        return c;
    }

    return {
        increment,
        decrement,
        reset
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */