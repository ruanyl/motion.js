var Motion = {};
(function() {
  Motion = {
    version: '0.1.0'
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Motion;
  } else if (typeof define === 'function' && define.amd) {
    define(Motion);
  }
})();
