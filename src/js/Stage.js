var Util = require('./Util');
var Timeline = require('./Timeline');

var Stage = function(canvas) {
  /*this.ctx = null;*/
  //this.canvas = document.getElementById(canvas);
  //this.shapes = [];

  //if(this.canvas && this.canvas.getContext('2d')) {
    //this.ctx = this.canvas.getContext("2d");
  //} else {
    //throw 'not support!';
  /*}*/
};

Stage.prototype = {
  add: function(shape) {
    this.shapes.push(shape);
    return this;
  },
  remove: function(shape) {
    this.shapes = Util.remove.call(this.shapes, shape);
    return this;
  },
  createTimeline: function(start, end) {
    return new Timeline(start, end);
  }
};

module.exports = Stage;
