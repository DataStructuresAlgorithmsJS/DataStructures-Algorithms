const should = chai.should();

describe('deepEquals', ()=>{

  it('deepEquals should exist', ()=>{
    expect(deepEquals).to.be.a('function');
  });

  it('should take two arguments', ()=>{
    expect(deepEquals.length).to.equal(2);
  });

  it('should return false for values that are not the identical', ()=>{
    expect(deepEquals({}, [])).to.equal(false);
  });

  it('should return a result of true for empty objects that are passed', ()=>{
    expect(deepEquals({}, {})).to.equal(true);
  });

  it('distinguishes between objects and arrays', ()=> {
    let aa = { yolo: [23, { ha: {}}]}
    let bb = { yolo: [23, { ha: []}]}
    expect(deepEquals(aa,bb)).to.equal(false);
  });

  it('should return true for two objects with the same keys and values', ()=>{
    let a = { howdy: 'bar' };
    let b = { howdy: 'bar' };
    expect(deepEquals(a, b)).to.equal(true);
  });

  it('should use deep equality to destinguish between strings and numbers', ()=>{
    let a = { howdy: 6 };
    let b = { howdy: '6' };
    expect(deepEquals(a,b)).to.equal(false);
  });

  it('should return false for two objects with the same keys and but different values', ()=>{
    let a = { howdy: 'bar' };
    let b = { howdy: 'pow' };
    expect(deepEquals(a,b)).to.equal(false);
  });

  it('should return false for two objects with different number of keys', ()=>{
    let a = { howdy: 'bar' };
    let b = { howdy: 'bar', biz: 'baz' };
    expect(deepEquals(a,b)).to.equal(false);
  });

  it('should return true for identical objects with nested properties', ()=>{
    let a = { howdy: 6, b: { c: 3 } };
    let b = { howdy: 6, b: { c: 3 } };
    expect(deepEquals(a,b)).to.equal(true);
  });

  it('should return false for two objects that do not contain the same number of keys', ()=>{
    let a = { howdy: 'bar', sleep: 'yolo' };
    let b = { howdy:'bar' };
    expect(deepEquals(a,b)).to.equal(false);
  });

  it('should return false for dissimilar nested object properties', ()=>{
    let a = { howdy: 6, b: { c: 3 } };
    let b = { howdy: 6, b: { c:'paul pogba' } };
    expect(deepEquals(a,b)).to.equal(false);
  });

  it('should return false for dissimilar nested object properties', ()=>{
    let a = { howdy: 6, b: { c: 'paul pogba'} };
    let b = { howdy: 6, b: { c: 3 } };
    expect(deepEquals(a,b)).to.equal(false);
  });

  it('should return true for similar excessively nested object properties', ()=>{
    let a = { howdy: 6, b: { c: { d: { e: 'paul pogba' } } } };
    let b = { howdy: 6, b: { c: { d: { e: 'paul pogba' } } } };
    expect(deepEquals(a,b)).to.equal(true);
  });

  it('should return true for similar excessively nested object properties', ()=>{
    let a = { b: { c: { d: { e: 'paul pogba' } } }, howdy: 6 };
    let b = { howdy: 6, b: { c: { d: { e: 'paul pogba' } } } };
    expect(deepEquals(a,b)).to.equal(true);
  });

});
