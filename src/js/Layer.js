(function() {
  Motion.layer = function() {
    this.shapes = [];
  };

  Motion.layer.prototype = {
    add: function(shape) {
      this.shapes.push(shape);
    }
  };
})();
