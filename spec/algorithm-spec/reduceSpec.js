describe("Reduce", ()=>{

  it('should have a function named "reduce"', ()=>{
    expect(reduce).to.be.a('function');
  });

  it('should set initial value of accumulator to the first value of the collection if nothing is passed in intially', ()=>{
    const add = (a,b) => a + b;
    expect(reduce([1,2,3,4,5], add)).to.equal(15)
  });

  it('should return the sum of the values of an array', ()=>{
    const add = (a,b) => a + b;
    expect(reduce([1,2,3], add, 0)).to.equal(6)
  });

  it('should traverse the a tree and return the values that pass a filter test in depth first search order', ()=>{
    var filter = function (familyMember) {
      return familyMember['location'] === 'Berkeley';
    }
    const familyTree = {
      'firstName': 'Beth',
      'lastName': 'Johnson',
      'location': 'San Francisco',
      'children': [
        {
          'firstName': 'Beth Jr.',
          'lastName': 'Johnson',
          'location': 'Berkeley',
          'children': [
            {
              'firstName': 'Smitty',
              'lastName': 'Won',
              'location': 'Beijing',
              'children': []
            }
          ]
        },
        {
          'firstName': 'Joshie',
          'lastName': 'Wyattson',
          'location': 'Berkeley',
          'children': []
        }
      ]
    };
    const dfsReduce = (input, filter) => reduce(
      input.children, (result, input) => result.concat(dfsReduce(input, filter)), filter(input) ? [input.firstName] : []
    );
    const testCall = dfsReduce(familyTree, filter);
    expect(testCall).to.deep.equal([ 'Beth Jr.', 'Joshie' ])
  })
});
