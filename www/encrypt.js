
var exec = require('cordova/exec');

exports.getMyKey = function(success, error) {
    exec(success, error, "Encrypt", "getKeyDetails", []);
};
