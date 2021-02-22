require('babel-polyfill');
require('webrtc-adapter');

var Instascan = {
  Scanner: require('./data/js/scan/scanner'),
  Camera: require('./data/js/scan/camera')
};

module.exports = Instascan;
