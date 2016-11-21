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

treeMethods.depthFirstSearch = function(filter, depth){
  return this.children.reduce(
    (result, child) => result.concat(child.depthFirstSearch(filter, depth + 1)),
      filter(this.value, depth) ? [this.value] : []
  );
};

treeMethods.breadthFirstSearch = function(filter){
  var queue = [[this,0]], lostAndFound = [];
    while (queue.length) {
      var cur = queue.shift();
      if(filter(cur[0].value,cur[1]))
        lostAndFound.push(cur[0].value);
      cur[0].children.map(node=> queue.push([node, cur[1]+ 1]));
    }
    return lostAndFound;
};

treeMethods.countLeaves = function(){
  return this.children.length === 0 ? 1
    : this.children.reduce((total, child) => total + child.countLeaves(), 0);
};

treeMethods.map = function(callback){
  var output = Tree(callback(this.value));
  this.children.forEach(child=> output.addChild(child.map(callback)))
  return output;
};

treeMethods.mapInPlace = function(callback){
  this.value = callback(this.value);
  this.children.forEach(node=> node.mapInPlace(callback));
};

treeMethods.isDescendant = function(){};
/*
 * Complexity: What is the time complexity of the above functions?
 */
