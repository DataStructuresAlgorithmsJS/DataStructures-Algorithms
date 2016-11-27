let should = chai.should()

describe('MinHeap',  () => {

  it('MinHeap should be a function', () => {
    expect(MinHeap).to.be.a('function');
  });

  describe('MinHeap.getRoot()', () => {
    it('getRoot() should exist', () => {
      let miniHeap = new MinHeap();
      expect(miniHeap.getRoot).to.be.a('function');
    });

    it('should insert an input value into an empty MinHeap instance', () => {
      let miniHeap = new MinHeap();
      miniHeap.insert(7);

      expect(miniHeap._heap.length).to.equal(1);
      expect(miniHeap.getRoot()).to.equal(7);
    });
  });

  describe('MinHeap.insert()', () => {

    it('insert() should exist', () => {
      let miniHeap = new MinHeap();
      expect(miniHeap.insert).to.be.a('function');
    });

    it('should insert an input value into an empty MinHeap instance', () => {
      let miniHeap = new MinHeap();
      miniHeap.insert(7);

      expect(miniHeap._heap.length).to.equal(1);
      expect(miniHeap.getRoot()).to.equal(7);
    });

    it('should add multiple values to a Binary Heap when called multiple times', () => {
      let miniHeap = new MinHeap();
      miniHeap.insert(5);
      miniHeap.insert(15);
      miniHeap.insert(70);

      expect(miniHeap._heap.length).to.equal(3);
      expect(miniHeap.getRoot()).to.equal(5);
      expect(miniHeap._heap[1]).to.equal(15);
      expect(miniHeap._heap[2]).to.equal(70);
    });

    it('should maintain sorting based on MinHeap._compare between a parent node and its children', () => {
      let miniHeap = new MinHeap();
      miniHeap.insert(4);
      miniHeap.insert(5);
      miniHeap.insert(9);
      miniHeap.insert(8);
      miniHeap.insert(1);

      let compare = miniHeap._compare;
      let heap = miniHeap._heap;

      compare(heap[0], heap[1]).should.be.true;
      compare(heap[0], heap[2]).should.be.true;
      compare(heap[1], heap[3]).should.be.true;
      compare(heap[1], heap[4]).should.be.true;
    });

  });

  describe('MinHeap.removeRoot()', () => {

    it('removeRoot should exist', () => {
      let miniHeap = new MinHeap();
      expect(miniHeap.removeRoot).to.be.a('function');
    });

    it('should return `undefined` on an empty heap', () => {
      let miniHeap = new MinHeap();
      let remove = miniHeap.removeRoot();

      expect(remove).to.equal(undefined);
    });

    it('should remove only one entry when removeRoot is called', () => {
      let miniHeap = new MinHeap();
      miniHeap.insert(70);
      miniHeap.insert(5);
      miniHeap.insert(7);
      miniHeap.insert(9);
      miniHeap.insert(8);
      miniHeap.removeRoot();

      expect(miniHeap._heap.length).to.equal(4);

    });

    it('should only return the root node when removeRoot is called', () => {
      let miniHeap = new MinHeap();
      miniHeap.insert(8);
      let beforeRemoval = miniHeap.getRoot();
      let afterRemoval = miniHeap.removeRoot();

      expect(beforeRemoval).to.equal(afterRemoval);

      miniHeap.insert(19);
      miniHeap.insert(4);
      miniHeap.insert(7);
      miniHeap.insert(14);
      miniHeap.insert(5);
      miniHeap.insert(11);

      beforeRemoval = miniHeap.getRoot();
      afterRemoval = miniHeap.removeRoot();

      expect(miniHeap._heap.length).to.equal(5);
      expect(beforeRemoval).to.equal(afterRemoval);
    });

    it('should sort values when removeRoot is called', () => {
      let miniHeap = new MinHeap();
      miniHeap.insert(14);
      miniHeap.insert(15);
      miniHeap.insert(19);
      miniHeap.insert(88);
      miniHeap.insert(11);
      miniHeap.insert(1000);
      miniHeap.insert(1);
      miniHeap.removeRoot();

      let compare = miniHeap._compare;
      let heap = miniHeap._heap;

      expect(compare(heap[0], heap[1])).to.equal(true)
      expect(compare(heap[0], heap[2])).to.equal(true)
      expect(compare(heap[1], heap[3])).to.equal(true)
      expect(compare(heap[1], heap[4])).to.equal(true)
    });

  });

});
