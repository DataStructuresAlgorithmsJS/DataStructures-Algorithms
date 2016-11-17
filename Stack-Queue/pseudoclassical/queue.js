var Queue = function() {
  this.first = 0;
  this.last = 0;
  this.storage = {};
};
Queue.prototype.enqueue = function(value){
  this.storage[this.last++] = value;
};
Queue.prototype.dequeue = function(){
  if(this.last - this.first > 0){
    var remove = this.storage[this.first];
    delete this.storage[this.first++];
    return remove;
  }
}
Queue.prototype.size = function(){
  return this.last - this.first;
}
