describe('Spiral Traversal', ()=>{
  it('should be a function named spiralTraversal', ()=>{
    expect(spiralTraversal).to.be.a('function');
  });

  it('should return an array', ()=>{
    expect(spiralTraversal([[1]])).to.be.a('array');
  });

  it('should flatten a 2d array', ()=>{
    expect(spiralTraversal([[2]])).to.deep.equal([2]);
  });

  it('should iterate over a 2d array in spiral order', ()=>{
    expect(spiralTraversal([[1,2,3],[4,5,6],[7,8,9]])).to.deep.equal([1,2,3,6,9,8,7,4,5]);
  });

  it('should return an array in spiral order', ()=>{
    expect(spiralTraversal(
      [
        [3,5,1,6,3],
        [3,6,8,4,2],
        [7,32,2,1,4],
        [4,6,14,61,1]
      ]
    )).to.deep.equal([ 3, 5, 1, 6, 3, 2, 4, 1, 61, 14, 6, 4, 7, 3, 6, 8, 4, 1, 2, 32 ])
  });

  it('should return an array in spiral order', ()=>{
    expect(spiralTraversal(
      [
        [32,5,1,6,4,1,4],
        [41,3,5,3,1,5,3],
        [4,6,3,1,4,3,2],
        [9,6,7,5,3,2,6],
        [3,4,73,4,7,4,4],
        [6,3,2,4,1,6,7]
      ]
    )).to.deep.equal([ 32, 5, 1, 6, 4, 1, 4, 3, 2, 6, 4, 7, 6, 1, 4, 2, 3, 6, 3, 9, 4, 41, 3, 5, 3, 1, 5, 3, 2, 4, 7, 4, 73, 4, 6, 6, 3, 1, 4, 3, 5, 7 ])
  });
});
