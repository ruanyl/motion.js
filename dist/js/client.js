;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./Timeline":2,"./Util":3}],2:[function(require,module,exports){
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

module.exports = Timeline;

},{}],3:[function(require,module,exports){
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

module.exports = {
  remove: remove,
  indexOf: indexOf
};

},{}]},{},[1,2,3])
;