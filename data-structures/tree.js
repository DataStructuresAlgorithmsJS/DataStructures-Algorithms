var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
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
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
