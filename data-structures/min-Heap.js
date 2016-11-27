class MinHeap {
  constructor() {
    this._heap = [];
    this._compare = (i, j) => i < j;
    this._comparison = (a, b) => this._heap[a] < this._heap[b];
  }

  getRoot() {
    return this._heap[0];
  }

  swap(a, b) {
    [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
  }

  insert(value) {
    const check = child => {
      const parent = Math.floor((child - 1) / 2);
      if (child === 0 || !this._comparison(child, parent))
        return;

      this.swap(parent, child);
      check(parent);
    };

    this._heap = [...this._heap, value];
    check(this._heap.length - 1);
  }

  removeRoot() {
    const traverse = parent => {
      let child = 2 * parent + 1;

      if (child < this._heap.length - 2 && this._comparison(child + 1, child))
        child++;
      if (child > this._heap.length - 1)
        return;
      if (!this._comparison(child, parent))
        return;

      this.swap(child, parent);
      traverse(child);
    };

    this.swap(0, this._heap.length - 1);
    const root = this._heap.pop();
    traverse(0);

    return root;
  }
}
