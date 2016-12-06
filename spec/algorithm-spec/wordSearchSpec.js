describe('WordSearch', ()=>{

  it('wordSearch should be a function', ()=>{
    expect(wordSearch).to.be.a('function');
  });

  it('should return a boolean', ()=>{
    const testData = [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ];
    expect(wordSearch(testData, 'A')).to.be.a('boolean');
  })

  it('should return false for word that does not exist in the 2d array', ()=>{
    const testData = [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ];
    expect(wordSearch(testData, 'GIRAF')).to.equal(false);
  });

  it('should re turn true for an input that exists in a 2d array', ()=>{
    const testData = [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E'],
      ['A','B','C','E'],
      ['S','F','C','E'],
      ['A','D','E','E']
    ];
    expect(wordSearch(testData, 'SEEEEED')).to.equal(true);
  });
});
