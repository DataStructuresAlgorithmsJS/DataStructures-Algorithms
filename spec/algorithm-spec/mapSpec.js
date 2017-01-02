describe('Map', ()=>{

  it('Map should be a function', ()=>{
    expect(map).to.be.a('function');
  });

  it('shuold return an array', ()=>{
    expect(map([])).to.deep.equal([]);
  });

  it('should apply a callback on every value in an array', ()=>{
    expect(map([1,2,3,4,5,6], (a)=>a+1)).to.deep.equal([2,3,4,5,6,7])
  });

});
