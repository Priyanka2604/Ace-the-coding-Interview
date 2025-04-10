var MinStack = function () {
    this.stack = [];
}

class Pair{
    constructor(val, min){
        this.val = val;
        this.min = min;
    }
}

MinStack.prototype.push = function (val) {
    let min;
    if(!this.stack.length){
        min = val;
    } else {
        min = Math.min(val, this.stack[this.stack.length-1].min);
    }
    this.stack.push(new Pair(val, min));
}

MinStack.prototype.pop = function (val) {
    this.stack.pop();
}

MinStack.prototype.top = function (val) {
    return this.stack[this.stack.length - 1].val;
}

MinStack.prototype.getMin = function (val) {
    return this.stack[this.stack.length - 1].min;
}