describe('KMPSearchString', ()=>{
  describe('createLPSArray', ()=>{

    it('should exist', ()=>{
      expect(createLPSArray).to.be.a('function');
    });

    it('should return an array', ()=>{
      expect(createLPSArray('abc')).to.be.a('array');
    });

    it('should return an array with all 0s', ()=>{
      expect(createLPSArray('abcdeghi')).to.deep.equal([0,0,0,0,0,0,0,0]);
    });

    it('should tracks longest prefix-suffix', ()=>{
      expect(createLPSArray('abcabc')).to.deep.equal([0,0,0,1,2,3]);
    });

    it('should handle pattern size of 1', ()=>{
      expect(createLPSArray('a')).to.deep.equal([0]);
    });

    it('should handle no string', ()=>{
      expect(createLPSArray('')).to.deep.equal([0]);
    });

    it('should track non-consectuive longest prefix-suffix', ()=>{
      expect(createLPSArray('ababcaabc')).to.deep.equal([0,0,1,2,0,1,1,2,0])
      expect(createLPSArray('abcabdabc')).to.deep.equal([0,0,0,1,2,0,1,2,3]);
      expect(createLPSArray('abcdabca')).to.deep.equal([0,0,0,0,1,2,3,1])
      expect(createLPSArray('abcaby')).to.deep.equal([0,0,0,1,2,0]);
      expect(createLPSArray('acacabacacabacacac')).to.deep.equal([0,0,1,2,3,0,1,2,3,4,5,6,7,8,9,10,11,4])
      expect(createLPSArray('issip')).to.deep.equal([0,0,0,1,0])
    });

  });

  describe('KMP', ()=>{
    it('should exist', ()=>{
      expect(KMP).to.be.a('function');
    });

    it('should exist return and a number', ()=>{
      expect(KMP('abc','abc')).to.be.a('number');
    });

    it('should return an index if string contains pattern', ()=>{
      expect(KMP('abc','abc')).to.equal(0);
      expect(KMP('abcdeghi', 'i')).to.deep.equal(7);
      expect(KMP('aaaaaaaaaaaaaaaaa', 'a')).to.deep.equal(0);
      expect(KMP('sfhkjlgsdjfglsdfkljgertsdrt', 'sdfkljgert')).to.deep.equal(13);
      expect(KMP('ababcaababcaabc', 'ababcaabc')).to.deep.equal(6);
      expect(KMP('a', 'a')).to.deep.equal(0);
    });

    it('should handle overlapping letters', ()=>{
      expect(KMP('mississippi', 'issip')).to.deep.equal(4);
      expect(KMP('mississippi', 'issipi')).to.deep.equal(-1);
      expect(KMP('mississippi', 'pi')).to.deep.equal(9);
    });

    it('should return an index if pattern is empty', ()=>{
      expect(KMP('', '')).to.deep.equal(0);
      expect(KMP('a', '')).to.deep.equal(0);
      expect(KMP('asdfasdf', '')).to.deep.equal(0);
    });

    it('should return -1 if string does not contain pattern', ()=>{
      expect(KMP('abcabc', 'z')).to.deep.equal(-1);
      expect(KMP('lkdfshlk;fsghl;klwwwwwwwwwwwwww', 'a')).to.deep.equal(-1);
    });

    it('should return -1 if string is shorter than pattern', ()=>{
      expect(KMP('aaa', 'aaaa')).to.deep.equal(-1);
    });

  });

});
