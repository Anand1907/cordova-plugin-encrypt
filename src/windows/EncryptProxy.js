
/*MIT License*/
module.exports = {

    getKeyDetails: function (win, fail, args) {
        var devicePlatform = userAgent.indexOf("MSAppHost/1.0") == -1 ? "windows" : "windows8";
     
        setTimeout(function () {
            win({
                getKey: devicePlatform
            });
        }, 0);  
    }

}; // exports

require("cordova/exec/proxy").add("Encrypt", module.exports);
