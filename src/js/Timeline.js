var Timeline = function(start, end) {
  this.start = start;
  this.end = end;
  this.shapes = [];
};

Timeline.prototype = {
  add: function(shape) {
    if(Object.prototype.toString.call(shape) === '[object Array]') {
      this.shapes = this.shapes.concat(shape);
    } else {
      this.shapes.push(shape);
    }
    return this;
  },
  remove: function(shape) {
    this.shapes = Util.remove.call(this.shapes, shape);
    return this;
  }
};
