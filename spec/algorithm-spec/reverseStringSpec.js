describe('reverseString', ()=>{
  it('should have a function named reverseString', ()=>{
    expect(reverseString).to.be.a('function');
  });
  it('should return a string', ()=>{
    expect(typeof(reverseString('orangutan'))).to.eql('string');
  });

  it('should reverse an input str and return it', () => {
    let curry = 'Yolo is red, oranges are green, and chef Curry is cookin';
    expect(reverseString('Racecar')).to.eql('racecaR');
    expect(reverseString(curry)).to.eql('nikooc si yrruC fehc dna ,neerg era segnaro ,der si oloY');
  });

  it('should not change or mutate the str input', ()=>{
    let input = 'orangutan';
    let output = reverseString(input);
    expect(input).to.eql('orangutan');
  });
});
