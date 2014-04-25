var assert = require("assert");
var Util = require('../../src/js/Util.js');
var Stage = require('../../src/js/Stage.js');

describe('Util', function(){
  describe('#indexOf()', function(){
    it('should return index of a value when the value is present', function(){
      assert.equal(2, Util.indexOf.call([1,2,3], 3));
    });
  });
});

describe('Util', function(){
  describe('#remove()', function(){
    it('should remove item from an array', function(){
      assert.equal(2, Util.remove.call([1,2,3], 3).length);
    });
  });
});

describe('Stage', function(){
  describe('#createTimeline()', function(){
    it('should return Timeline', function(){
      var stage = new Stage();
      var timeline = stage.createTimeline(5,10);
      timeline.add([1, 2]);
      timeline.add(1);
      assert.equal(5, timeline.start);
      assert.equal(10, timeline.end);
      assert.equal(3, timeline.shapes.length);
    });
  });
});
