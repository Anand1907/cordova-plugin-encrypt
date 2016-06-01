cordova.define("cordova-plugin-encrypt.EncryptProxy", function(require, exports, module) {
/*
MIT License*/


var cordova = require('cordova');
var utils = require('cordova/utils');

module.exports = {

    getKeyDetails:function(win,fail,args) {

        // deviceId aka uuid, stored in Windows.Storage.ApplicationData.current.localSettings.values.deviceId
        var deviceId;

        var localSettings = Windows.Storage.ApplicationData.current.localSettings;

        if (localSettings.values.deviceId) {
            deviceId = localSettings.values.deviceId;
        }
        else {
            deviceId = localSettings.values.deviceId = utils.createUUID();
        }

        setTimeout(function () {
            win({ getKey: "Windows8", version: "8", uuid: deviceId, model: window.clientInformation.platform });
        }, 0);
    }

};

require("cordova/exec/proxy").add("Encrypt", module.exports);


});
