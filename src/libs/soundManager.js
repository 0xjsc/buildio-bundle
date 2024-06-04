const obj = function (config, UTILS) {
  var tmpSound;
  this.sounds = [], this.active = !0, this.play = function (id, volume, loop) {
    volume && this.active && ((tmpSound = this.sounds[id]) || (tmpSound = new Howl({
      src: '.././sound/' + id + '.mp3'
    }), this.sounds[id] = tmpSound), loop && tmpSound.isPlaying || (tmpSound.isPlaying = !0, tmpSound.play(), tmpSound.volume((volume || 1) * config.volumeMult), tmpSound.loop(loop)));
  }, this.toggleMute = function (id, mute) {
    (tmpSound = this.sounds[id]) && tmpSound.mute(mute);
  }, this.stop = function (id) {
    (tmpSound = this.sounds[id]) && (tmpSound.stop(), tmpSound.isPlaying = !1);
  };
};

export default { obj };
