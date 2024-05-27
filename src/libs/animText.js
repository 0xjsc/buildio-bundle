module.exports.AnimText = function () {
  this.init = function (x, y, scale, speed, life, text, color) {
    this.x = x, this.y = y, this.color = color, this.scale = scale, this.startScale = this.scale, this.maxScale = 1.5 * scale, this.scaleSpeed = 0.7, this.speed = speed, this.life = life, this.text = text;
  }, this.update = function (delta) {
    this.life && (this.life -= delta, this.y -= this.speed * delta, this.scale += this.scaleSpeed * delta, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0));
  }, this.render = function (ctxt, xOff, yOff) {
    ctxt.fillStyle = this.color, ctxt.font = this.scale + 'px Hammersmith One', ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
  };
}, module.exports.TextManager = function () {
  this.texts = [], this.update = function (delta, ctxt, xOff, yOff) {
    ctxt.textBaseline = 'middle', ctxt.textAlign = 'center';
    for (var i = 0; i < this.texts.length; ++i)
      this.texts[i].life && (this.texts[i].update(delta), this.texts[i].render(ctxt, xOff, yOff));
  }, this.showText = function (x, y, scale, speed, life, text, color) {
    for (var tmpText, i = 0; i < this.texts.length; ++i)
      if (!this.texts[i].life) {
        tmpText = this.texts[i];
        break;
      }
    tmpText || (tmpText = new module.exports.AnimText(), this.texts.push(tmpText)), tmpText.init(x, y, scale, speed, life, text, color);
  };
};