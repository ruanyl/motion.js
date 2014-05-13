(function() {
  Motion.Stage = function(canvas) {
    this.ctx = null;
    this.canvas = document.getElementById(canvas);

    if(this.canvas && this.canvas.getContext) {
      this.ctx = new Motion.Context(this.canvas.getContext('2d'));
    } else {
      throw 'not support!';
    }
  };

  Motion.Stage.prototype = {
    add: function() {
      var args = [].slice.call(arguments);
      this.ctx.add(args);
    },
    remove: function(shape) {
    }
  };
})();
