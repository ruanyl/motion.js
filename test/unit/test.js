var assert = require("assert");
var Motion = require('../../dist/js/motion.js');

describe('Util', function(){
  describe('#test()', function(){
    it('should return test true', function(){
      assert.equal('test', Motion.Util.test('test'));
    });
  });
});

/**
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
**/
