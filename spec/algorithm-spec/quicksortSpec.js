describe('quickSort', ()=>{

  it('should have a function named "quickSort"', ()=>{
    expect(quickSort).to.be.a('function');
  });

  it('should return an array', function() {
    const solution = quickSort([1]);

    expect(solution).to.be.a('array');
  });

  
});
