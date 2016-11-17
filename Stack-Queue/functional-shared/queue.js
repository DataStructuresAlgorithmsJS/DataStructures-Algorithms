var Queue = function() {
  var instance = {};
  instance._storage = {};
  instance._first = 0;
  instance._last = 0;
  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue:function(value){
    this._storage[this._last++] = value;
  },
  dequeue:function(){
    if(this._last - this._first > 0){
      var remove = this._storage[this._first];
      delete this._storage[this._first++];
      return remove;
    }
  },
  size:function(){
    return this._last - this._first;
  }
};
