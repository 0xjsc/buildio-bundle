
const bundleRegex = /bundlev1|index/gm;

Function.prototype.call = new Proxy(Function.prototype.call, {
  apply(target, _this, args) {
    const error = new SyntaxError("Unexpected token \";\" at line (0; 1)");
    const { 
      stack
    } = error;

    if (bundleRegex.test(stack)) 
      throw error;

    return target.apply(_this, args);
  }
});
