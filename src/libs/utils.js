const UTILS = { };

var mathABS = Math.abs,
  mathSQRT = (Math.cos, Math.sin, Math.pow, Math.sqrt),
  mathATAN2 = (mathABS = Math.abs, Math.atan2),
  mathPI = Math.PI;
UTILS.randInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}, UTILS.randFloat = function (min, max) {
  return Math.random() * (max - min + 1) + min;
}, UTILS.lerp = function (value1, value2, amount) {
  return value1 + (value2 - value1) * amount;
}, UTILS.decel = function (val, cel) {
  return val > 0 ? val = Math.max(0, val - cel) : val < 0 && (val = Math.min(0, val + cel)), val;
}, UTILS.getDistance = function (x1, y1, x2, y2) {
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);

  return dx + dy;
}, UTILS.getDirection = function (x1, y1, x2, y2) {
  return mathATAN2(y1 - y2, x1 - x2);
}, UTILS.getAngleDist = function (a, b) {
  var p = mathABS(b - a) % (2 * mathPI);
  return p > mathPI ? 2 * mathPI - p : p;
}, UTILS.isNumber = function (n) {
  return 'number' == typeof n && !isNaN(n) && isFinite(n);
}, UTILS.isString = function (s) {
  return s && 'string' == typeof s;
}, UTILS.kFormat = function (num) {
  return num > 999 ? (num / 1000)
    .toFixed(1) + 'k' : num;
}, UTILS.capitalizeFirst = function (string) {
  return string.charAt(0)
    .toUpperCase() + string.slice(1);
}, UTILS.fixTo = function (n, v) {
  return parseFloat(n.toFixed(v));
}, UTILS.sortByPoints = function (a, b) {
  return parseFloat(b.points) - parseFloat(a.points);
}, UTILS.lineInRect = function (recX, recY, recX2, recY2, x1, y1, x2, y2) {
  var minX = x1,
    maxX = x2;
  if (x1 > x2 && (minX = x2, maxX = x1), maxX > recX2 && (maxX = recX2), minX < recX && (minX = recX), minX > maxX)
    return !1;
  var minY = y1,
    maxY = y2,
    dx = x2 - x1;
  if (Math.abs(dx) > 1e-7) {
    var a = (y2 - y1) / dx,
      b = y1 - a * x1;
    minY = a * minX + b, maxY = a * maxX + b;
  }
  if (minY > maxY) {
    var tmp = maxY;
    maxY = minY, minY = tmp;
  }
  return maxY > recY2 && (maxY = recY2), minY < recY && (minY = recY), !(minY > maxY);
}, UTILS.containsPoint = function (element, x, y) {
  var bounds = element.getBoundingClientRect(),
    left = bounds.left + window.scrollX,
    top = bounds.top + window.scrollY,
    width = bounds.width,
    height = bounds.height;
  return x > left && x < left + width && y > top && y < top + height;
}, UTILS.mousifyTouchEvent = function (event) {
  var touch = event.changedTouches[0];
  event.screenX = touch.screenX, event.screenY = touch.screenY, event.clientX = touch.clientX, event.clientY = touch.clientY, event.pageX = touch.pageX, event.pageY = touch.pageY;
}, UTILS.hookTouchEvents = function (element, skipPrevent) {
  var preventDefault = !skipPrevent,
    isHovering = !1;

  function touchEnd(e) {
    UTILS.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), isHovering && (element.onclick && element.onclick(e), element.onmouseout && element.onmouseout(e), isHovering = !1);
  }
  element.addEventListener('touchstart', UTILS.checkTrusted(function (e) {
    UTILS.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), element.onmouseover && element.onmouseover(e), isHovering = !0;
  }), !1), element.addEventListener('touchmove', UTILS.checkTrusted(function (e) {
    UTILS.mousifyTouchEvent(e), window.setUsingTouch(!0), preventDefault && (e.preventDefault(), e.stopPropagation()), UTILS.containsPoint(element, e.pageX, e.pageY) ? isHovering || (element.onmouseover && element.onmouseover(e), isHovering = !0) : isHovering && (element.onmouseout && element.onmouseout(e), isHovering = !1);
  }), !1), element.addEventListener('touchend', UTILS.checkTrusted(touchEnd), !1), element.addEventListener('touchcancel', UTILS.checkTrusted(touchEnd), !1), element.addEventListener('touchleave', UTILS.checkTrusted(touchEnd), !1);
}, UTILS.removeAllChildren = function (element) {
  for (; element.hasChildNodes();)
    element.removeChild(element.lastChild);
}, UTILS.generateElement = function (config) {
  var element = document.createElement(config.tag || 'div');

  function bind(configValue, elementValue) {
    config[configValue] && (element[elementValue] = config[configValue]);
  }
  for (var key in (bind('text', 'textContent'), bind('html', 'innerHTML'), bind('class', 'className'), config)) {
    switch (key) {
    case 'tag':
    case 'text':
    case 'html':
    case 'class':
    case 'style':
    case 'hookTouch':
    case 'parent':
    case 'children':
      continue;
    }
    element[key] = config[key];
  }
  if (element.onclick && (element.onclick = UTILS.checkTrusted(element.onclick)), element.onmouseover && (element.onmouseover = UTILS.checkTrusted(element.onmouseover)), element.onmouseout && (element.onmouseout = UTILS.checkTrusted(element.onmouseout)), config.style && (element.style.cssText = config.style), config.hookTouch && UTILS.hookTouchEvents(element), config.parent && config.parent.appendChild(element), config.children)
    for (var i = 0; i < config.children.length; i++)
      element.appendChild(config.children[i]);
  return element;
}, UTILS.eventIsTrusted = function (ev) {
  return !ev || 'boolean' != typeof ev.isTrusted || ev.isTrusted;
}, UTILS.checkTrusted = function (callback) {
  return function (ev) {
    ev && ev instanceof Event && UTILS.eventIsTrusted(ev) && callback(ev);
  };
}, UTILS.randomString = function (length) {
  for (var text = '', possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}, UTILS.countInArray = function (array, val) {
  for (var count = 0, i = 0; i < array.length; i++)
    array[i] === val && count++;
  return count;
};

export default UTILS;
