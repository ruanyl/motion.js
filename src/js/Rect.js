(function() {
  Motion.Rect = function(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.fillStyle = options.fillStyle;
    this.strokeStyle = options.strokeStyle;
    this.lineWidth = options.lineWidth || 1;
    this.radius = options.radius;
    if(this.lineWidth % 2 === 1 && this.strokeStyle) {
      this.x += 0.5;
      this.y += 0.5;
    }
  };

  Motion.Rect.prototype = {
    drawPath: function(ctx) {
      if (!this.radius) {
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.lineTo(this.x, this.y - (this.lineWidth /2));
      }
    }
  }
})();
