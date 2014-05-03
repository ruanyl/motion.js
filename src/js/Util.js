var remove = function(val) {
  var index = indexOf.call(this, val);
  if(index > -1) {
    this.splice(index, 1);
  }
  return this;
};

var indexOf = function(val) {
  for(var i=0; i<this.length; i++) {
    if(this[i] === val) {
      return i;
    }
  }
  return -1;
};
