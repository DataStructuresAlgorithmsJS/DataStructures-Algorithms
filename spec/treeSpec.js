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
    tree.addChild(1);
    tree.addChild(2);
    tree.children[0].addChild(3);
    tree.children[0].addChild(4);
    var results = [];
    var print = function(item){results.push(item)};
    tree.traverse(print);
    expect(results.length).to.equal(5);
    expect(results[1]).to.equal(1);
    expect(results[2]).to.equal(3);
    expect(results[3]).to.equal(4);
    expect(results[4]).to.equal(2);
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

});
