describe('quickSort', ()=>{

  it('should have a function named "quickSort"', ()=>{
    expect(quickSort).to.be.a('function');
  });

  it('should return an array', function() {
    const solution = quickSort([1]);

    expect(solution).to.be.a('array');
  });

  it('should sort an array of numbers', () => {
    expect(quickSort([4,1,4,2,6,1,7,3,6,1,6,4,8,53,73,3,1,83,42,84,32,52,75,2,73,42,64])).to.deep.equal(
                     [ 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 6, 6, 6, 7, 8, 32, 42, 42, 52, 53, 64, 73, 73, 75, 83, 84 ])
  });


});
