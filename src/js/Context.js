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
      this.setContext(shape);
      this.ctx.beginPath();
      shape.drawPath(this.ctx);
      if(shape.fillStyle) this.ctx.fill();
      if(shape.strokeStyle) this.ctx.stroke();
    },
    getShapesNumber: function() {
      return this.shapes.length;
    },
    setContext: function(shape) {
      this.ctx.fillStyle = shape.fillStyle || undefined;
      this.ctx.strokeStyle = shape.strokeStyle || undefined;
      this.ctx.lineCap = shape.lineCap || undefined;
      this.ctx.lineJoin = shape.lineJoin || undefined;
      this.ctx.miterLimit = shape.miterLimit || undefined;
      this.ctx.shadowColor = shape.shadowColor || undefined;
      if (typeof shape.opacity !== undefined) this.ctx.globalAlpha = shape.opacity;
      if (typeof shape.lineWidth !== undefined) this.ctx.lineWidth = shape.lineWidth;
      if (typeof shape.shadowBlur !== undefined) this.ctx.shadowBlur = shape.shadowBlur;
      if (typeof shape.shadowOffsetX !== undefined) this.ctx.shadowOffsetX = shape.shadowOffsetX;
      if (typeof shape.shadowOffsetY !== undefined) this.ctx.shadowOffsetY = shape.shadowOffsetY;
    }
  };
})();
