var config = require("./7.js");
var utils = require("./8.js");
var antiHack = require("./87.js");
module.exports = {
  ahNum: 0,
  socket: null,
  connected: false,
  socketId: -1,
  sendQueue: [],
  connect: function (crn, cro, crp) {
    if (!this.socket) {
      var crs = config.enableHttps ? "wss:" : "ws:";
      var thisRef = this;
      try {
        var cry = false;
        this.socket = new WebSocket(crs + crn);
        this.socket.binaryType = "arraybuffer";
        this.socket.onmessage = function (crn) {
          var cro = utils.decodepack(crn.data)[0];
          var crq = cro[0];
          var crs = cro[1];
          if (crq === "io-init") {
            thisRef.socketId = crs[0];
          } else if (crp[crq]) {
            let data = [...cro];
            data.shift();
            crp[crq](...data);
          } else {
            console.error("Received unregistered event", crq);
          }
          //'io-init' == crq ? crx['socketId'] = crs[0x0] : crp[crq] ? crp[crq]['apply'](void 0x0, crs) : console['error']('Received\x20unregistered\x20event', crq);
        };
        this.socket.onopen = function () {
          thisRef.connected = true;
          cro();
          for (let crn of thisRef.sendQueue) {
            thisRef.send(crn[0], ...crn[1]);
          }
        };
        this.socket.onclose = function () {
          thisRef.connected = false;
          if (!cry) {
            cro("Disconnected. Try connecting to another server.");
          }
        };
        this.socket.onerror = function () {
          if (this.socket.readyState != WebSocket.OPEN) {
            cry = true;
            console.error("Socket error", arguments);
            cro("Socket error");
          }
        };
      } catch (crE) {
        console.error("Socket connection error:", crE);
        cro(crE);
      }
    }
  },
  send: function (crn, ...cro) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.warn("Socket not open yet", crn, cro);
      this.sendQueue.push([crn, cro]);
      return;
    }
    this.ahNum = utils.inKsanFoFWn(this.ahNum, antiHack);
    var crp = utils.encodepack([crn, cro], this.ahNum);
    this.socket.send(crp);
  },
  socketReady: function () {
    return this.socket && this.connected;
  }
};