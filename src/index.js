
const blacklist = /asset|bundlev1/gm;

Function.prototype.call = new Proxy(Function.prototype.call, {
  apply(target, _this, args) {

    const error = new SyntaxError();
    const { stack } = error;

    if (blacklist.test(stack)) {
      throw error;
    }
    
    return target.apply(_this, args);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  import "./app.js";
});
