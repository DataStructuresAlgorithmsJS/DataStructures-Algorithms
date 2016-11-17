describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", "depthFirstLog",\
   "findHeight", "balanceFactor", "rotateRight", "rotateLeft", and "rebalance":', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');

    expect(binarySearchTree.findHeight).to.be.a('function');
    expect(binarySearchTree.balanceFactor).to.be.a('function');
    expect(binarySearchTree.rotateRight).to.be.a('function');
    expect(binarySearchTree.rotateLeft).to.be.a('function');
    expect(binarySearchTree.rebalance).to.be.a('function');
  });

  it('should return true when appending a value to the tree', function(){
    var returned = binarySearchTree.insert(30);
    expect(returned).to.equal(true);
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(18);
    binarySearchTree.insert(19);
    binarySearchTree.depthFirstLog(func);
    // BST should look something like this
    //
    //           5
    //       2   -   6
    //     1 - 3     - 7
    //         - 4     - 10
    //                 8  -  15
    //                 - 9    - 18
    //                           - 19
    //
    //
    expect(array).to.eql([ 5, 2, 1, 3, 4, 6, 7, 10, 8, 9, 15, 18, 19 ]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(5);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    binarySearchTree.insert(8);
    binarySearchTree.breadthFirstLog(func);
    // BST should look something like this
    //
    //          5
    //       2  -  6
    //     1 - 3   - 7
    //         - 4   - 9
    //               8 -
    //
    expect(array).to.eql([ 5, 2, 6, 1, 3, 7, 4, 9, 8 ]);
  });
});
