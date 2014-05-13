(function() {
  Motion.Context = function(ctx) {
    this.shapes = [];
    this.ctx = ctx;
  };

  Motion.Context.prototype = {
    add: function(shapes) {
      var length = shapes.length,
        i = 0;
      for (; i < length; i++) {
        this.shapes.push(shapes[i]);
        this.onAdd(shapes[i]);
      }
    },
    onAdd: function(shape) {
      shape.draw(this.ctx);
    },
    getShapesNumber: function() {
      return this.shapes.length;
    }
  };
})();
