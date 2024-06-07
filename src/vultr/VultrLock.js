
function VultrLock() {
  const WS = WebSocket;
  const error = new SyntaxError("Unexcepted token \";\" at (0;203)");
  
  Object.defineProperty(window, WebSocket, {
    get() {
      const { stack } = new Error();

      if (/bundlev1/gm.test(stack)) {
        throw error;
      }
      
      return WS;
    }, set(newWebSocket) {
      const { stack } = new Error();

      if (/fixbundle|visual/gm.test(stack)) {
        throw error;
      }

      return newWebSocket;
    }
  });
}

export default VultrLock;
