describe('comboSum', ()=>{

  it('should exist', ()=>{
    expect(comboSum).to.be.a('function');
  });

  it('should return an array', ()=>{
    expect(comboSum([1,2,3,4], 6)).to.be.a('array');
  });

  it('should sort the output', ()=>{
    expect(comboSum([1,2,3,4], 6)).to.deep.equal(
      [ [ 1, 1, 1, 1, 1, 1 ],
        [ 1, 1, 1, 1, 2 ],
        [ 1, 1, 1, 3 ],
        [ 1, 1, 2, 2 ],
        [ 1, 1, 4 ],
        [ 1, 2, 3 ],
        [ 2, 2, 2 ],
        [ 2, 4 ],
        [ 3, 3 ]
      ]);
  });

  describe('should return all the combinations for any given input', () =>{
    it('should return correct output', ()=>{
      expect(comboSum([2,38,5,22,2,3], 15)).to.deep.equal(
        [ [ 2, 2, 2, 2, 2, 2, 3 ],
          [ 2, 2, 2, 2, 2, 2, 3 ],
          [ 2, 2, 2, 2, 2, 5 ],
          [ 2, 2, 2, 2, 2, 2, 3 ],
          [ 2, 2, 2, 2, 2, 5 ],
          [ 2, 2, 2, 2, 2, 2, 3 ],
          [ 2, 2, 2, 2, 2, 5 ],
          [ 2, 2, 2, 3, 3, 3 ],
          [ 2, 2, 2, 2, 2, 2, 3 ],
          [ 2, 2, 2, 2, 2, 5 ],
          [ 2, 2, 2, 3, 3, 3 ],
          [ 2, 2, 3, 3, 5 ],
          [ 2, 2, 2, 2, 2, 2, 3 ],
          [ 2, 2, 2, 2, 2, 5 ],
          [ 2, 2, 2, 3, 3, 3 ],
          [ 2, 2, 3, 3, 5 ],
          [ 2, 3, 5, 5 ],
          [ 2, 2, 2, 2, 2, 2, 3 ],
          [ 2, 2, 2, 2, 2, 5 ],
          [ 2, 2, 2, 3, 3, 3 ],
          [ 2, 2, 3, 3, 5 ],
          [ 2, 3, 5, 5 ],
          [ 3, 3, 3, 3, 3 ],
          [ 5, 5, 5 ]
        ])
    });
    it('should return correct output', ()=>{
      expect(comboSum([5,3,1,643,3,31,3], 21)).to.deep.equal(
        [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 1, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 1, 1, 1, 5, 5, 5 ],
          [ 1, 1, 1, 1, 1, 3, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 3, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 3, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 3, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 3, 3, 5, 5 ],
          [ 1, 1, 1, 1, 1, 3, 3, 5, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 1, 3, 3, 3, 3, 5 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 5, 5, 5 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 5, 5, 5 ],
          [ 1, 1, 1, 3, 3, 3, 3, 3, 3 ],
          [ 1, 1, 1, 3, 5, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 1, 3, 3, 3, 5, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 3, 3, 3, 3, 3, 5 ],
          [ 1, 5, 5, 5, 5 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 5, 5, 5 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 5, 5, 5 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 5, 5, 5 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 5, 5, 5 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 5, 5, 5 ],
          [ 3, 3, 3, 3, 3, 3, 3 ],
          [ 3, 3, 5, 5, 5 ]
        ]);
    });
  });
});
