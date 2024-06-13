import msgpack from "./msgpack.js";

const socket = {
  socket: null,
  connected: false,
  socketId: -1,
  
  connect(address, callback, events) {
    if (this.socket) return;
    
    WebSocket.prototype.send = new Proxy(WebSocket.prototype.send, {
      apply: (target, that, args) => {

        if (this.socket) return target.apply(that, args);
        
        this.socket = that;
        this.socket.addEventListener("message", message => {
          let msg = new Uint8Array(message.data),
          parsed = msgpack.decode(msg);
          let [type, data] = parsed;

          console.log("[*] Got packet from server", parsed);
          
          if (type == "io-init") this.socketId = data[0];
          else if (events[type]) events[type].apply(void 0, data);
        });

        this.socket.binaryType = 'arraybuffer';
        this.socket.onopen = () => {
          this.connected = true;
          callback();
        };
        this.socket.onerror = error => {
          callback('Socket error');
        };
        this.socket.onclose = event => {
          this.connected = false;
          callback('Socket closed');
        };

        return target.apply(that, args);
      }
    });
  },
  send(type) {
    const data = Array.prototype.slice.call(arguments, 1),
      binary = msgpack.encode([
        type,
        data
      ]);
    this.socket.send(binary);
  },
  socketReady() {
    return this.socket && this.connected;
  },
  close() {
    this.socket.close();
  }
}

export default socket;
