export class MinStack {
  constructor() {
    this._stack = [];
  }

  push(value) {
    let min = this.min();
    this._stack.push({
      value: value,
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
    });
  }

  pop() {
    if (!this.size()) {
      let last = this._stack.pop();
      return last.value;
    }
  }

  min() {
    if (!this.size()) {
      let last = this._stack[this._stack.length - 1];
      return last.min;
    }
  }

  size() {
    return this._stack.length === 0;
  }

}
