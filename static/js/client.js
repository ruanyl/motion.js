var stage = new Motion.Stage('canvas');
var rect1 = new Motion.Rect({
  x: 30,
  y: 30,
  width: 30,
  height: 30,
  fillStyle: '#ff0000',
  strokeStyle: '#000',
  lineWidth: 3
});
var rect2 = new Motion.Rect({
  x: 60,
  y: 60,
  width: 30,
  height: 30,
  strokeStyle: '#00ff00',
  lineWidth: 3
});
stage.add(rect1, rect2);
