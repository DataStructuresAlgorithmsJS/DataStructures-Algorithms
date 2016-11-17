var Stack = function() {
  this.count = 0;
  this.storage = {};
};


Stack.prototype.push = function(value){
  this.storage[++this.count] = value;
}
Stack.prototype.pop = function(){
  if(this.count){
    var remove = this.storage[this.count];
    delete this.storage[this.count--];
    return remove;
  }
}
Stack.prototype.size = function(){
  return this.count;
}
