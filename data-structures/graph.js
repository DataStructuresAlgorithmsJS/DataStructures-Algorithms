// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return !!this.nodes[fromNode][toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.nodes){
    cb(key)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var fs = require('fs');

 // var nodeList = fs.readFileSync('./tester.txt').toString().split('\r');

 var nodeList = fs.readFile('./tester.txt', "utf8", function(err, results){
   if(err){
     console.log(err);
   } else {
     var res = results.split('\r');
     console.log(res.length-1);
   }
 });



 var obj = { 'a': { edges: [ 'b', 'd' ], value: 'a' } ,
   'b': { edges: [ 'a', 'c', 'g' ], value: 'b' },
   'c': { edges: [ 'b' ], value: 'c' },
   'd': { edges: [ 'a', 'e', 'f' ], value: 'd' },
   'e': { edges: [ 'd' ], value: 'e' },
   'f': { edges: [ 'd' ], value: 'f' },
   'g': { edges: [ 'b' ], value: 'g' }};

   var visited = [];
   function dfs (obj, vertex){
     visited.push(vertex);

     obj[vertex].edges.forEach(v => {
       if(visited.includes(v)){
         dfs(obj, v);
       }
     })
   };

   dfs(obj, 'a');

   console.log(visited)
