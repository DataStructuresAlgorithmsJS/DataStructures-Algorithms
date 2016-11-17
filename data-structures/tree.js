var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value)
  child.parent = this;
  this.children.push(child);
  return true;
};

treeMethods.contains = function(target) {
  return (this.value === target) ? true :
    this.children.some(child => child.contains(target));
};

treeMethods.removeFromParent = function(target){
  var retChild = undefined;
  if(this.value === target){
    this.parent.children = this.parent.children.filter(child => child.value !== target)
    this.parent = undefined;
    retChild = this;
  }else {
    for(var child of this.children){
      return child.removeFromParent(target);
    }
  }
  return retChild;
};

treeMethods.traverse = function(cb){
  cb(this.value);
  this.children.forEach(val => val.traverse(cb))
};

treeMethods.depthFirstSearch = function(){};

treeMethods.breadthFirstSearch = function(){};

treeMethods.countLeaves = function(){
  return this.children.length === 0 ? 1
    : this.children.reduce((total, child) => total + child.countLeaves(), 0);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
