describe('MinStack', () => {

  it('should have a class named MinStack', () => {
    expect(MinStack).to.be.a('function');
  });

  beforeEach(() => {
      this.stack = new MinStack();
    });

    it('mehtod min returns undefined when stack has no values', () => {
      expect(this.stack.size()).to.be.true;
      expect(this.stack.min()).to.be.undefined;
    });

    it('shold push values in LIFO order and min should equal the lowest value', () => {
      const input = [1, 2, 4, 6, 8, 10, 12, 22];

      input.forEach(v => {
        this.stack.push(v);
        expect(this.stack.min()).to.equal(1);
      });

      input.reduceRight((memo, v) => {
        expect(this.stack.min()).to.equal(1);
        expect(this.stack.pop()).to.equal(v);
      }, 0);

      expect(this.stack.min()).to.be.undefined;
    });

    it('should use push method to insert values in LIFO order and min is updated and retrieved in constant time', () => {
      const input = [15, 11, 9, 7, 6, 4, 2, 1];

      input.forEach(v => {
        this.stack.push(v);
        expect(this.stack.min()).to.equal(v);
      });

      input.reduceRight((memo, v) => {
        expect(this.stack.min()).to.equal(v);
        expect(this.stack.pop()).to.equal(v);
      }, 0);

      expect(this.stack.min()).to.be.undefined;
    });

});
