var BinarySearchTree = function(value) {
  var binaryTree = Object.create(bianryMethod);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.root = arguments[1] || false;
  return binaryTree;
};
 
var bianryMethod = {
  insert: function(value){
    if(this.value > value){
      (!this.left) ? this.left = BinarySearchTree(value) : this.left.insert(value);
    } else if(this.value < value){
      (!this.right) ? this.right = BinarySearchTree(value) : this.right.insert(value);
    }
    // if (this.root){
    //   this.rebalance();
    // }
    return true;
  },
  contains: function(target){
    if(this.value === target){
      return true;
    } else if(this.value > target){
      return !!(this.left && this.left.contains(target))
    } else if(this.value < target){
      return !!(this.right && this.right.contains(target))
    }
  },
  depthFirstLog: function(cb){
    cb(this.value);
    if(this.left){
      this.left.depthFirstLog(cb)
    }
    if (this.right){
      this.right.depthFirstLog(cb)
    }
  },
  // second way
  depthFirstLog: function(cb){
    var stack = [], cur;
    stack.push(this);
    while(stack.length > 0){
      cur = stack.pop();
      if(cur.right){
        stack.push(cur.right);
      }
      if(cur.left){
        stack.push(cur.left);
      }
      cb(cur.value)
    }
  },
  breadthFirstLog: function(cb){
    var queue = [], cur;
    queue.push(this);
    while(queue.length > 0){
      cur = queue.shift();
      if(cur.left){
        queue.push(cur.left)
      }
      if(cur.right){
        queue.push(cur.right)
      }
      cb(cur.value)
    }
  },
  findHeight: function(){
    if(!this.left && !this.right){
      return -1;
    }
    var lef = 0;
    var righ = 0;
    if(this.left){
      lef = this.left.findHeight()
    }
    if(this.right){
      righ = this.right.findHeight()
    }
    return (lef > righ) ? lef + 1 : righ + 1;
  },
  balanceFactor: function(){
    if(!this.left && !this.right){
      return -1;
    }
    var lef = 0;
    var righ = 0;
    if(this.left){
      lef = this.left.findHeight()
    }
    if(this.right){
      righ = this.right.findHeight()
    }
    return (lef + 1) - (righ + 1);
  },
  rotateRight: function(){
    var rotateR = BinarySearchTree(this.value);

  },
  rotateLeft: function(){},
  rebalance: function(){}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 // var binarySearchTree = BinarySearchTree(5);
 // var arr = [];
 // var func = function(value){ arr.push(value); };
 // // binarySearchTree.insert(5);
 // binarySearchTree.insert(2);
 // // expect(binarySearchTree._left._value).to.eql(2);
 // // expect(binarySearchTree._right).to.eql(null);
 // binarySearchTree.insert(1);
 // binarySearchTree.insert(6);
 // binarySearchTree.insert(7);
 // binarySearchTree.insert(9);
 // binarySearchTree.insert(4);
 // binarySearchTree.insert(8);
 // binarySearchTree.breadthFirstLog(func);
 // console.log(arr)
