

var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

//Providing properties to mobile
function Encrypt() {
    this.available = false;
    this.platform = null;
    var me = this;

    channel.onCordovaReady.subscribe(function() {
        me.getInfo(function(info) {
            var buildLabel = cordova.version;
            me.available = true;
            me.platform = info.getKey;
            channel.onCordovaInfoReady.fire();
        },function(e) {
            me.available = false;
            utils.alert("[ERROR] Error initializing Cordova: " + e);
        });
    });
}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Encrypt.prototype.getInfo = function(successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Encrypt.getInfo', arguments);
    exec(successCallback, errorCallback, "Encrypt", "getKeyDetails", []);
};

module.exports = new Encrypt();
