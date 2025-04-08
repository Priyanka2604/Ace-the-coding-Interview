var MinStack = function () {
    this.stack = [];
}

MinStack.prototype.push = function (val) {
    this.stack.push(val)
}

MinStack.prototype.pop = function (val) {
    this.stack.pop();
}

MinStack.prototype.top = function (val) {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function (val) {
    if (!this.stack.length) {
        return 0;
    }
    let min = this.stack[0];
    for (var i = 1; i < this.stack.length; i++) {
        min = Math.min(min, this.stack[i])
    }
    return min;
}