
require("../config.js"), module.exports = {
  socket: null,
  connected: !1,
  socketId: -1,
  connect: function (address, callback, events) {
    if (!this.socket) {
      var _this = this;
      try {
        var socketError = !1,
          socketAddress = address;
        this.socket = new WebSocket(socketAddress), this.socket.binaryType = 'arraybuffer', this.socket.onmessage = function (message) {
          var data = new Uint8Array(message.data),
            parsed = msgpack.decode(data),
            type = parsed[0];
          data = parsed[1], 'io-init' == type ? _this.socketId = data[0] : events[type].apply(void 0, data);
        }, this.socket.onopen = function () {
          _this.connected = !0, callback();
        }, this.socket.onclose = function (event) {
          _this.connected = !1, 4001 == event.code ? callback('Invalid Connection') : socketError || callback('disconnected');
        }, this.socket.onerror = function (error) {
          this.socket && this.socket.readyState != WebSocket.OPEN && (socketError = !0, console.error('Socket error', arguments), callback('Socket error'));
        };
      } catch (e) {
        console.warn('Socket connection error:', e), callback(e);
      }
    }
  },
  send: function (type) {
    var data = Array.prototype.slice.call(arguments, 1),
      binary = msgpack.encode([
        type,
        data
      ]);
    this.socket.send(binary);
  },
  socketReady: function () {
    return this.socket && this.connected;
  },
  close: function () {
    this.socket && this.socket.close();
  }
};