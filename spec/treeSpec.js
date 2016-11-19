describe('tree', function() {
  var tree;
  var should = chai.should();

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should have a method named depthFirstSearch', function(){
    expect(tree.depthFirstSearch).to.be.a('function');
  });

  it('should have a method named breadthFirstSearch', function(){
    expect(tree.breadthFirstSearch).to.be.a('function');
  })

  it('should have a method named countLeaves', function(){
    expect(tree.countLeaves).to.be.a('function');
  })

  it('should have a method named map', function(){
      expect(tree.map).to.be.a('function');
  });

  it('should have a method named mapInPlace', function(){
      expect(tree.mapInPlace).to.be.a('function');
  });

  it('should have a method named isDescendant', function(){
      expect(tree.isDescendant).to.be.a('function');
  });

  it('should have a method named "removeFromParent" and a property named "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should have a method named "traverse"', function(){
    expect(tree.traverse).to.be.a('function');
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true when adding a children to the three', function(){
    var returned = tree.addChild(5);
    expect(returned).to.equal(true);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('If tree is a child it should refer to its parent', function() {
    tree.addChild(21);
    tree.children[0].addChild(70);
    expect(tree.children[0].children[0].parent.value).to.equal(21);
  });

  it('If tree is root parent should be null', function() {
    expect(tree.parent).to.equal(null);
  });

  it('It should remove children from parent tree when "removeFromParent" is called', function() {
    tree.addChild(23);
    tree.addChild(14);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    var branchedTree = tree.removeFromParent(7);
    expect(tree.contains(7)).to.equal(false);
    expect(branchedTree.value).to.equal(7);
    expect(tree.children.length).to.equal(2);
    expect(tree.children[0].children.length).to.equal(1);
  });

  it('It should accept a callback and execute it on every value contained in the tree', function() {
    tree.addChild(3);
    tree.addChild(1);
    tree.children[0].addChild(7);
    tree.children[0].addChild(9);
    var results = [];
    var print = item => results.push(item);
    tree.traverse(print);
    expect(results.length).to.equal(5);
    expect(results[1]).to.equal(3);
    expect(results[2]).to.equal(7);
    expect(results[3]).to.equal(9);
    expect(results[4]).to.equal(1);
  });

  it('should return 1 when a tree root has 0 children', function() {
    var root = Tree();
    expect(root.countLeaves()).to.equal(1);
  });

  it('should return 2 when the root has two children', function() {
    var root = Tree();
    var numberOfBranches;
    root.addChild(Tree());
    root.addChild(Tree());
    numberOfBranches = root.countLeaves();
    expect(numberOfBranches).to.equal(2);
  });

  it('should still return 2 when 1 branch has 1 leaf', function() {
    var root = Tree();
    var numberOfBranches;
    root.addChild(Tree());
    var branch = Tree();
    root.addChild(branch);
    branch.addChild(Tree());
    numberOfBranches = root.countLeaves();
    expect(numberOfBranches).to.equal(2);
  });

  it('should "depthFirstSearch" return all nodes in a tree in Depth First Search Order', function() {
    var passAll = () => true;
    var root = Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    // depth: 2
    root.children[0].addChild(4);
    root.children[0].addChild(5);
    root.children[1].addChild(6);
    root.children[1].addChild(7);
    // depth: 3
    root.children[0].children[0].addChild(8);
    root.children[1].children[1].addChild(9);
    root.children[1].children[1].addChild(10);
    // depth: 4
    root.children[1].children[1].children[1].addChild(11);
    var test = [1, 2, 4, 8, 5, 3, 6, 7, 9, 10, 11];
    //             1
    //        2    -    3
    //     4  -  5   6  -  7
    //   8 -            9  -  10
    //                      11 -
    //
    //
    // we should expect back all the nodes we added
    var result = root.depthFirstSearch(passAll);
    result.should.have.length(test.length);
    result.should.deep.equal(test);
  });

  it('should "depthFirstSearch" return all nodes in a BIG tree in Depth First Search Order', function() {
    var passAll = () => true;
    var root = Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    root.addChild(4);
    root.addChild(5);
    root.addChild(6);
    // depth: 2
    root.children[0].addChild(7);
    root.children[0].addChild(8);
    root.children[1].addChild(9);
    root.children[1].addChild(10);
    root.children[2].addChild(11);
    root.children[2].addChild(12);
    root.children[3].addChild(13);
    root.children[3].addChild(14);
    root.children[4].addChild(15);
    root.children[4].addChild(16);
    // depth: 3
    root.children[0].children[0].addChild(17);
    root.children[0].children[0].addChild(18);
    root.children[0].children[1].addChild(19);
    root.children[0].children[1].addChild(20);
    root.children[1].children[1].addChild(21);
    root.children[1].children[1].addChild(22);
    root.children[2].children[0].addChild(23);
    root.children[2].children[1].addChild(24);
    root.children[3].children[1].addChild(25);
    root.children[4].children[1].addChild(26);

    var result = [1, 2, 7, 17, 18, 8, 19, 20, 3, 9, 10, 21, 22, 4, 11, 23, 12, 24, 5, 13, 14, 25, 6, 15, 16, 26];
    //                                          1
    //            2        -        3         -          4       -      5        -      6
    //      7     -     8       9   -   10          11   -   12    13   -   14     15  -   16
    //  17  -  18   19  -  20       21  -  22    23 -      24 -           25 -           26 -
    //
    //
    //
    // we should expect back all the nodes we added
    var test = root.depthFirstSearch(passAll);
    result.should.have.length(result.length);
    result.should.deep.equal(test);
  });

  it('should "breadthFirstSearch" return all nodes in a tree in Breadth First Search Order', function() {
    var passAll = () => true;
    var root = Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    // depth: 2
    root.children[0].addChild(4);
    root.children[0].addChild(5);
    root.children[1].addChild(6);
    root.children[1].addChild(7);
    // depth: 3
    root.children[0].children[0].addChild(8);
    root.children[1].children[1].addChild(9);
    root.children[1].children[1].addChild(10);
    // depth: 4
    root.children[1].children[1].children[1].addChild(11);
    var test = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
    //             1
    //        2    -    3
    //     4  -  5   6  -  7
    //   8 -            9  -  10
    //                      11 -
    //
    //
    // we should expect back all the nodes we added
    var result = root.breadthFirstSearch(passAll);
    result.should.have.length(test.length);
    result.should.deep.equal(test);
  });

  it('should "breadthFirstSearch" return all nodes in a BIG tree in Breadth First Search Order', function() {
    var passAll = () => true;
    var root = Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    root.addChild(4);
    root.addChild(5);
    root.addChild(6);
    // depth: 2
    root.children[0].addChild(7);
    root.children[0].addChild(8);
    root.children[1].addChild(9);
    root.children[1].addChild(10);
    root.children[2].addChild(11);
    root.children[2].addChild(12);
    root.children[3].addChild(13);
    root.children[3].addChild(14);
    root.children[4].addChild(15);
    root.children[4].addChild(16);
    // depth: 3
    root.children[0].children[0].addChild(17);
    root.children[0].children[0].addChild(18);
    root.children[0].children[1].addChild(19);
    root.children[0].children[1].addChild(20);
    root.children[1].children[1].addChild(21);
    root.children[1].children[1].addChild(22);
    root.children[2].children[0].addChild(23);
    root.children[2].children[1].addChild(24);
    root.children[3].children[1].addChild(25);
    root.children[4].children[1].addChild(26);

    var result = [...Array(26)].map((_,i)=> i + 1);
    //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21, 22,23,24,25,26 ];
    //                                          1
    //            2        -        3         -          4       -      5        -      6
    //      7     -     8       9   -   10          11   -   12    13   -   14     15  -   16
    //  17  -  18   19  -  20       21  -  22    23 -      24 -           25 -           26 -
    //
    //
    //
    // we should expect back all the nodes we added
    var test = root.breadthFirstSearch(passAll);
    result.should.have.length(result.length);
    result.should.deep.equal(test);
  });

  it('should return an identical tree if the mapping function is called with a callback that returns all values', function() {
      var callbackFunc = value => value;
      // depth: 0
      var input = Tree(1);
      // depth: 1
      input.addChild(2);
      input.addChild(3);
      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);
      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);

      var compareTrees =  (result, expectation) => {
        result.should.be.an.instanceOf(Tree);
        result.value.should.equal(expectation.value);
        result.should.not.equal(expectation);
        result.children.should.have.length(expectation.children.length);
        for (var i = 0; i < result.children.length; i++) {
          compareTrees(result.children[i], expectation.children[i]);
        }
      }

      var result = input.map(callbackFunc);
      // the input and output trees should have identical values
      compareTrees(result, input);
    });


});
