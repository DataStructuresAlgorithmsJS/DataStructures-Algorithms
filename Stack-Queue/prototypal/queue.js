var Queue = function() {
  var instance = Object.create(queueMethods)
  instance.first = 0;
  instance.last = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue:function(value){
    this.storage[this.last++] = value;
  },
  dequeue:function(){
    if(this.last - this.first > 0){
      var remove = this.storage[this.first];
      delete this.storage[this.first++];
      return remove;
    }
  },
  size:function(){
    return this.last - this.first;
  }
};
