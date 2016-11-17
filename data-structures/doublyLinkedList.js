var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: O(1)
  list.addToTail = function(value){
    var node = Node(value);
    this.head = this.head || node;
    if (this.tail) {
      node.previous = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    return true;
  };

  // Time complexity:  O(1)
  list.removeHead = function(){
    var head = this.head;
    if (head.next) {
      this.head = head.next;
      this.head.previous = null;
    } else {
      this.head = null;
    }

    return head.value;
  };

  // Time complexity: O(n)
  list.contains = function(target){
    var cur = this.head;
    while(cur) {
      if (cur.value === target) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

var test = DoublyLinkedList();
test.addToTail(5)
test.addToTail(6)
test.addToTail(7)
test.addToTail(8)
test.addToTail(9)
console.log(test.head.next)
