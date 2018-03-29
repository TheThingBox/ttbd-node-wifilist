module.exports = function(RED) {
  var wifi_util = require('ttbd-wifi-util');

  function WifiListNode(n) {
    RED.nodes.createNode(this,n);
    var node = this;

    this.on("input", function(msg) {
      wifi_util.getWifiNetworks(function(wifilist){
        msg.payload = wifilist;
        node.send(msg);
      });
    });

  }
  RED.nodes.registerType("wifilist", WifiListNode);
}
