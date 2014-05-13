(function() {
  Motion.Rect = function(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.fill = options.fill || 'green';
    this.stroke = options.stroke || 'black';
    this.strokeWidth = options.strokeWidth || 0;
  };

  Motion.Rect.prototype = {
    draw: function(ctx) {
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
})();
