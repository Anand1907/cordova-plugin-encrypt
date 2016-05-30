cordova.define("cordova-plugin-encrypt", function(require, exports, module) {
var exec = require('cordova/exec');

exports.getKey = function(success, error) {
    exec(success, error, "Encrypt", "getDeviceInfo", []);
};

});
