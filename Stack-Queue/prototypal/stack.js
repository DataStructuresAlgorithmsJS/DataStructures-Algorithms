var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push:function(value){
    this.storage[++this.count] = value;
  },
  pop:function(){
    if(this.count){
      var remove = this.storage[this.count];
      delete this.storage[this.count--];
      return remove;
    }
  },
  size:function(){
    return this.count;
  }
};
