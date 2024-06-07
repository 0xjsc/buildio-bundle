const { log } = console;

const socket = {
  socket: null,
  connected: false,
  socketId: -1,
  
  connect(address, callback, events) {
    if (this.socket) return;
    
    this.socket = new WebSocket(address);
    this.socket.binaryType = 'arraybuffer';
    
    this.socket.onmessage = message => {
      let msg = new Uint8Array(message.data),
        parsed = msgpack.decode(msg);
      let [type, data] = parsed;

      log("[SERVER] " + type + " -> " + data);
          
      if (type == "io-init") this.socketId = data[0];
      else if (events[type]) events[type].apply(void 0, data);
    };
    
    this.socket.onopen = () => {
      this.connected = true;
      callback();
    };
    
    this.socket.onclose = event => {
      this.connected = false;
      callback('Socket closed');
    };
    
    this.socket.onerror = error => {
      callback('Socket error');
    };
  },
  send(type) {
    const data = Array.prototype.slice.call(arguments, 1),
      binary = msgpack.encode([
        type,
        data
      ]);
    this.socket.send(binary);
    log("[CLIENT] " + type + " -> " + data);
  },
  socketReady() {
    return this.socket && this.connected;
  },
  close() {
    this.socket.close();
  }
}

export default socket;
