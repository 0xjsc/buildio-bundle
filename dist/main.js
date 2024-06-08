// ==UserScript==
// @name            New script mohmoh.eu
// @namespace   Violentmonkey Scripts
// @match           *://www.mohmoh.eu/*
// @grant             none
// @version          1.0
// @author            -
// @description    27.05.2024, 08:40:33
// @require          https://update.greasyfork.org/scripts/423602/1005014/msgpack.js
// ==/UserScript==
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "maxScreenWidth": 1920
  , "maxScreenHeight": 1080
  , "serverUpdateRate": 9
  , "maxPlayers": 40
  , "maxPlayersHard": 50
  , "collisionDepth": 6
  , "minimapRate": 3000
  , "colGrid": 10
  , "clientSendRate": 5
  , "healthBarWidth": 50
  , "healthBarPad": 4.5
  , "iconPadding": 15
  , "iconPad": 0.9
  , "deathFadeout": 3000
  , "crownIconScale": 60
  , "crownPad": 35
  , "chatCountdown": 3000
  , "chatCooldown": 500
  , "maxAge": 100
  , "gatherAngle": 1.208304866765305
  , "gatherWiggle": 10
  , "hitReturnRatio": 0.25
  , "hitAngle": 1.5707963267948966
  , "playerScale": 35
  , "playerSpeed": 0.0016
  , "playerDecel": 0.993
  , "nameY": 34
  , "skinColors": ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"]
  , "animalCount": 7
  , "aiTurnRandom": 0.06
  , "cowNames": ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo",
    "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison",
    "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"
  ]
  , "shieldAngle": 1.0471975511965976
  , "weaponVariants": [{
    "id": 0
    , "src": ""
    , "xp": 0
    , "val": 1
  }, {
    "id": 1
    , "src": "_g"
    , "xp": 3000
    , "val": 1.1
  }, {
    "id": 2
    , "src": "_d"
    , "xp": 7000
    , "val": 1.18
  }, {
    "id": 3
    , "src": "_r"
    , "poison": true
    , "xp": 12000
    , "val": 1.18
  }, {
    "id": 4
    , "src": "_e"
    , "poison": true
    , "xp": 15000
    , "val": 1.21
  }]
  , "resourceTypes": ["wood", "food", "stone", "points"]
  , "areaCount": 7
  , "treesPerArea": 9
  , "bushesPerArea": 3
  , "totalRocks": 32
  , "goldOres": 7
  , "riverWidth": 724
  , "riverPadding": 114
  , "waterCurrent": 0.0011
  , "waveSpeed": 0.0001
  , "waveMax": 1.3
  , "treeScales": [150, 160, 165, 175]
  , "bushScales": [80, 85, 95]
  , "rockScales": [80, 85, 90]
  , "snowBiomeTop": 2400
  , "snowSpeed": 0.75
  , "maxNameLength": 15
  , "mapScale": 14400
  , "mapPingScale": 40
  , "mapPingTime": 2200
  , "volcanoScale": 320
  , "innerVolcanoScale": 100
  , "volcanoAnimalStrength": 2
  , "volcanoAnimationDuration": 3200
  , "volcanoAggressionRadius": 1440
  , "volcanoAggressionPercentage": 0.2
  , "volcanoDamagePerSecond": -1
  , "volcanoLocationX": 13960
  , "volcanoLocationY": 13960
  , "MAX_ATTACK": 0.6
  , "MAX_SPAWN_DELAY": 1
  , "MAX_SPEED": 0.3
  , "MAX_TURN_SPEED": 0.3
  , "DAY_INTERVAL": 1440000
});


/***/ }),

/***/ "./src/js/data/ai.js":
/*!***************************!*\
  !*** ./src/js/data/ai.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var PI2 = 2 * Math.PI;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
  this.sid = sid, this.isAI = !0, this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1), this.init = function (x, y, dir, index, data) {
    if (!data?.fixedSpawn) return;
    this.x = x, this.y = y, this.startX = null, this.startY = null, this.xVel = 0, this.yVel = 0, this.zIndex = 0, this.dir = dir, this.dirPlus = 0, this.index = index, this.src = (data.src || "sheep_1"), data.name && (this.name = data.name), this.weightM = data.weightM, this.speed = data.speed, this.killScore = data.killScore, this.turnSpeed = data.turnSpeed, this.scale = data.scale, this.maxHealth = data.health, this.leapForce = data.leapForce, this.health = this.maxHealth, this.chargePlayer = data.chargePlayer, this.viewRange = data.viewRange, this.drop = data.drop, this.dmg = data.dmg, this.hostile = data.hostile, this.dontRun = data.dontRun, this.hitRange = data.hitRange, this.hitDelay = data.hitDelay, this.hitScare = data.hitScare, this.spriteMlt = data.spriteMlt, this.nameScale = data.nameScale, this.colDmg = data.colDmg, this.noTrap = data.noTrap, this.spawnDelay = data.spawnDelay, this.hitWait = 0, this.waitCount = 1000, this.moveCount = 0, this.targetDir = 0, this.active = !0, this.alive = !0, this.runFrom = null, this.chargeTarget = null, this.dmgOverTime = {};
  };
  var timerCount = 0;
  this.update = function (delta) {
    if (this.active) {
      if (this.spawnCounter)
        return this.spawnCounter -= delta, void(this.spawnCounter <= 0 && (this.spawnCounter = 0, this.x = this.startX || UTILS.randInt(0, config.mapScale), this.y = this.startY || UTILS.randInt(0, config.mapScale)));
      (timerCount -= delta) <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), timerCount = 1000);
      var charging = !1,
        slowMlt = 1;
      if (!this.zIndex && !this.lockMove && this.y >= config.mapScale / 2 - config.riverWidth / 2 && this.y <= config.mapScale / 2 + config.riverWidth / 2 && (slowMlt = 0.33, this.xVel += config.waterCurrent * delta), this.lockMove)
        this.xVel = 0, this.yVel = 0;
      else if (this.waitCount > 0) {
        if (this.waitCount -= delta, this.waitCount <= 0)
          if (this.chargePlayer) {
            for (var tmpPlayer, bestDst, tmpDist, i = 0; i < players.length; ++i)
              !players[i].alive || players[i].skin && players[i].skin.bullRepel || (tmpDist = UTILS.getDistance(this.x, this.y, players[i].x, players[i].y)) <= this.viewRange && (!tmpPlayer || tmpDist < bestDst) && (bestDst = tmpDist, tmpPlayer = players[i]);
            tmpPlayer ? (this.chargeTarget = tmpPlayer, this.moveCount = UTILS.randInt(8000, 12000)) : (this.moveCount = UTILS.randInt(1000, 2000), this.targetDir = UTILS.randFloat(-Math.PI, Math.PI));
          } else
            this.moveCount = UTILS.randInt(4000, 10000), this.targetDir = UTILS.randFloat(-Math.PI, Math.PI);
      } else if (this.moveCount > 0) {
        var tmpSpd = this.speed * slowMlt;
        if (this.runFrom && this.runFrom.active && (!this.runFrom.isPlayer || this.runFrom.alive) ? (this.targetDir = UTILS.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y), tmpSpd *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = UTILS.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y), tmpSpd *= 1.75, charging = !0), this.hitWait && (tmpSpd *= 0.3), this.dir != this.targetDir) {
          this.dir %= PI2;
          var netAngle = (this.dir - this.targetDir + PI2) % PI2,
            amnt = Math.min(Math.abs(netAngle - PI2), netAngle, this.turnSpeed * delta),
            sign = netAngle - Math.PI >= 0 ? 1 : -1;
          this.dir += sign * amnt + PI2;
        }
        this.dir %= PI2, this.xVel += tmpSpd * delta * Math.cos(this.dir), this.yVel += tmpSpd * delta * Math.sin(this.dir), this.moveCount -= delta, this.moveCount <= 0 && (this.runFrom = null, this.chargeTarget = null, this.waitCount = this.hostile ? 1500 : UTILS.randInt(1500, 6000));
      }
      this.zIndex = 0, this.lockMove = !1;
      var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta),
        depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40))),
        tMlt = 1 / depth;
      for (i = 0; i < depth; ++i) {
        this.xVel && (this.x += this.xVel * delta * tMlt), this.yVel && (this.y += this.yVel * delta * tMlt), tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
        for (var x = 0; x < tmpList.length; ++x)
          for (var y = 0; y < tmpList[x].length; ++y)
            tmpList[x][y].active && objectManager.checkCollision(this, tmpList[x][y], tMlt);
      }
      var tmpObj, tmpDst, tmpDir, hitting = !1;
      if (this.hitWait > 0 && (this.hitWait -= delta, this.hitWait <= 0)) {
        hitting = !0, this.hitWait = 0, this.leapForce && !UTILS.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir), this.yVel += this.leapForce * Math.sin(this.dir));
        for (var tmpList = objectManager.getGridArrays(this.x, this.y, this.hitRange), t = 0; t < tmpList.length; ++t)
          for (x = 0; x < tmpList[t].length; ++x)
            (tmpObj = tmpList[t][x])
            .health && (tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y)) < tmpObj.scale + this.hitRange && (tmpObj.changeHealth(5 * -this.dmg) && objectManager.disableObj(tmpObj), objectManager.hitObj(tmpObj, UTILS.getDirection(this.x, this.y, tmpObj.x, tmpObj.y)));
        for (x = 0; x < players.length; ++x)
          players[x].canSee(this) && server.send(players[x].id, 'aa', this.sid);
      }
      if (charging || hitting)
        for (i = 0; i < players.length; ++i)
          (tmpObj = players[i]) && tmpObj.alive && (tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y), this.hitRange ? !this.hitWait && tmpDst <= this.hitRange + tmpObj.scale && (hitting ? (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), tmpObj.changeHealth(-this.dmg), tmpObj.xVel += 0.6 * Math.cos(tmpDir), tmpObj.yVel += 0.6 * Math.sin(tmpDir), this.runFrom = null, this.chargeTarget = null, this.waitCount = 3000, this.hitWait = UTILS.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : tmpDst <= this.scale + tmpObj.scale && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), tmpObj.changeHealth(-this.dmg), tmpObj.xVel += 0.55 * Math.cos(tmpDir), tmpObj.yVel += 0.55 * Math.sin(tmpDir)));
      this.xVel && (this.xVel *= Math.pow(config.playerDecel, delta)), this.yVel && (this.yVel *= Math.pow(config.playerDecel, delta));
      var tmpScale = this.scale;
      this.x - tmpScale < 0 ? (this.x = tmpScale, this.xVel = 0) : this.x + tmpScale > config.mapScale && (this.x = config.mapScale - tmpScale, this.xVel = 0), this.y - tmpScale < 0 ? (this.y = tmpScale, this.yVel = 0) : this.y + tmpScale > config.mapScale && (this.y = config.mapScale - tmpScale, this.yVel = 0);
    }
  }, this.canSee = function (other) {
    if (!other)
      return !1;
    if (other.skin && other.skin.invisTimer && other.noMovTimer >= other.skin.invisTimer)
      return !1;
    var dx = Math.abs(other.x - this.x) - other.scale,
      dy = Math.abs(other.y - this.y) - other.scale;
    return dx <= config.maxScreenWidth / 2 * 1.3 && dy <= config.maxScreenHeight / 2 * 1.3;
  };
  var tmpRatio = 0,
    animIndex = 0;
  this.animate = function (delta) {
    this.animTime > 0 && (this.animTime -= delta, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, tmpRatio = 0, animIndex = 0) : 0 == animIndex ? (tmpRatio += delta / (this.animSpeed * config.hitReturnRatio), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio)), tmpRatio >= 1 && (tmpRatio = 1, animIndex = 1)) : (tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio)), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio))));
  }, this.startAnim = function () {
    this.animTime = this.animSpeed = 600, this.targetAngle = 0.8 * Math.PI, tmpRatio = 0, animIndex = 0;
  }, this.changeHealth = function (val, doer, runFrom) {
    if (this.active && (this.health += val, runFrom && (this.hitScare && !UTILS.randInt(0, this.hitScare) ? (this.runFrom = runFrom, this.waitCount = 0, this.moveCount = 2000) : this.hostile && this.chargePlayer && runFrom.isPlayer ? (this.chargeTarget = runFrom, this.waitCount = 0, this.moveCount = 8000) : this.dontRun || (this.runFrom = runFrom, this.waitCount = 0, this.moveCount = 2000)), val < 0 && this.hitRange && UTILS.randInt(0, 1) && (this.hitWait = 500), doer && doer.canSee(this) && val < 0 && server.send(doer.id, 't', Math.round(this.x), Math.round(this.y), Math.round(-val), 1), this.health <= 0 && (this.spawnDelay ? (this.spawnCounter = this.spawnDelay, this.x = -1000000, this.y = -1000000) : (this.x = this.startX || UTILS.randInt(0, config.mapScale), this.y = this.startY || UTILS.randInt(0, config.mapScale)), this.health = this.maxHealth, this.runFrom = null, doer && (scoreCallback(doer, this.killScore), this.drop))))
      for (var i = 0; i < this.drop.length;)
        doer.addResource(config.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1]), i += 2;
  };
};


/***/ }),

/***/ "./src/js/data/aiManager.js":
/*!**********************************!*\
  !*** ./src/js/data/aiManager.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {
  this.aiTypes = [{
      id: 0,
      src: 'cow_1',
      killScore: 150,
      health: 500,
      weightM: 0.8,
      speed: 0.00095,
      turnSpeed: 0.001,
      scale: 72,
      drop: [
        'food',
        50
      ]
    },
    {
      id: 1,
      src: 'pig_1',
      killScore: 200,
      health: 800,
      weightM: 0.6,
      speed: 0.00085,
      turnSpeed: 0.001,
      scale: 72,
      drop: [
        'food',
        80
      ]
    },
    {
      id: 2,
      name: 'Bull',
      src: 'bull_2',
      hostile: !0,
      dmg: 20,
      killScore: 1000,
      health: 1800,
      weightM: 0.5,
      speed: 0.00094,
      turnSpeed: 0.00074,
      scale: 78,
      viewRange: 800,
      chargePlayer: !0,
      drop: [
        'food',
        100
      ]
    },
    {
      id: 3,
      name: 'Bully',
      src: 'bull_1',
      hostile: !0,
      dmg: 20,
      killScore: 2000,
      health: 2800,
      weightM: 0.45,
      speed: 0.001,
      turnSpeed: 0.0008,
      scale: 90,
      viewRange: 900,
      chargePlayer: !0,
      drop: [
        'food',
        400
      ]
    },
    {
      id: 4,
      name: 'Wolf',
      src: 'wolf_1',
      hostile: !0,
      dmg: 8,
      killScore: 500,
      health: 300,
      weightM: 0.45,
      speed: 0.001,
      turnSpeed: 0.002,
      scale: 84,
      viewRange: 800,
      chargePlayer: !0,
      drop: [
        'food',
        200
      ]
    },
    {
      id: 5,
      name: 'Quack',
      src: 'chicken_1',
      dmg: 8,
      killScore: 2000,
      noTrap: !0,
      health: 300,
      weightM: 0.2,
      speed: 0.0018,
      turnSpeed: 0.006,
      scale: 70,
      drop: [
        'food',
        100
      ]
    },
    {
      id: 6,
      name: 'MOOSTAFA',
      nameScale: 50,
      src: 'enemy',
      hostile: !0,
      dontRun: !0,
      fixedSpawn: !0,
      spawnDelay: 60000,
      noTrap: !0,
      colDmg: 100,
      dmg: 40,
      killScore: 8000,
      health: 18000,
      weightM: 0.4,
      speed: 0.0007,
      turnSpeed: 0.01,
      scale: 80,
      spriteMlt: 1.8,
      leapForce: 0.9,
      viewRange: 1000,
      hitRange: 210,
      hitDelay: 1000,
      chargePlayer: !0,
      drop: [
        'food',
        100
      ]
    },
    {
      id: 7,
      name: 'Treasure',
      hostile: !0,
      nameScale: 35,
      src: 'crate_1',
      fixedSpawn: !0,
      spawnDelay: 120000,
      colDmg: 200,
      killScore: 5000,
      health: 20000,
      weightM: 0.1,
      speed: 0,
      turnSpeed: 0,
      scale: 70,
      spriteMlt: 1
    },
    {
      id: 8,
      name: 'MOOFIE',
      src: 'wolf_2',
      hostile: !0,
      fixedSpawn: !0,
      dontRun: !0,
      hitScare: 4,
      spawnDelay: 30000,
      noTrap: !0,
      nameScale: 35,
      dmg: 10,
      colDmg: 100,
      killScore: 3000,
      health: 7000,
      weightM: 0.45,
      speed: 0.0015,
      turnSpeed: 0.002,
      scale: 90,
      viewRange: 800,
      chargePlayer: !0,
      drop: [
        'food',
        1000
      ]
    }
  ], this.spawn = function (x, y, dir, index) {
    for (var tmpObj, i = 0; i < ais.length; ++i)
      if (!ais[i].active) {
        tmpObj = ais[i];
        break;
      }
    return tmpObj || (tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server), ais.push(tmpObj)), tmpObj.init(x, y, dir, index, this.aiTypes[index]), tmpObj;
  };
};


/***/ }),

/***/ "./src/js/data/gameObject.js":
/*!***********************************!*\
  !*** ./src/js/data/gameObject.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sid) {
  this.sid = sid, this.init = function (x, y, dir, scale, type, data, owner) {
    data = data || {}, this.sentTo = {}, this.gridLocations = [], this.active = !0, this.doUpdate = data.doUpdate, this.x = x, this.y = y, this.dir = dir, this.xWiggle = 0, this.yWiggle = 0, this.scale = scale, this.type = type, this.id = data.id, this.owner = owner, this.name = data.name, this.isItem = null != this.id, this.group = data.group, this.health = data.health, this.layer = 2, null != this.group ? this.layer = this.group.layer : 0 == this.type ? this.layer = 3 : 2 == this.type ? this.layer = 0 : 4 == this.type && (this.layer = -1), this.colDiv = data.colDiv || 1, this.blocker = data.blocker, this.ignoreCollision = data.ignoreCollision, this.dontGather = data.dontGather, this.hideFromEnemy = data.hideFromEnemy, this.friction = data.friction, this.projDmg = data.projDmg, this.dmg = data.dmg, this.pDmg = data.pDmg, this.pps = data.pps, this.zIndex = data.zIndex || 0, this.turnSpeed = data.turnSpeed, this.req = data.req, this.trap = data.trap, this.healCol = data.healCol, this.teleport = data.teleport, this.boostSpeed = data.boostSpeed, this.projectile = data.projectile, this.shootRange = data.shootRange, this.shootRate = data.shootRate, this.shootCount = this.shootRate, this.spawnPoint = data.spawnPoint;
  }, this.changeHealth = function (amount, doer) {
    return this.health += amount, this.health <= 0;
  }, this.getScale = function (sM, ig) {
    return sM = sM || 1, this.scale * (this.isItem || 2 == this.type || 3 == this.type || 4 == this.type ? 1 : 0.6 * sM) * (ig ? 1 : this.colDiv);
  }, this.visibleToPlayer = function (player) {
    return !this.hideFromEnemy || this.owner && (this.owner == player || this.owner.team && player.team == this.owner.team);
  }, this.update = function (delta) {
    this.active && (this.xWiggle && (this.xWiggle *= Math.pow(0.99, delta)), this.yWiggle && (this.yWiggle *= Math.pow(0.99, delta)), this.turnSpeed && (this.dir += this.turnSpeed * delta));
  };
};


/***/ }),

/***/ "./src/js/data/items.js":
/*!******************************!*\
  !*** ./src/js/data/items.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const items = {};
items.groups = [{
    id: 0,
    name: 'food',
    layer: 0
  },
  {
    id: 1,
    name: 'walls',
    place: !0,
    limit: 30,
    layer: 0
  },
  {
    id: 2,
    name: 'spikes',
    place: !0,
    limit: 15,
    layer: 0
  },
  {
    id: 3,
    name: 'mill',
    place: !0,
    limit: 7,
    layer: 1
  },
  {
    id: 4,
    name: 'mine',
    place: !0,
    limit: 1,
    layer: 0
  },
  {
    id: 5,
    name: 'trap',
    place: !0,
    limit: 6,
    layer: -1
  },
  {
    id: 6,
    name: 'booster',
    place: !0,
    limit: 12,
    layer: -1
  },
  {
    id: 7,
    name: 'turret',
    place: !0,
    limit: 2,
    layer: 1
  },
  {
    id: 8,
    name: 'watchtower',
    place: !0,
    limit: 12,
    layer: 1
  },
  {
    id: 9,
    name: 'buff',
    place: !0,
    limit: 4,
    layer: -1
  },
  {
    id: 10,
    name: 'spawn',
    place: !0,
    limit: 1,
    layer: -1
  },
  {
    id: 11,
    name: 'sapling',
    place: !0,
    limit: 2,
    layer: 0
  },
  {
    id: 12,
    name: 'blocker',
    place: !0,
    limit: 3,
    layer: -1
  },
  {
    id: 13,
    name: 'teleporter',
    place: !0,
    limit: 2,
    layer: -1
  }
], items.projectiles = [{
    indx: 0,
    layer: 0,
    src: 'arrow_1',
    dmg: 25,
    speed: 1.6,
    scale: 103,
    range: 1000
  },
  {
    indx: 1,
    layer: 1,
    dmg: 25,
    scale: 20
  },
  {
    indx: 0,
    layer: 0,
    src: 'arrow_1',
    dmg: 35,
    speed: 2.5,
    scale: 103,
    range: 1200
  },
  {
    indx: 0,
    layer: 0,
    src: 'arrow_1',
    dmg: 30,
    speed: 2,
    scale: 103,
    range: 1200
  },
  {
    indx: 1,
    layer: 1,
    dmg: 16,
    scale: 20
  },
  {
    indx: 0,
    layer: 0,
    src: 'bullet_1',
    dmg: 50,
    speed: 3.6,
    scale: 160,
    range: 1400
  }
], items.weapons = [{
    id: 0,
    type: 0,
    name: 'tool hammer',
    desc: 'tool for gathering all resources',
    src: 'hammer_1',
    length: 140,
    width: 140,
    xOff: -3,
    yOff: 18,
    dmg: 25,
    range: 65,
    gather: 1,
    speed: 300
  },
  {
    id: 1,
    type: 0,
    age: 2,
    name: 'hand axe',
    desc: 'gathers resources at a higher rate',
    src: 'axe_1',
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 30,
    spdMult: 1,
    range: 70,
    gather: 2,
    speed: 400
  },
  {
    id: 2,
    type: 0,
    age: 8,
    pre: 1,
    name: 'great axe',
    desc: 'deal more damage and gather more resources',
    src: 'great_axe_1',
    length: 140,
    width: 140,
    xOff: -8,
    yOff: 25,
    dmg: 35,
    spdMult: 1,
    range: 75,
    gather: 4,
    speed: 400
  },
  {
    id: 3,
    type: 0,
    age: 2,
    name: 'short sword',
    desc: 'increased attack power but slower move speed',
    src: 'sword_1',
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 46,
    dmg: 35,
    spdMult: 0.85,
    range: 110,
    gather: 1,
    speed: 300
  },
  {
    id: 4,
    type: 0,
    age: 8,
    pre: 3,
    name: 'katana',
    desc: 'greater range and damage',
    src: 'samurai_1',
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 59,
    dmg: 40,
    spdMult: 0.8,
    range: 118,
    gather: 1,
    speed: 300
  },
  {
    id: 5,
    type: 0,
    age: 2,
    name: 'polearm',
    desc: 'long range melee weapon',
    src: 'spear_1',
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 45,
    knock: 0.2,
    spdMult: 0.82,
    range: 142,
    gather: 1,
    speed: 700
  },
  {
    id: 6,
    type: 0,
    age: 2,
    name: 'bat',
    desc: 'fast long range melee weapon',
    src: 'bat_1',
    iPad: 1.3,
    length: 110,
    width: 180,
    xOff: -8,
    yOff: 53,
    dmg: 20,
    knock: 0.7,
    range: 110,
    gather: 1,
    speed: 300
  },
  {
    id: 7,
    type: 0,
    age: 2,
    name: 'daggers',
    desc: 'really fast short range weapon',
    src: 'dagger_1',
    iPad: 0.8,
    length: 110,
    width: 110,
    xOff: 18,
    yOff: 0,
    dmg: 20,
    knock: 0.1,
    range: 65,
    gather: 1,
    hitSlow: 0.1,
    spdMult: 1.13,
    speed: 100
  },
  {
    id: 8,
    type: 0,
    age: 2,
    name: 'stick',
    desc: 'great for gathering but very weak',
    src: 'stick_1',
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 1,
    spdMult: 1,
    range: 70,
    gather: 7,
    speed: 400
  },
  {
    id: 9,
    type: 1,
    age: 6,
    name: 'hunting bow',
    desc: 'bow used for ranged combat and hunting',
    src: 'bow_1',
    req: [
      'wood',
      4
    ],
    length: 120,
    width: 120,
    xOff: -6,
    yOff: 0,
    projectile: 0,
    spdMult: 0.75,
    speed: 600
  },
  {
    id: 10,
    type: 1,
    age: 6,
    name: 'great hammer',
    desc: 'hammer used for destroying structures',
    src: 'great_hammer_1',
    length: 140,
    width: 140,
    xOff: -9,
    yOff: 25,
    dmg: 10,
    spdMult: 0.88,
    range: 75,
    sDmg: 7.5,
    gather: 1,
    speed: 400
  },
  {
    id: 11,
    type: 1,
    age: 6,
    name: 'wooden shield',
    desc: 'blocks projectiles and reduces melee damage',
    src: 'shield_1',
    length: 120,
    width: 120,
    shield: 0.2,
    xOff: 6,
    yOff: 0,
    spdMult: 0.7
  },
  {
    id: 12,
    type: 1,
    age: 8,
    pre: 9,
    name: 'crossbow',
    desc: 'deals more damage and has greater range',
    src: 'crossbow_1',
    req: [
      'wood',
      5
    ],
    aboveHand: !0,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 2,
    spdMult: 0.7,
    speed: 700
  },
  {
    id: 13,
    type: 1,
    age: 9,
    pre: 12,
    name: 'repeater crossbow',
    desc: 'high firerate crossbow with reduced damage',
    src: 'crossbow_2',
    req: [
      'wood',
      10
    ],
    aboveHand: !0,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 3,
    spdMult: 0.7,
    speed: 230
  },
  {
    id: 14,
    type: 1,
    age: 6,
    name: 'mc grabby',
    desc: 'steals resources from enemies',
    src: 'grab_1',
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 0,
    steal: 250,
    knock: 0.2,
    spdMult: 1.05,
    range: 125,
    gather: 0,
    speed: 700
  },
  {
    id: 15,
    type: 1,
    age: 9,
    pre: 12,
    name: 'musket',
    desc: 'slow firerate but high damage and range',
    src: 'musket_1',
    req: [
      'stone',
      10
    ],
    aboveHand: !0,
    rec: 0.35,
    armS: 0.6,
    hndS: 0.3,
    hndD: 1.6,
    length: 205,
    width: 205,
    xOff: 25,
    yOff: 0,
    projectile: 5,
    hideProjectile: !0,
    spdMult: 0.6,
    speed: 1500
  }
], items.list = [{
    group: items.groups[0],
    name: 'apple',
    desc: 'restores 20 health when consumed',
    req: [
      'food',
      10
    ],
    consume: function (doer) {
      return doer.changeHealth(20, doer);
    },
    scale: 22,
    holdOffset: 15
  },
  {
    age: 3,
    group: items.groups[0],
    name: 'cookie',
    desc: 'restores 40 health when consumed',
    req: [
      'food',
      15
    ],
    consume: function (doer) {
      return doer.changeHealth(40, doer);
    },
    scale: 27,
    holdOffset: 15
  },
  {
    age: 7,
    group: items.groups[0],
    name: 'cheese',
    desc: 'restores 30 health and another 50 over 5 seconds',
    req: [
      'food',
      25
    ],
    consume: function (doer) {
      return !!(doer.changeHealth(30, doer) || doer.health < 100) && (doer.dmgOverTime.dmg = -10, doer.dmgOverTime.doer = doer, doer.dmgOverTime.time = 5, !0);
    },
    scale: 27,
    holdOffset: 15
  },
  {
    group: items.groups[1],
    name: 'wood wall',
    desc: 'provides protection for your village',
    req: [
      'wood',
      10
    ],
    projDmg: !0,
    health: 380,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 3,
    group: items.groups[1],
    name: 'stone wall',
    desc: 'provides improved protection for your village',
    req: [
      'stone',
      25
    ],
    health: 900,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    pre: 1,
    group: items.groups[1],
    name: 'castle wall',
    desc: 'provides powerful protection for your village',
    req: [
      'stone',
      35
    ],
    health: 1500,
    scale: 52,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    group: items.groups[2],
    name: 'spikes',
    desc: 'damages enemies when they touch them',
    req: [
      'wood',
      20,
      'stone',
      5
    ],
    health: 400,
    dmg: 20,
    scale: 49,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    age: 5,
    group: items.groups[2],
    name: 'greater spikes',
    desc: 'damages enemies when they touch them',
    req: [
      'wood',
      30,
      'stone',
      10
    ],
    health: 500,
    dmg: 35,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    age: 9,
    pre: 1,
    group: items.groups[2],
    name: 'poison spikes',
    desc: 'poisons enemies when they touch them',
    req: [
      'wood',
      35,
      'stone',
      15
    ],
    health: 600,
    dmg: 30,
    pDmg: 5,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    age: 9,
    pre: 2,
    group: items.groups[2],
    name: 'spinning spikes',
    desc: 'damages enemies when they touch them',
    req: [
      'wood',
      30,
      'stone',
      20
    ],
    health: 500,
    dmg: 45,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
  },
  {
    group: items.groups[3],
    name: 'windmill',
    desc: 'generates gold over time',
    req: [
      'wood',
      50,
      'stone',
      10
    ],
    health: 400,
    pps: 1,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 45,
    holdOffset: 20,
    placeOffset: 5
  },
  {
    age: 5,
    pre: 1,
    group: items.groups[3],
    name: 'faster windmill',
    desc: 'generates more gold over time',
    req: [
      'wood',
      60,
      'stone',
      20
    ],
    health: 500,
    pps: 1.5,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
  },
  {
    age: 8,
    pre: 1,
    group: items.groups[3],
    name: 'power mill',
    desc: 'generates more gold over time',
    req: [
      'wood',
      100,
      'stone',
      50
    ],
    health: 800,
    pps: 2,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
  },
  {
    age: 5,
    group: items.groups[4],
    type: 2,
    name: 'mine',
    desc: 'allows you to mine stone',
    req: [
      'wood',
      20,
      'stone',
      100
    ],
    iconLineMult: 12,
    scale: 65,
    holdOffset: 20,
    placeOffset: 0
  },
  {
    age: 5,
    group: items.groups[11],
    type: 0,
    name: 'sapling',
    desc: 'allows you to farm wood',
    req: [
      'wood',
      150
    ],
    iconLineMult: 12,
    colDiv: 0.5,
    scale: 110,
    holdOffset: 50,
    placeOffset: -15
  },
  {
    age: 4,
    group: items.groups[5],
    name: 'pit trap',
    desc: 'pit that traps enemies if they walk over it',
    req: [
      'wood',
      30,
      'stone',
      30
    ],
    trap: !0,
    ignoreCollision: !0,
    hideFromEnemy: !0,
    health: 500,
    colDiv: 0.2,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 4,
    group: items.groups[6],
    name: 'boost pad',
    desc: 'provides boost when stepped on',
    req: [
      'stone',
      20,
      'wood',
      5
    ],
    ignoreCollision: !0,
    boostSpeed: 1.5,
    health: 150,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[7],
    doUpdate: !0,
    name: 'turret',
    desc: 'defensive structure that shoots at enemies',
    req: [
      'wood',
      200,
      'stone',
      150
    ],
    health: 800,
    projectile: 1,
    shootRange: 700,
    shootRate: 2200,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[8],
    name: 'platform',
    desc: 'platform to shoot over walls and cross over water',
    req: [
      'wood',
      20
    ],
    ignoreCollision: !0,
    zIndex: 1,
    health: 300,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[9],
    name: 'healing pad',
    desc: 'standing on it will slowly heal you',
    req: [
      'wood',
      30,
      'food',
      10
    ],
    ignoreCollision: !0,
    healCol: 15,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 9,
    group: items.groups[10],
    name: 'spawn pad',
    desc: 'you will spawn here when you die but it will dissapear',
    req: [
      'wood',
      100,
      'stone',
      100
    ],
    health: 400,
    ignoreCollision: !0,
    spawnPoint: !0,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[12],
    name: 'blocker',
    desc: 'blocks building in radius',
    req: [
      'wood',
      30,
      'stone',
      25
    ],
    ignoreCollision: !0,
    blocker: 300,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  },
  {
    age: 7,
    group: items.groups[13],
    name: 'teleporter',
    desc: 'teleports you to a random point on the map',
    req: [
      'wood',
      60,
      'stone',
      60
    ],
    ignoreCollision: !0,
    teleport: !0,
    health: 200,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
  }
];
for (var i = 0; i < items.list.length; ++i)
  items.list[i].id = i, items.list[i].pre && (items.list[i].pre = i - items.list[i].pre);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);


/***/ }),

/***/ "./src/js/data/mapManager.js":
/*!***********************************!*\
  !*** ./src/js/data/mapManager.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const ctx = console/**.context**/;

if ("log" in ctx) {
  ctx.log("This script is made using Illya#9999's bundle processor, debundled by 0xffabc");
}


/***/ }),

/***/ "./src/js/data/objectManager.js":
/*!**************************************!*\
  !*** ./src/js/data/objectManager.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var mathFloor = Math.floor,
  mathABS = Math.abs,
  mathCOS = Math.cos,
  mathSIN = Math.sin,
  mathSQRT = (Math.pow, Math.sqrt);
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(GameObject, gameObjects, UTILS, config, players, server) {
  var tmpX, tmpY;
  this.objects = gameObjects, this.grids = {}, this.updateObjects = [];
  var tmpS = config.mapScale / config.colGrid;
  this.setObjectGrids = function (obj) {
    for (var objX = Math.min(config.mapScale, Math.max(0, obj.x)), objY = Math.min(config.mapScale, Math.max(0, obj.y)), x = 0; x < config.colGrid; ++x) {
      tmpX = x * tmpS;
      for (var y = 0; y < config.colGrid; ++y)
        tmpY = y * tmpS, objX + obj.scale >= tmpX && objX - obj.scale <= tmpX + tmpS && objY + obj.scale >= tmpY && objY - obj.scale <= tmpY + tmpS && (this.grids[x + '_' + y] || (this.grids[x + '_' + y] = []), this.grids[x + '_' + y].push(obj), obj.gridLocations.push(x + '_' + y));
    }
  }, this.removeObjGrid = function (obj) {
    for (var tmpIndx, i = 0; i < obj.gridLocations.length; ++i)
      (tmpIndx = this.grids[obj.gridLocations[i]].indexOf(obj)) >= 0 && this.grids[obj.gridLocations[i]].splice(tmpIndx, 1);
  }, this.disableObj = function (obj) {
    if (!obj) return;
    if (obj.active = !1, server) {
      obj.owner && obj.pps && (obj.owner.pps -= obj.pps), this.removeObjGrid(obj);
      var tmpIndx = this.updateObjects.indexOf(obj);
      delete this.updateObjects[tmpIndx];
    }
  }, this.hitObj = function (tmpObj, tmpDir) {
    for (var p = 0; p < players.length; ++p)
      players[p].active && (tmpObj.sentTo[players[p].id] && (tmpObj.active ? players[p].canSee(tmpObj) && server.send(players[p].id, '8', UTILS.fixTo(tmpDir, 1), tmpObj.sid) : server.send(players[p].id, '12', tmpObj.sid)), tmpObj.active || tmpObj.owner != players[p] || players[p].changeItemCount(tmpObj.group.id, -1));
  };
  var tmpGrid, tmpObj, tmpArray = [];
  this.getGridArrays = function (xPos, yPos, s) {
    tmpX = mathFloor(xPos / tmpS), tmpY = mathFloor(yPos / tmpS), tmpArray.length = 0;
    try {
      this.grids[tmpX + '_' + tmpY] && tmpArray.push(this.grids[tmpX + '_' + tmpY]), xPos + s >= (tmpX + 1) * tmpS && ((tmpGrid = this.grids[tmpX + 1 + '_' + tmpY]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS ? (tmpGrid = this.grids[tmpX + 1 + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid) : yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX + 1 + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid)), tmpX && xPos - s <= tmpX * tmpS && ((tmpGrid = this.grids[tmpX - 1 + '_' + tmpY]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS ? (tmpGrid = this.grids[tmpX - 1 + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid) : yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX - 1 + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid)), yPos + s >= (tmpY + 1) * tmpS && (tmpGrid = this.grids[tmpX + '_' + (tmpY + 1)]) && tmpArray.push(tmpGrid), tmpY && yPos - s <= tmpY * tmpS && (tmpGrid = this.grids[tmpX + '_' + (tmpY - 1)]) && tmpArray.push(tmpGrid);
    } catch (e) {}
    return tmpArray;
  }, this.add = function (sid, x, y, dir, s, type, data, setSID, owner) {
    tmpObj = new GameObject(sid);
    gameObjects[sid] = tmpObj;
    setSID && (tmpObj.sid = sid);
    tmpObj.init(x, y, dir, s, type, data, owner);
    server && (this.setObjectGrids(tmpObj));
    tmpObj.doUpdate && (this.updateObjects[sid] = tmpObj);
  }, this.disableBySid = function (sid) {
    this.disableObj(gameObjects[sid])
  }, this.removeAllItems = function (sid, server) {
    for (var i = 0; i < gameObjects.length; ++i)
      gameObjects[i]?.active && gameObjects[i].owner && gameObjects[i].owner.sid == sid && this.disableObj(gameObjects[i]);
    server && server.broadcast('13', sid);
  }, this.fetchSpawnObj = function (sid) {
    for (var tmpLoc = null, i = 0; i < gameObjects.length; ++i)
      if ((tmpObj = gameObjects[i])
        .active && tmpObj.owner && tmpObj.owner.sid == sid && tmpObj.spawnPoint) {
        tmpLoc = [
          tmpObj.x,
          tmpObj.y
        ], this.disableObj(tmpObj), server.broadcast('12', tmpObj.sid), tmpObj.owner && tmpObj.owner.changeItemCount(tmpObj.group.id, -1);
        break;
      }
    return tmpLoc;
  }, this.checkItemLocation = function (x, y, s, sM, indx, ignoreWater, placer) {
    for (var i = 0; i < gameObjects.length; ++i) {
      var blockS = gameObjects[i].blocker ? gameObjects[i].blocker : gameObjects[i].getScale(sM, gameObjects[i].isItem);
      if (gameObjects[i].active && UTILS.getDistance(x, y, gameObjects[i].x, gameObjects[i].y) < s + blockS)
        return !1;
    }
    return !(!ignoreWater && 18 != indx && y >= config.mapScale / 2 - config.riverWidth / 2 && y <= config.mapScale / 2 + config.riverWidth / 2);
  }, this.addProjectile = function (x, y, dir, range, indx) {
    for (var tmpProj, tmpData = items.projectiles[indx], i = 0; i < projectiles.length; ++i)
      if (!projectiles[i].active) {
        tmpProj = projectiles[i];
        break;
      }
    tmpProj || (tmpProj = new Projectile(players, UTILS), projectiles.push(tmpProj)), tmpProj.init(indx, x, y, dir, tmpData.speed, range, tmpData.scale);
  }, this.checkCollision = function (player, other, delta) {
    delta = delta || 1;
    var dx = player.x - other.x,
      dy = player.y - other.y,
      tmpLen = player.scale + other.scale;
    if (mathABS(dx) <= tmpLen || mathABS(dy) <= tmpLen) {
      tmpLen = player.scale + (other.getScale ? other.getScale() : other.scale);
      var tmpInt = mathSQRT(dx * dx + dy * dy) - tmpLen;
      if (tmpInt <= 0) {
        if (other.ignoreCollision)
          !other.trap || player.noTrap || other.owner == player || other.owner && other.owner.team && other.owner.team == player.team ? other.boostSpeed ? (player.xVel += delta * other.boostSpeed * (other.weightM || 1) * mathCOS(other.dir), player.yVel += delta * other.boostSpeed * (other.weightM || 1) * mathSIN(other.dir)) : other.healCol ? player.healCol = other.healCol : other.teleport && (player.x = UTILS.randInt(0, config.mapScale), player.y = UTILS.randInt(0, config.mapScale)) : (player.lockMove = !0, other.hideFromEnemy = !1);
        else {
          var tmpDir = UTILS.getDirection(player.x, player.y, other.x, other.y);
          if (UTILS.getDistance(player.x, player.y, other.x, other.y), other.isPlayer ? (tmpInt = -1 * tmpInt / 2, player.x += tmpInt * mathCOS(tmpDir), player.y += tmpInt * mathSIN(tmpDir), other.x -= tmpInt * mathCOS(tmpDir), other.y -= tmpInt * mathSIN(tmpDir)) : (player.x = other.x + tmpLen * mathCOS(tmpDir), player.y = other.y + tmpLen * mathSIN(tmpDir), player.xVel *= 0.75, player.yVel *= 0.75), other.dmg && other.owner != player && (!other.owner || !other.owner.team || other.owner.team != player.team)) {
            player.changeHealth(-other.dmg, other.owner, other);
            var tmpSpd = 1.5 * (other.weightM || 1);
            player.xVel += tmpSpd * mathCOS(tmpDir), player.yVel += tmpSpd * mathSIN(tmpDir), !other.pDmg || player.skin && player.skin.poisonRes || (player.dmgOverTime.dmg = other.pDmg, player.dmgOverTime.time = 5, player.dmgOverTime.doer = other.owner), player.colDmg && other.health && (other.changeHealth(-player.colDmg) && this.disableObj(other), this.hitObj(other, UTILS.getDirection(player.x, player.y, other.x, other.y)));
          }
        }
        return other.zIndex > player.zIndex && (player.zIndex = other.zIndex), !0;
      }
    }
    return !1;
  };
};


/***/ }),

/***/ "./src/js/data/player.js":
/*!*******************************!*\
  !*** ./src/js/data/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var mathABS = Math.abs,
  mathCOS = Math.cos,
  mathSIN = Math.sin,
  mathPOW = Math.pow,
  mathSQRT = Math.sqrt;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
  this.id = id, this.sid = sid, this.tmpScore = 0, this.team = null, this.skinIndex = 0, this.tailIndex = 0, this.hitTime = 0, this.tails = {};
  for (var i = 0; i < accessories.length; ++i)
    accessories[i].price <= 0 && (this.tails[accessories[i].id] = 1);
  for (this.skins = {}, i = 0; i < hats.length; ++i)
    hats[i].price <= 0 && (this.skins[hats[i].id] = 1);
  this.points = 0, this.dt = 0, this.hidden = !1, this.itemCounts = {}, this.isPlayer = !0, this.pps = 0, this.moveDir = void 0, this.skinRot = 0, this.lastPing = 0, this.iconIndex = 0, this.skinColor = 0, this.spawn = function (moofoll) {
    this.active = !0, this.alive = !0, this.lockMove = !1, this.lockDir = !1, this.minimapCounter = 0, this.chatCountdown = 0, this.shameCount = 0, this.shameTimer = 0, this.sentTo = {}, this.gathering = 0, this.autoGather = 0, this.animTime = 0, this.animSpeed = 0, this.mouseState = 0, this.buildIndex = -1, this.weaponIndex = 0, this.dmgOverTime = {}, this.noMovTimer = 0, this.maxXP = 300, this.XP = 0, this.age = 1, this.kills = 0, this.upgrAge = 2, this.upgradePoints = 0, this.x = 0, this.y = 0, this.zIndex = 0, this.xVel = 0, this.yVel = 0, this.slowMult = 1, this.dir = 0, this.dirPlus = 0, this.targetDir = 0, this.targetAngle = 0, this.maxHealth = 100, this.health = this.maxHealth, this.scale = config.playerScale, this.speed = config.playerSpeed, this.resetMoveDir(), this.resetResources(moofoll), this.items = [
      0,
      3,
      6,
      10
    ], this.weapons = [0], this.shootCount = 0, this.weaponXP = [], this.reloads = {};
  }, this.resetMoveDir = function () {
    this.moveDir = void 0;
  }, this.resetResources = function (moofoll) {
    for (var i = 0; i < config.resourceTypes.length; ++i)
      this[config.resourceTypes[i]] = moofoll ? 100 : 0;
  }, this.addItem = function (id) {
    var tmpItem = items.list[id];
    if (tmpItem) {
      for (var i = 0; i < this.items.length; ++i)
        if (items.list[this.items[i]].group == tmpItem.group)
          return this.buildIndex == this.items[i] && (this.buildIndex = id), this.items[i] = id, !0;
      return this.items.push(id), !0;
    }
    return !1;
  }, this.setUserData = function (data) {
    if (data) {
      this.name = 'cc';
      var name = data.name + '';

      this.name = name;
      this.skinColor = 0;
      config.skinColors[data.skin] && (this.skinColor = data.skin);
    }
  }, this.getData = function () {
    return [
      this.id,
      this.sid,
      this.name,
      UTILS.fixTo(this.x, 2),
      UTILS.fixTo(this.y, 2),
      UTILS.fixTo(this.dir, 3),
      this.health,
      this.maxHealth,
      this.scale,
      this.skinColor
    ];
  }, this.setData = function (data) {
    this.id = data[0], this.sid = data[1], this.name = data[2], this.x = data[3], this.y = data[4], this.dir = data[5], this.health = data[6], this.maxHealth = data[7], this.scale = data[8], this.skinColor = data[9];
  };
  var timerCount = 0;
  this.update = function (delta) {
    if (this.alive) {
      if (this.shameTimer > 0 && (this.shameTimer -= delta, this.shameTimer <= 0 && (this.shameTimer = 0, this.shameCount = 0)), (timerCount -= delta) <= 0) {
        var regenAmount = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
        regenAmount && this.changeHealth(regenAmount, this), this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer), this.dmgOverTime.time -= 1, this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)), this.healCol && this.changeHealth(this.healCol, this), timerCount = 1000;
      }
      if (this.alive) {
        if (this.slowMult < 1 && (this.slowMult += 0.0008 * delta, this.slowMult > 1 && (this.slowMult = 1)), this.noMovTimer += delta, (this.xVel || this.yVel) && (this.noMovTimer = 0), this.lockMove)
          this.xVel = 0, this.yVel = 0;
        else {
          var spdMult = (this.buildIndex >= 0 ? 0.5 : 1) * (items.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= config.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : config.snowSpeed : 1) * this.slowMult;
          !this.zIndex && this.y >= config.mapScale / 2 - config.riverWidth / 2 && this.y <= config.mapScale / 2 + config.riverWidth / 2 && (this.skin && this.skin.watrImm ? (spdMult *= 0.75, this.xVel += 0.4 * config.waterCurrent * delta) : (spdMult *= 0.33, this.xVel += config.waterCurrent * delta));
          var xVel = null != this.moveDir ? mathCOS(this.moveDir) : 0,
            yVel = null != this.moveDir ? mathSIN(this.moveDir) : 0,
            length = mathSQRT(xVel * xVel + yVel * yVel);
          0 != length && (xVel /= length, yVel /= length), xVel && (this.xVel += xVel * this.speed * spdMult * delta), yVel && (this.yVel += yVel * this.speed * spdMult * delta);
        }
        var tmpList;
        this.zIndex = 0, this.lockMove = !1, this.healCol = 0;
        for (var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta), depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40))), tMlt = 1 / depth, alreadyCollided = {}, i = 0; i < depth; ++i) {
          this.xVel && (this.x += this.xVel * delta * tMlt), this.yVel && (this.y += this.yVel * delta * tMlt), tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
          for (var x = 0; x < tmpList.length; ++x) {
            for (var y = 0; y < tmpList[x].length && (!tmpList[x][y].active || alreadyCollided[tmpList[x][y].sid] || !objectManager.checkCollision(this, tmpList[x][y], tMlt) || (alreadyCollided[tmpList[x][y].sid] = !0, this.alive)); ++y);
            if (!this.alive)
              break;
          }
          if (!this.alive)
            break;
        }
        for (i = (tmpIndx = players.indexOf(this)) + 1; i < players.length; ++i)
          players[i] != this && players[i].alive && objectManager.checkCollision(this, players[i]);
        if (this.xVel && (this.xVel *= mathPOW(config.playerDecel, delta), this.xVel <= 0.01 && this.xVel >= -0.01 && (this.xVel = 0)), this.yVel && (this.yVel *= mathPOW(config.playerDecel, delta), this.yVel <= 0.01 && this.yVel >= -0.01 && (this.yVel = 0)), this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > config.mapScale && (this.x = config.mapScale - this.scale), this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > config.mapScale && (this.y = config.mapScale - this.scale), this.buildIndex < 0)
          if (this.reloads[this.weaponIndex] > 0)
            this.reloads[this.weaponIndex] -= delta, this.gathering = this.mouseState;
          else if (this.gathering || this.autoGather) {
          var worked = !0;
          if (null != items.weapons[this.weaponIndex].gather)
            this.gather(players);
          else if (null != items.weapons[this.weaponIndex].projectile && this.hasRes(items.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
            this.useRes(items.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0), this.noMovTimer = 0;
            var tmpIndx = items.weapons[this.weaponIndex].projectile,
              projOffset = 2 * this.scale,
              aMlt = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
            items.weapons[this.weaponIndex].rec && (this.xVel -= items.weapons[this.weaponIndex].rec * mathCOS(this.dir), this.yVel -= items.weapons[this.weaponIndex].rec * mathSIN(this.dir)), projectileManager.addProjectile(this.x + projOffset * mathCOS(this.dir), this.y + projOffset * mathSIN(this.dir), this.dir, items.projectiles[tmpIndx].range * aMlt, items.projectiles[tmpIndx].speed * aMlt, tmpIndx, this, null, this.zIndex);
          } else
            worked = !1;
          this.gathering = this.mouseState, worked && (this.reloads[this.weaponIndex] = items.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1));
        }
      }
    }
  }, this.addWeaponXP = function (amnt) {
    this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0), this.weaponXP[this.weaponIndex] += amnt;
  }, this.earnXP = function (amount) {
    this.age < config.maxAge && (this.XP += amount, this.XP >= this.maxXP ? (this.age < config.maxAge ? (this.age++, this.XP = 0, this.maxXP *= 1.2) : this.XP = this.maxXP, this.upgradePoints++, server.send(this.id, '16', this.upgradePoints, this.upgrAge), server.send(this.id, '15', this.XP, UTILS.fixTo(this.maxXP, 1), this.age)) : server.send(this.id, '15', this.XP));
  }, this.changeHealth = function (amount, doer) {
    if (amount > 0 && this.health >= this.maxHealth)
      return !1;
    amount < 0 && this.skin && (amount *= this.skin.dmgMult || 1), amount < 0 && this.tail && (amount *= this.tail.dmgMult || 1), amount < 0 && (this.hitTime = Date.now()), this.health += amount, this.health > this.maxHealth && (amount -= this.health - this.maxHealth, this.health = this.maxHealth), this.health <= 0 && this.kill(doer);
    for (var i = 0; i < players.length; ++i)
      this.sentTo[players[i].id] && server.send(players[i].id, 'h', this.sid, this.health);
    return !doer || !doer.canSee(this) || doer == this && amount < 0 || server.send(doer.id, 't', Math.round(this.x), Math.round(this.y), Math.round(-amount), 1), !0;
  }, this.kill = function (doer) {
    doer && doer.alive && (doer.kills++, doer.skin && doer.skin.goldSteal ? scoreCallback(doer, Math.round(this.points / 2)) : scoreCallback(doer, Math.round(100 * this.age * (doer.skin && doer.skin.kScrM ? doer.skin.kScrM : 1))), server.send(doer.id, '9', 'kills', doer.kills, 1)), this.alive = !1, server.send(this.id, '11'), iconCallback();
  }, this.addResource = function (type, amount, auto) {
    !auto && amount > 0 && this.addWeaponXP(amount), 3 == type ? scoreCallback(this, amount, !0) : (this[config.resourceTypes[type]] += amount, server.send(this.id, '9', config.resourceTypes[type], this[config.resourceTypes[type]], 1));
  }, this.changeItemCount = function (index, value) {
    this.itemCounts[index] = this.itemCounts[index] || 0, this.itemCounts[index] += value, server.send(this.id, '14', index, this.itemCounts[index]);
  }, this.buildItem = function (item) {
    var tmpS = this.scale + item.scale + (item.placeOffset || 0),
      tmpX = this.x + tmpS * mathCOS(this.dir),
      tmpY = this.y + tmpS * mathSIN(this.dir);
    if (this.canBuild(item) && !(item.consume && this.skin && this.skin.noEat) && (item.consume || objectManager.checkItemLocation(tmpX, tmpY, item.scale, 0.6, item.id, !1, this))) {
      var worked = !1;
      if (item.consume) {
        if (this.hitTime) {
          var timeSinceHit = Date.now() - this.hitTime;
          this.hitTime = 0, timeSinceHit <= 120 ? (this.shameCount++, this.shameCount >= 8 && (this.shameTimer = 30000, this.shameCount = 0)) : (this.shameCount -= 2, this.shameCount <= 0 && (this.shameCount = 0));
        }
        this.shameTimer <= 0 && (worked = item.consume(this));
      } else
        worked = !0, item.group.limit && this.changeItemCount(item.group.id, 1), item.pps && (this.pps += item.pps), objectManager.add(objectManager.objects.length, tmpX, tmpY, this.dir, item.scale, item.type, item, !1, this);
      worked && (this.useRes(item), this.buildIndex = -1);
    }
  }, this.hasRes = function (item, mult) {
    return true;
  }, this.useRes = function (item, mult) {
    if (!config.inSandbox)
      for (var i = 0; i < item.req.length;)
        this.addResource(config.resourceTypes.indexOf(item.req[i]), -Math.round(item.req[i + 1] * (mult || 1))), i += 2;
  }, this.canBuild = function (item) {
    var limit = config.inSandbox ? Math.max(3 * item.group.limit, 50) : item.group.limit;
    return !(limit && this.itemCounts[item.group.id] >= limit) && (!!config.inSandbox || this.hasRes(item));
  }, this.gather = function () {
    this.noMovTimer = 0, this.slowMult -= items.weapons[this.weaponIndex].hitSlow || 0.3, this.slowMult < 0 && (this.slowMult = 0);
    for (var tmpDir, tmpObj, hitSomething, tmpVariant = config.fetchVariant(this), applyPoison = tmpVariant.poison, variantDmg = tmpVariant.val, hitObjs = {}, tmpList = objectManager.getGridArrays(this.x, this.y, items.weapons[this.weaponIndex].range), t = 0; t < tmpList.length; ++t)
      for (var i = 0; i < tmpList[t].length; ++i)
        if ((tmpObj = tmpList[t][i])
          .active && !tmpObj.dontGather && !hitObjs[tmpObj.sid] && tmpObj.visibleToPlayer(this) && UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - tmpObj.scale <= items.weapons[this.weaponIndex].range && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle)) {
          if (hitObjs[tmpObj.sid] = 1, tmpObj.health) {
            if (tmpObj.changeHealth(-items.weapons[this.weaponIndex].dmg * variantDmg * (items.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
              for (var x = 0; x < tmpObj.req.length;)
                this.addResource(config.resourceTypes.indexOf(tmpObj.req[x]), tmpObj.req[x + 1]), x += 2;
              objectManager.disableObj(tmpObj);
            }
          } else {
            this.earnXP(4 * items.weapons[this.weaponIndex].gather);
            var count = items.weapons[this.weaponIndex].gather + (3 == tmpObj.type ? 4 : 0);
            this.skin && this.skin.extraGold && this.addResource(3, 1), this.addResource(tmpObj.type, count);
          }
          hitSomething = !0, objectManager.hitObj(tmpObj, tmpDir);
        }
    for (i = 0; i < players.length + ais.length; ++i)
      if ((tmpObj = players[i] || ais[i - players.length]) != this && tmpObj.alive && (!tmpObj.team || tmpObj.team != this.team) && UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - 1.8 * tmpObj.scale <= items.weapons[this.weaponIndex].range && (tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y), UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle)) {
        var stealCount = items.weapons[this.weaponIndex].steal;
        stealCount && tmpObj.addResource && (stealCount = Math.min(tmpObj.points || 0, stealCount), this.addResource(3, stealCount), tmpObj.addResource(3, -stealCount));
        var dmgMlt = variantDmg;
        null != tmpObj.weaponIndex && items.weapons[tmpObj.weaponIndex].shield && UTILS.getAngleDist(tmpDir + Math.PI, tmpObj.dir) <= config.shieldAngle && (dmgMlt = items.weapons[tmpObj.weaponIndex].shield);
        var baseDmgVal = items.weapons[this.weaponIndex].dmg,
          dmgVal = baseDmgVal * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1),
          tmpSpd = 0.3 * (tmpObj.weightM || 1) + (items.weapons[this.weaponIndex].knock || 0);
        tmpObj.xVel += tmpSpd * mathCOS(tmpDir), tmpObj.yVel += tmpSpd * mathSIN(tmpDir), this.skin && this.skin.healD && this.changeHealth(dmgVal * dmgMlt * this.skin.healD, this), this.tail && this.tail.healD && this.changeHealth(dmgVal * dmgMlt * this.tail.healD, this), tmpObj.skin && tmpObj.skin.dmg && this.changeHealth(-baseDmgVal * tmpObj.skin.dmg, tmpObj), tmpObj.tail && tmpObj.tail.dmg && this.changeHealth(-baseDmgVal * tmpObj.tail.dmg, tmpObj), !(tmpObj.dmgOverTime && this.skin && this.skin.poisonDmg) || tmpObj.skin && tmpObj.skin.poisonRes || (tmpObj.dmgOverTime.dmg = this.skin.poisonDmg, tmpObj.dmgOverTime.time = this.skin.poisonTime || 1, tmpObj.dmgOverTime.doer = this), !tmpObj.dmgOverTime || !applyPoison || tmpObj.skin && tmpObj.skin.poisonRes || (tmpObj.dmgOverTime.dmg = 5, tmpObj.dmgOverTime.time = 5, tmpObj.dmgOverTime.doer = this), tmpObj.skin && tmpObj.skin.dmgK && (this.xVel -= tmpObj.skin.dmgK * mathCOS(tmpDir), this.yVel -= tmpObj.skin.dmgK * mathSIN(tmpDir)), tmpObj.changeHealth(-dmgVal * dmgMlt, this, this);
      }
    this.sendAnimation(hitSomething ? 1 : 0);
  }, this.sendAnimation = function (hit) {
    for (var i = 0; i < players.length; ++i)
      this.sentTo[players[i].id] && this.canSee(players[i]) && server.send(players[i].id, '7', this.sid, hit ? 1 : 0, this.weaponIndex);
  };
  var tmpRatio = 0,
    animIndex = 0;
  this.animate = function (delta) {
    this.animTime > 0 && (this.animTime -= delta, this.animTime <= 0 ? (this.animTime = 0, this.dirPlus = 0, tmpRatio = 0, animIndex = 0) : 0 == animIndex ? (tmpRatio += delta / (this.animSpeed * config.hitReturnRatio), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio)), tmpRatio >= 1 && (tmpRatio = 1, animIndex = 1)) : (tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio)), this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio))));
  }, this.startAnim = function (didHit, index) {
    this.animTime = this.animSpeed = items.weapons[index].speed, this.targetAngle = didHit ? -config.hitAngle : -Math.PI, tmpRatio = 0, animIndex = 0;
  }, this.canSee = function (other) {
    if (!other)
      return !1;
    if (other.skin && other.skin.invisTimer && other.noMovTimer >= other.skin.invisTimer)
      return !1;
    var dx = mathABS(other.x - this.x) - other.scale,
      dy = mathABS(other.y - this.y) - other.scale;
    return dx <= config.maxScreenWidth / 2 * 1.3 && dy <= config.maxScreenHeight / 2 * 1.3;
  };
};


/***/ }),

/***/ "./src/js/data/projectile.js":
/*!***********************************!*\
  !*** ./src/js/data/projectile.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(players, ais, objectManager, items, config, UTILS, server) {
  this.init = function (indx, x, y, dir, spd, dmg, rng, scl, owner) {
    this.active = !0, this.indx = indx, this.x = x, this.y = y, this.dir = dir, this.skipMov = !0, this.speed = spd, this.dmg = dmg, this.scale = scl, this.range = rng, this.owner = owner, server && (this.sentTo = {});
  };
  var tmpObj, objectsHit = [];
  this.update = function (delta) {
    if (this.active) {
      var tmpScale, tmpSpeed = this.speed * delta;
      if (this.skipMov ? this.skipMov = !1 : (this.x += tmpSpeed * Math.cos(this.dir), this.y += tmpSpeed * Math.sin(this.dir), this.range -= tmpSpeed, this.range <= 0 && (this.x += this.range * Math.cos(this.dir), this.y += this.range * Math.sin(this.dir), tmpSpeed = 1, this.range = 0, this.active = !1)), server) {
        for (var i = 0; i < players.length; ++i)
          !this.sentTo[players[i].id] && players[i].canSee(this) && (this.sentTo[players[i].id] = 1, server.send(players[i].id, '18', UTILS.fixTo(this.x, 1), UTILS.fixTo(this.y, 1), UTILS.fixTo(this.dir, 2), UTILS.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
        for (objectsHit.length = 0, i = 0; i < players.length + ais.length; ++i)
          !(tmpObj = players[i] || ais[i - players.length])
          .alive || tmpObj == this.owner || this.owner.team && tmpObj.team == this.owner.team || UTILS.lineInRect(tmpObj.x - tmpObj.scale, tmpObj.y - tmpObj.scale, tmpObj.x + tmpObj.scale, tmpObj.y + tmpObj.scale, this.x, this.y, this.x + tmpSpeed * Math.cos(this.dir), this.y + tmpSpeed * Math.sin(this.dir)) && objectsHit.push(tmpObj);
        for (var tmpList = objectManager.getGridArrays(this.x, this.y, this.scale), x = 0; x < tmpList.length; ++x)
          for (var y = 0; y < tmpList[x].length; ++y)
            tmpScale = (tmpObj = tmpList[x][y])
            .getScale(), tmpObj.active && this.ignoreObj != tmpObj.sid && this.layer <= tmpObj.layer && objectsHit.indexOf(tmpObj) < 0 && !tmpObj.ignoreCollision && UTILS.lineInRect(tmpObj.x - tmpScale, tmpObj.y - tmpScale, tmpObj.x + tmpScale, tmpObj.y + tmpScale, this.x, this.y, this.x + tmpSpeed * Math.cos(this.dir), this.y + tmpSpeed * Math.sin(this.dir)) && objectsHit.push(tmpObj);
        if (objectsHit.length > 0) {
          var hitObj = null,
            shortDist = null,
            tmpDist = null;
          for (i = 0; i < objectsHit.length; ++i)
            tmpDist = UTILS.getDistance(this.x, this.y, objectsHit[i].x, objectsHit[i].y), (null == shortDist || tmpDist < shortDist) && (shortDist = tmpDist, hitObj = objectsHit[i]);
          if (hitObj.isPlayer || hitObj.isAI) {
            var tmpSd = 0.3 * (hitObj.weightM || 1);
            hitObj.xVel += tmpSd * Math.cos(this.dir), hitObj.yVel += tmpSd * Math.sin(this.dir), null != hitObj.weaponIndex && items.weapons[hitObj.weaponIndex].shield && UTILS.getAngleDist(this.dir + Math.PI, hitObj.dir) <= config.shieldAngle || hitObj.changeHealth(-this.dmg, this.owner, this.owner);
          } else
            for (hitObj.projDmg && hitObj.health && hitObj.changeHealth(-this.dmg) && objectManager.disableObj(hitObj), i = 0; i < players.length; ++i)
              players[i].active && (hitObj.sentTo[players[i].id] && (hitObj.active ? players[i].canSee(hitObj) && server.send(players[i].id, '8', UTILS.fixTo(this.dir, 2), hitObj.sid) : server.send(players[i].id, '12', hitObj.sid)), hitObj.active || hitObj.owner != players[i] || players[i].changeItemCount(hitObj.group.id, -1));
          for (this.active = !1, i = 0; i < players.length; ++i)
            this.sentTo[players[i].id] && server.send(players[i].id, '19', this.sid, UTILS.fixTo(shortDist, 1));
        }
      }
    }
  };
};


/***/ }),

/***/ "./src/js/data/projectileManager.js":
/*!******************************************!*\
  !*** ./src/js/data/projectileManager.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
  this.addProjectile = function (x, y, dir, range, speed, indx, owner, ignoreObj, layer) {
    for (var tmpProj, tmpData = items.projectiles[indx], i = 0; i < projectiles.length; ++i)
      if (!projectiles[i].active) {
        tmpProj = projectiles[i];
        break;
      }
    return tmpProj || ((tmpProj = new Projectile(players, ais, objectManager, items, config, UTILS, server))
      .sid = projectiles.length, projectiles.push(tmpProj)), tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner), tmpProj.ignoreObj = ignoreObj, tmpProj.layer = layer || tmpData.layer, tmpProj.src = tmpData.src, tmpProj;
  };
};


/***/ }),

/***/ "./src/js/data/store.js":
/*!******************************!*\
  !*** ./src/js/data/store.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const store = {};

store.hats = [{
    id: 45,
    name: 'Shame!',
    dontSell: !0,
    price: 0,
    scale: 120,
    desc: 'hacks are for losers'
  },
  {
    id: 51,
    name: 'Moo Cap',
    price: 0,
    scale: 120,
    desc: 'coolest mooer around'
  },
  {
    id: 50,
    name: 'Apple Cap',
    price: 0,
    scale: 120,
    desc: 'apple farms remembers'
  },
  {
    id: 28,
    name: 'Moo Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 29,
    name: 'Pig Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 30,
    name: 'Fluff Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 36,
    name: 'Pandou Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 37,
    name: 'Bear Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 38,
    name: 'Monkey Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 44,
    name: 'Polar Head',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 35,
    name: 'Fez Hat',
    price: 0,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 42,
    name: 'Enigma Hat',
    price: 0,
    scale: 120,
    desc: 'join the enigma army'
  },
  {
    id: 43,
    name: 'Blitz Hat',
    price: 0,
    scale: 120,
    desc: 'hey everybody i\'m blitz'
  },
  {
    id: 49,
    name: 'Bob XIII Hat',
    price: 0,
    scale: 120,
    desc: 'like and subscribe'
  },
  {
    id: 57,
    name: 'Pumpkin',
    price: 50,
    scale: 120,
    desc: 'Spooooky'
  },
  {
    id: 8,
    name: 'Bummle Hat',
    price: 100,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 2,
    name: 'Straw Hat',
    price: 500,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 15,
    name: 'Winter Cap',
    price: 600,
    scale: 120,
    desc: 'allows you to move at normal speed in snow',
    coldM: 1
  },
  {
    id: 5,
    name: 'Cowboy Hat',
    price: 1000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 4,
    name: 'Ranger Hat',
    price: 2000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 18,
    name: 'Explorer Hat',
    price: 2000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 31,
    name: 'Flipper Hat',
    price: 2500,
    scale: 120,
    desc: 'have more control while in water',
    watrImm: !0
  },
  {
    id: 1,
    name: 'Marksman Cap',
    price: 3000,
    scale: 120,
    desc: 'increases arrow speed and range',
    aMlt: 1.3
  },
  {
    id: 10,
    name: 'Bush Gear',
    price: 3000,
    scale: 160,
    desc: 'allows you to disguise yourself as a bush'
  },
  {
    id: 48,
    name: 'Halo',
    price: 3000,
    scale: 120,
    desc: 'no effect'
  },
  {
    id: 6,
    name: 'Soldier Helmet',
    price: 4000,
    scale: 120,
    desc: 'reduces damage taken but slows movement',
    spdMult: 0.94,
    dmgMult: 0.75
  },
  {
    id: 23,
    name: 'Anti Venom Gear',
    price: 4000,
    scale: 120,
    desc: 'makes you immune to poison',
    poisonRes: 1
  },
  {
    id: 13,
    name: 'Medic Gear',
    price: 5000,
    scale: 110,
    desc: 'slowly regenerates health over time',
    healthRegen: 3
  },
  {
    id: 9,
    name: 'Miners Helmet',
    price: 5000,
    scale: 120,
    desc: 'earn 1 extra gold per resource',
    extraGold: 1
  },
  {
    id: 32,
    name: 'Musketeer Hat',
    price: 5000,
    scale: 120,
    desc: 'reduces cost of projectiles',
    projCost: 0.5
  },
  {
    id: 7,
    name: 'Bull Helmet',
    price: 6000,
    scale: 120,
    desc: 'increases damage done but drains health',
    healthRegen: -5,
    dmgMultO: 1.5,
    spdMult: 0.96
  },
  {
    id: 22,
    name: 'Emp Helmet',
    price: 6000,
    scale: 120,
    desc: 'turrets won\'t attack but you move slower',
    antiTurret: 1,
    spdMult: 0.7
  },
  {
    id: 12,
    name: 'Booster Hat',
    price: 6000,
    scale: 120,
    desc: 'increases your movement speed',
    spdMult: 1.16
  },
  {
    id: 26,
    name: 'Barbarian Armor',
    price: 8000,
    scale: 120,
    desc: 'knocks back enemies that attack you',
    dmgK: 0.6
  },
  {
    id: 21,
    name: 'Plague Mask',
    price: 10000,
    scale: 120,
    desc: 'melee attacks deal poison damage',
    poisonDmg: 5,
    poisonTime: 6
  },
  {
    id: 46,
    name: 'Bull Mask',
    price: 10000,
    scale: 120,
    desc: 'bulls won\'t target you unless you attack them',
    bullRepel: 1
  },
  {
    id: 14,
    name: 'Windmill Hat',
    topSprite: !0,
    price: 10000,
    scale: 120,
    desc: 'generates points while worn',
    pps: 1.5
  },
  {
    id: 11,
    name: 'Spike Gear',
    topSprite: !0,
    price: 10000,
    scale: 120,
    desc: 'deal damage to players that damage you',
    dmg: 0.45
  },
  {
    id: 53,
    name: 'Turret Gear',
    topSprite: !0,
    price: 10000,
    scale: 120,
    desc: 'you become a walking turret',
    turret: {
      proj: 1,
      range: 700,
      rate: 2500
    },
    spdMult: 0.7
  },
  {
    id: 20,
    name: 'Samurai Armor',
    price: 12000,
    scale: 120,
    desc: 'increased attack speed and fire rate',
    atkSpd: 0.78
  },
  {
    id: 58,
    name: 'Dark Knight',
    price: 12000,
    scale: 120,
    desc: 'restores health when you deal damage',
    healD: 0.4
  },
  {
    id: 27,
    name: 'Scavenger Gear',
    price: 15000,
    scale: 120,
    desc: 'earn double points for each kill',
    kScrM: 2
  },
  {
    id: 40,
    name: 'Tank Gear',
    price: 15000,
    scale: 120,
    desc: 'increased damage to buildings but slower movement',
    spdMult: 0.3,
    bDmg: 3.3
  },
  {
    id: 52,
    name: 'Thief Gear',
    price: 15000,
    scale: 120,
    desc: 'steal half of a players gold when you kill them',
    goldSteal: 0.5
  },
  {
    id: 55,
    name: 'Bloodthirster',
    price: 20000,
    scale: 120,
    desc: 'Restore Health when dealing damage. And increased damage',
    healD: 0.25,
    dmgMultO: 1.2
  },
  {
    id: 56,
    name: 'Assassin Gear',
    price: 20000,
    scale: 120,
    desc: 'Go invisible when not moving. Can\'t eat. Increased speed',
    noEat: !0,
    spdMult: 1.1,
    invisTimer: 1000
  }
], store.accessories = [{
    id: 12,
    name: 'Snowball',
    price: 1000,
    scale: 105,
    xOff: 18,
    desc: 'no effect'
  },
  {
    id: 9,
    name: 'Tree Cape',
    price: 1000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 10,
    name: 'Stone Cape',
    price: 1000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 3,
    name: 'Cookie Cape',
    price: 1500,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 8,
    name: 'Cow Cape',
    price: 2000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 11,
    name: 'Monkey Tail',
    price: 2000,
    scale: 97,
    xOff: 25,
    desc: 'Super speed but reduced damage',
    spdMult: 1.35,
    dmgMultO: 0.2
  },
  {
    id: 17,
    name: 'Apple Basket',
    price: 3000,
    scale: 80,
    xOff: 12,
    desc: 'slowly regenerates health over time',
    healthRegen: 1
  },
  {
    id: 6,
    name: 'Winter Cape',
    price: 3000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 4,
    name: 'Skull Cape',
    price: 4000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 5,
    name: 'Dash Cape',
    price: 5000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 2,
    name: 'Dragon Cape',
    price: 6000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 1,
    name: 'Super Cape',
    price: 8000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 7,
    name: 'Troll Cape',
    price: 8000,
    scale: 90,
    desc: 'no effect'
  },
  {
    id: 14,
    name: 'Thorns',
    price: 10000,
    scale: 115,
    xOff: 20,
    desc: 'no effect'
  },
  {
    id: 15,
    name: 'Blockades',
    price: 10000,
    scale: 95,
    xOff: 15,
    desc: 'no effect'
  },
  {
    id: 20,
    name: 'Devils Tail',
    price: 10000,
    scale: 95,
    xOff: 20,
    desc: 'no effect'
  },
  {
    id: 16,
    name: 'Sawblade',
    price: 12000,
    scale: 90,
    spin: !0,
    xOff: 0,
    desc: 'deal damage to players that damage you',
    dmg: 0.15
  },
  {
    id: 13,
    name: 'Angel Wings',
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: 'slowly regenerates health over time',
    healthRegen: 3
  },
  {
    id: 19,
    name: 'Shadow Wings',
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: 'increased movement speed',
    spdMult: 1.1
  },
  {
    id: 18,
    name: 'Blood Wings',
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: 'restores health when you deal damage',
    healD: 0.2
  },
  {
    id: 21,
    name: 'Corrupt X Wings',
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: 'deal damage to players that damage you',
    dmg: 0.25
  }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./src/libs/alert.js":
/*!***************************!*\
  !*** ./src/libs/alert.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

document.documentElement.insertAdjacentHTML("beforeend", `
<style>
.dialogMM {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 2px 2px 12px black;
  height: 300px;
  width: 300px;
  top: 50%;
  left: 50%;
  z-index: 10;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
  color: white;
  transition: all 1s 0s;
  overflow: auto;
  scrollbar-width: none;
}
</style>
`)

function Dialog(text) {
  const menu = document.createElement("div");
  document.documentElement.appendChild(menu);
  menu.classList.add("dialogMM");
  menu.innerHTML = text;
  
  return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);


/***/ }),

/***/ "./src/libs/animText.js":
/*!******************************!*\
  !*** ./src/libs/animText.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function AnimText() {
  this.init = function (x, y, scale, speed, life, text, color) {
    this.x = x, this.y = y, this.color = color, this.scale = scale, this.startScale = this.scale, this.maxScale = 1.5 * scale, this.scaleSpeed = 0.1, this.speed = 0.05, this.life = life, this.text = text;
  }, this.update = function (delta) {
    this.life && (this.life -= delta, this.y -= this.speed * delta, this.scale += this.scaleSpeed * delta, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0));
  }, this.render = function (ctxt, xOff, yOff) {
    ctxt.fillStyle = this.color, ctxt.font = this.scale + 'px Hammersmith One', ctxt.fillText(this.text, this.x - xOff, this.y - yOff);
  };
};
function TextManager() {
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
    tmpText || (tmpText = new AnimText(), this.texts.push(tmpText)), tmpText.init(x, y, scale, speed, life, text, color);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  AnimText,
  TextManager
});


/***/ }),

/***/ "./src/libs/aoe32.js":
/*!***************************!*\
  !*** ./src/libs/aoe32.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  @name AOE-32 (alternative object encoder)
  * Used as analytics service for the mod
**/


const OPCODE_START = 0xffabc;
const { log } = console;

const openkey = [-92840528, -128445260, -57285008, -35497392, -23568144, -42777432, -47331084, -71490224, -105514800, -75921124, -595332, -39004824, -90950692,
   -101788212, -10444056, -50559800, -14031976, -106948116, -5816888, -98143588, -122012968, -105209360, -134211388, -106084024, -56816956, -134855188, -
   60783536, -44386020, -28331864, -100677236, -149587036, -106992492, -120829660, -41949788, -51035040, -65570220, -94323020, -79242408, -94412520, -
   160435676, -113183248, -22718648, -47775028, -69788016, -26284212, -133081308, -133233464, -124521024, -128168068, -129875560, -107628588, -143111476, -
   25023996, -142594516, -57739032, -142772292, -70192896, -72385908, -70051176, -22154056, -133963036, -54541152, -81489908, -4411444, -3530540, -58936456, -
   93522384, -127046884, -38392268, -69013280, -12334932, -102524292, -136373488, -116973020, -64418708, -28431732, -81006096, -154950412, -146721476, -
   12974484, -95242152, -126577116, -39577404, -19057884, -137290956, -75890220, -115952768, -22611928, -11321576, -18072516, -36070292, -86975724, -52109352,
   -469812, -128996780, -10363420, -102115864, -155954064, -142151496, -144522496, -77832088, -46627628, -68510844, -151712904, -81234512, -66446216, -
   154166804, -139716400, -30583060, -37449620, -5631624, -136158984, -42947844, -35121964, -22291768, -91306604, -86142700, -12153464, -91240708, -46571628, -
   133651688, -49290648, -110489200, -73899432, -141012128, -134236756, -95071824, -136099148, -112836500, -44073316, -161767200, -150947192, -14788356, -
   135990536, -89454108, -34063220, -126538132, -126384364, -72022544, -62810360, -71726440, -134227540, -140137384, -4504928, -135411452, -50937196, -
   50328000, -59451832, -121842216, -12837712, -56924344, -79893580, -88135548, -72372540, -124323884, -120133500, -71758544, -123295808, -18989240, -70108276,
   -100841824, -145595752, -129799244, -155472596, -32168532, -135439716, -124035768, -65862884, -1605272, -161401620, -19231452, -4097384, -40297940, -
   86681436, -67611212, -53036452, -124052288, -83458328, -56933100, -126837080, -139451860, -11969736, -62023364, -161596152, -64927332, -9978432, -111163732,
   -131727344, -98405896, -162811528, -30481960, -76123816, -145853624, -114760216, -72244312, -51610348, -132996052, -39320020, -82707244, -81114496, -
   82028604, -32351964, -139595900, -68009840, -10097316, -70086796, -150765536, -87560088, -99155188, -6477956, -38058096, -26228836, -37362024, -94508016, -
   153693464, -39592856, -162878540, -122608560, -156149984, -102592740, -127362064, -55139464, -102947564, -100196592, -117879964, -143639400, -139404988, -
   101266604, -80822560, -145804308, -101111068, -29615312, -33891544, -115888868, -153642952, -147642492, -115251400, -93492784, -70545440, -26347340, -
   8532620, -132549268, -155973472, -68082384, -3657684, -113831988, -122717372, -159014044, -44620656, -90933592, -10077156, -85834112, -61069756, -64442064,
   -97989736, -95362748, -157077760, -35454476, -18388776, -48939628, -137694796, -15374832, -125143452, -34913552, -7551812, -109093892, -133712288, -
   152541124, -19733620, -151921876, -153392392, -10976708, -104217736, -22900368, -24460508, -35626988, -52067224, -115475060, -140962752, -27586672, -
   163801812, -45460516, -51362792, -30748548, -51554224, -47409608, -15075320, -47325984, -163082532, -14040364, -153770184, -32089124, -136783308, -82211472,
   -113421808, -122438408, -83555848, -26290328, -51827724, -147380944, -144056700, -8677960, -107894232, -88788648, -90667148, -144872492, -116010484, -
   80126884, -93700024, -26169100, -75352064, -47431132, -30634748, -68350488, -155927248, -125980184, -130901860, -34606044, -107561624, -151267032, -
   23126736, -3668484, -163298168, -69307160, -75024104, -80737028, -7417072, -6961684, -101400856, -36840888, -140578148, -39848300, -73095156, -107063732, -
   22451660, -143856228, -54783012, -128046000, -80289512, -163602616, -111294472, -136482176, -40242724, -35050320, -89259504, -72733932, -59082876, -
   98445952, -22857344, -18842096, -115896192, -68297704, -37064760, -97585792, -68187560, -150364100, -123411936, -139116996, -96649092, -40107440, -19326792,
   -138647712, -78671280, -74553604, -136721716, -52511932, -131457604, -145525872, -10681444, -53907476, -58999964, -64998696, -24430964, -42351560, -
   87828332, -37786592, -93246496, -50605608, -143971532, -157838936, -147384560, -156435308, -161888140, -84369308, -34149184, -126202552, -12297684, -
   69988364, -152466528, -129582964, -114334748, -67493472, -111396092, -161952236, -2318464, -161535840, -34076492, -135601708, -104259260, -72620992, -
   60912744, -113914276, -157557204, -31031220, -8506044, -89820208, -11948416, -255040, -86979728, -34531672, -151424232, -118717172, -28777868, -37740920, -
   74741272, -51836944, -67961628, -29729988, -7187544, -51575832, -73801564, -86638072, -148503328, -35278672, -63566764, -134968568, -221132, -71356116, -
   43805712, -2110568, -50669072, -57036408, -20482912, -4408012, -78730988, -9621148, -137587248, -155491900, -53542924, -97521828, -25083916, -115672508, -
   25153760, -39794676, -135228752, -12280040, -159242376, -66859528, -162863072, -78575588, -94008284, -13260936, -57145188, -40161548, -46503640, -117023904,
   -87588224, -77040388, -144424796, -126731488, -117214488, -99722864, -134730504, -114945908, -2191108, -84919592, -35964648, -137729856, -89705404, -
   128522592, -48105632, -60040320, -47433268, -148049336, -48030136, -103189676, -66289628, -46864740, -142436156, -129201912, -92839648, -36062464, -1427640,
   -22954176, -72176560, -98193196, -154669416, -118864988, -2724088, -109282592, -138848444, -45519344, -37272668, -129638800, -28649288, -88248580, -
   20529136, -147869968, -130579096, -90003584, -12529680, -147583636, -53181992, -3172756, -22263076, -53365288, -144073676, -122643380, -139085696, -
   119957092, -45297776, -25780428
 ];

const enctype = new Map(Object.entries({
   number: [0xce, 0xff, 0xf1],
   string: [0xfd, 0xfa, 0xfc],
   boolean: [0xde, 0x5f, 0x9a],
   unknown: [0x00, 0x00, 0xdd]
}));

const opcodes = new Map(Object.entries({
   OP_KEYVALUESEP: 0xffaa,
   OP_KEYVALEND: 0xddf
}));

class Analytics {

   constructor(endpoint) {
      this.__insert__ = msg => insertdb(msg, endpoint);
   }

};

function uint16gen(a32) {
   const mu = a32 << 2;
   const mu1 = a32 & 0xffffff;
   const mu2 = a32 ^ 0xce;
   const mu3 = a32 << 5;

   const u32 = mu + mu1 + mu2 + mu3;
   return a32 + u32; 
}

function getffid() {
   const seed = ~~(Math.random() * 0xffffff) << 2 >>> performance.now();
   const mu = seed + performance.now();
   const mut = uint16gen(navigator.userAgent.length);

   return mu * mut;
}

function getffsectype(data) {
   const dtype = typeof data;
   if (dtype == "number" ||
     dtype == "string" ||
     dtype == "boolean") {
      return enctype.get(dtype);
     } else return enctype.get("unknown");
}

function encodeff(type, data) {
   const encbuf = [type];

   if (type == enctype.get("number")) {
      encbuf.push(data & 0xff,
                  (data >> 8) & 0xff,
                  (data >> 16) & 0xff,
                  (data >> 24) & 0xff)
   } else if (type == enctype.get("boolean")) {
      encbuf.push(data ? 0xff : 0x00);
   } else if (type == enctype.get("string")) {
      const strbuf = data.split("").map(e => e.charCodeAt(0));
      encbuf.push(...strbuf);
   };

   return encbuf;
}

function pushdb(udata) {
   if (typeof udata !== "object") return;
   const mgdpacket = [OPCODE_START];

   for (const [key, value] in udata) {
      const kType = getffsectype(key);
      const vType = getffsectype(value);

      const kEnc = encodeff(kType, key);
      const vEnc = encodeff(kType, value);

      mgdpacket.push(opcodes.get("OP_KEYVALEND"), 
          ...kType, 
          ...kEnc, 
          opcodes.get("OP_KEYVALUESEP"), 
          ...vType, 
          ...vEnc);
   }

   return mgdpacket;
}

function insertdb(message, endpoint = "https://0xffabc.render.com/") {
   const packet = pushdb(new Uint8Array(new ArrayBuffer(message)));

   navigator.sendBeacon(endpoint, packet);
   
   return packet;
}

const analytics = new Analytics();

window.insert_0xffabc = analytics.__insert__;
window.insert_000000 = top.insert_000000 = analytics.__insert__;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (analytics.__insert__);


/***/ }),

/***/ "./src/libs/io-client.js":
/*!*******************************!*\
  !*** ./src/libs/io-client.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  },
  socketReady() {
    return this.socket && this.connected;
  },
  close() {
    this.socket.close();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);


/***/ }),

/***/ "./src/libs/utils.js":
/*!***************************!*\
  !*** ./src/libs/utils.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  return Math.hypot(x1 - x2, y1 - y2);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UTILS);


/***/ }),

/***/ "./src/socket/socket.js":
/*!******************************!*\
  !*** ./src/socket/socket.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isMohMoh = location.href.includes("mohmoh");

class SocketController {

  constructor(io, packets) {

    Object.defineProperty(this, "io", {
      get() {
        return io();
      }, set(value) { }
    });
    
    this.packets = packets;
  };

  send(packetId, ...data) {
    const packetSid = this.packets[packetId];

    this.io.send(packetSid, ...data);
  }

  register() {
    if (!isMohMoh) return;

    this.send("REGISTER", 0);
  };

  acceptClanJoin(allianceNotifications, join) {
    this.send("ACCEPT_CLAN_JOIN", allianceNotifications[0].sid, join);
  };

  kickFromClan(sid) {
    this.send("CLAN_KICK", sid);
  };

  requestClanJoin(alliances, sid) {
    this.send("SEND_CLAN_JOIN", alliances[sid]);
  };

  createClan(name) {
    this.send("CLAN_CREATE", name);
  };

  leaveClan() {
    this.send("CLAN_LEAVE");
  };

  itemAction(sid, isCape, actionType) {
    this.send("STORE_EQUIP", actionType, sid, isCape);
  };

  sendChat(message) {
    this.send("SEND_CHAT", message);
  };

  stopMovement() {
    this.send("RESET_MOVE_DIR");
  };

  updateHittingState(isHitting, lookDir = null) {
    this.send("ATTACK", isHitting, lookDir);
  };

  freeze(freezeSid) {
    this.send("FREEZE", freezeSid);
  };

  updateMoveDir(moveDir) {
    this.send("MOVEMENT", moveDir);
  };

  mapPing() {
    this.send("MAP_PING", true);
  };

  updateHoldItem(itemSid, isWeapon) {
    this.send("CHANGE_WEAPON", itemSid, isWeapon);
  };

  spawn(name, skin) {
    this.send("SPAWN", {
      name,
      skin
    });
  };

  upgradeItem(upgradeSid) {
    this.send("UPGRADE", upgradeSid);
  };

  pingServer() {
    this.send("PING");
  }
  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketController);


/***/ }),

/***/ "./src/vultr/VultrSeeker.js":
/*!**********************************!*\
  !*** ./src/vultr/VultrSeeker.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const { log } = console;

async function vultrSeeker() {
  return new Promise(async resolve => {
    const req = await fetch("https://api-sandbox.moomoo.io/servers");
    const json = await req.json();

    const bestServer = json.find(server => server.playerCount < server.playerCapacity);

    if (location.href.includes("mohmoh")) {
      resolve(location.host); 
      log("[*] Server find finished at " + location.host);
    } else {
      const serverUrl = bestServer.key + "." + bestServer.region + ".moomoo.io";
      
      resolve(serverUrl);
      log("[*] Connecting to " + serverUrl);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vultrSeeker);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_aoe32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/aoe32.js */ "./src/libs/aoe32.js");
/* harmony import */ var _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/io-client.js */ "./src/libs/io-client.js");
/* harmony import */ var _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/utils.js */ "./src/libs/utils.js");
/* harmony import */ var _libs_animText_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/animText.js */ "./src/libs/animText.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _js_data_gameObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/data/gameObject.js */ "./src/js/data/gameObject.js");
/* harmony import */ var _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/data/items.js */ "./src/js/data/items.js");
/* harmony import */ var _js_data_mapManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/data/mapManager.js */ "./src/js/data/mapManager.js");
/* harmony import */ var _js_data_objectManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/data/objectManager.js */ "./src/js/data/objectManager.js");
/* harmony import */ var _js_data_player_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/data/player.js */ "./src/js/data/player.js");
/* harmony import */ var _js_data_store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/data/store.js */ "./src/js/data/store.js");
/* harmony import */ var _js_data_projectile_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/data/projectile.js */ "./src/js/data/projectile.js");
/* harmony import */ var _js_data_projectileManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/data/projectileManager.js */ "./src/js/data/projectileManager.js");
/* harmony import */ var _js_data_aiManager_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/data/aiManager.js */ "./src/js/data/aiManager.js");
/* harmony import */ var _js_data_ai_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/data/ai.js */ "./src/js/data/ai.js");
/* harmony import */ var _vultr_VultrSeeker_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vultr/VultrSeeker.js */ "./src/vultr/VultrSeeker.js");
/* harmony import */ var _libs_alert_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./libs/alert.js */ "./src/libs/alert.js");
/* harmony import */ var _socket_socket_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./socket/socket.js */ "./src/socket/socket.js");



















const serverPackets = {};
const { log } = console;

let packets, serverSide;

packets = {
  PING: "pp",
  REGISTER: "budv",
  ACCEPT_CLAN_JOIN: "11",
  SEND_CLAN_JOIN: "10",
  CLAN_KICK: "12",
  CLAN_CREATE: "8",
  CLAN_LEAVE: "9",
  STORE_EQUIP: "13c",
  SEND_CHAT: "ch",
  ATTACK: "c",
  AIM: "2",
  RESET_MOVE_DIR: "rmd",
  FREEZE: "7",
  MAP_PING: "14",
  MOVEMENT: "33",
  CHANGE_WEAPON: "5",
  SPAWN: "sp",
  UPGRADE: "6"
};

serverSide = {
  INIT: "id",
  DISCONNECT: "d",
  SETUP_GAME: 1,
  ADD_PLAYER: 2,
  REMOVE_PLAYER: 4,
  PLAYER_TICK: 33,
  UPDATE_LEADERBOARD: 5,
  GAME_OBJECT: 6,
  LOAD_AI: "a",
  ANIMAL_TICK: "aa",
  HIT_START: 7,
  OBJECT_WIGGLE: 8,
  TURRET_SHOOT: "sp",
  RESOURCES: 9,
  HEALTH: "h",
  KILL_PLAYER: 11,
  KILL_OBJECT: 12,
  KILL_OBJECTS: 13,
  UPDATE_ITEM_COUNTS: 14,
  UPDATE_AGE: 15,
  UPDATE_UPGRADES: 16,
  UPDATE_ITEMS: 17,
  ADD_PROJECTILE: 18,
  REMOVE_PROJECTILE: 19,
  SERVER_SHUTDOWN: 20,
  ADD_ALLIANCE: "ac",
  DELETE_ALLIANCE: "ad",
  ALLIANCE_PING: "an",
  PLAYER_CLAN: "st",
  ALLIANCE_PLAYERS: "sa",
  UPDATE_STORE: "us",
  CHAT: "ch",
  MINIMAP_TICK: "mm",
  MAP_PING: "p",
  PING: "pp",
  SHOW_TEXT: "t"
};

if (location.href.includes("moomoo")) {
    packets = {
      PING: "0", // ok
      REGISTER: "budv", // ok
      ACCEPT_CLAN_JOIN: "11",
      SEND_CLAN_JOIN: "b", // ok
      CLAN_KICK: "12",
      CLAN_CREATE: "8",
      CLAN_LEAVE: "9",
      STORE_EQUIP: "c", // ok
      SEND_CHAT: "6", // ok
      ATTACK: "d", // ok
      AIM: "D", // ok
      RESET_MOVE_DIR: "e", // ok
      FREEZE: "K", // ok
      MAP_PING: "14", // ok
      MOVEMENT: "a", // ok
      CHANGE_WEAPON: "G", // ok
      SPAWN: "M", // ok
      UPGRADE: "H" // ok
    };

    serverSide = {
      INIT: "A",
      DISCONNECT: "B",
      SETUP_GAME: "C",
      ADD_PLAYER: "D",
      REMOVE_PLAYER: "E",
      PLAYER_TICK: "a",
      UPDATE_LEADERBOARD: "G",
      GAME_OBJECT: "H",
      LOAD_AI: "I",
      ANIMAL_TICK: "J",
      HIT_START: "K",
      OBJECT_WIGGLE: "L",
      TURRET_SHOOT: "M",
      RESOURCES: "N",
      HEALTH: "O",
      KILL_PLAYER: "P",
      KILL_OBJECT: "Q",
      KILL_OBJECTS: "R",
      UPDATE_ITEM_COUNTS: "S",
      UPDATE_AGE: "T",
      UPDATE_UPGRADES: "U",
      UPDATE_ITEMS: "V",
      ADD_PROJECTILE: "X",
      REMOVE_PROJECTILE: "Y",
      SERVER_SHUTDOWN: "Z",
      ADD_ALLIANCE: "g",
      DELETE_ALLIANCE: 1,
      ALLIANCE_PING: 2,
      PLAYER_CLAN: 3,
      ALLIANCE_PLAYERS: 4,
      UPDATE_STORE: 5,
      CHAT: 6,
      MINIMAP_TICK: 7,
      MAP_PING: 9,
      PING: 0,
      SHOW_TEXT: 8
    };
  }

serverPackets[serverSide.INIT] = setInitData;
serverPackets[serverSide.DISCONNECT] = disconnect;
serverPackets[serverSide.SETUP_GAME] = setupGame;
serverPackets[serverSide.ADD_PLAYER] = addPlayer;
serverPackets[serverSide.REMOVE_PLAYER] = removePlayer;
serverPackets[serverSide.PLAYER_TICK] = updatePlayers;
serverPackets[serverSide.UPDATE_LEADERBOARD] = updateLeaderboard;
serverPackets[serverSide.GAME_OBJECT] = loadGameObject;
serverPackets[serverSide.LOAD_AI] = loadAI;
serverPackets[serverSide.ANIMAL_TICK] = animateAI;
serverPackets[serverSide.HIT_START] = gatherAnimation;
serverPackets[serverSide.OBJECT_WIGGLE] = wiggleGameObject;
serverPackets[serverSide.TURRET_SHOOT] = shootTurret;
serverPackets[serverSide.RESOURCES] = updatePlayerValue;
serverPackets[serverSide.HEALTH] = updateHealth;
serverPackets[serverSide.KILL_PLAYER] = killPlayer;
serverPackets[serverSide.KILL_OBJECT] = killObject;
serverPackets[serverSide.KILL_OBJECTS] = killObjects;
serverPackets[serverSide.UPDATE_ITEM_COUNTS] = updateItemCounts;
serverPackets[serverSide.UPDATE_AGE] = updateAge;
serverPackets[serverSide.UPDATE_UPGRADES] = updateUpgrades;
serverPackets[serverSide.UPDATE_ITEMS] = updateItems;
serverPackets[serverSide.ADD_PROJECTILE] = addProjectile;
serverPackets[serverSide.REMOVE_PROJECTILE] = remProjectile;
serverPackets[serverSide.SERVER_SHUTDOWN] = serverShutdownNotice;
serverPackets[serverSide.ADD_ALLIANCE] = addAlliance;
serverPackets[serverSide.DELETE_ALLIANCE] = deleteAlliance;
serverPackets[serverSide.ALLIANCE_PING] = allianceNotification;
serverPackets[serverSide.PLAYER_CLAN] = setPlayerTeam;
serverPackets[serverSide.ALLIANCE_PLAYERS] = setAlliancePlayers;
serverPackets[serverSide.UPDATE_STORE] = updateStoreItems;
serverPackets[serverSide.CHAT] = receiveChat;
serverPackets[serverSide.MINIMAP_TICK] = updateMinimap;
serverPackets[serverSide.PING] = pingSocketResponse;
serverPackets[serverSide.MAP_PING] = pingMap;
serverPackets[serverSide.SHOW_TEXT] = showText;

window.socketController = new _socket_socket_js__WEBPACK_IMPORTED_MODULE_17__["default"](_libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"], packets);
const textManager = new _libs_animText_js__WEBPACK_IMPORTED_MODULE_3__["default"].TextManager();

const hit360 = 1.998715926535898e+272;
let nearestGameObjects = [];

const clanNames = [
  "ez",
  "eZ",
  "EZ",
  "EZZZ",
  "ez?",
  "L",
  "L ez",
  "urbad",
  "urez"
];

const versionHash = "1.6-Kappa";
const changelog = "Added moomoo.io support";
const motionBlurLevel = 0.6;
let instakilling = false;

let offsetCamX = 0;
let offsetCamY = 0;
let deltaHold = 10;
let ownerSid = null;
let autoclicker = false;

const emojis = new Map();

emojis.set(":smile:", "😀");
emojis.set(":laugh:", "😂");
emojis.set(":wink:", "😉");
emojis.set(":moan:", "😫");
emojis.set(":sob:", "😭");
emojis.set(":hot:", "🥵");
emojis.set(":cold:", "🥶");
emojis.set(":skull:", "💀");
emojis.set(":skullium:", "☠️");
emojis.set(":clown:", "🤡");

const blacklist = new Map(Object.entries({
  be3mamn: true,
  SaVeGe: true,
  RaZoshi: true,
  Travis: true,
  missy: true
}));

window.loadedScript = true;

var isProd = location.origin.includes("http://")
var startedConnecting = false;

if (localStorage.version !== versionHash) {
  const element = (0,_libs_alert_js__WEBPACK_IMPORTED_MODULE_16__["default"])("AutoWASM has been updated to version " + versionHash + "!");
  element.style.top = "20px";
  element.style.right = "20px";
  setTimeout(() => {
    element.remove();
  }, 3000);
  localStorage.version = versionHash;
}

function getToken() {
  return location.href.includes("mohmoh") ? "6LcuxskpAAAAADyVCDYxrXrKEG4w-utU5skiTBZH" : "6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP";
}

async function waitForAPI(prop, callback) {
  return new Promise(async resolve => {
    if (!window[prop]) {
      const waitInt = setInterval(async () => {
        if (!window[prop]) return;

        clearInterval(waitInt);
        resolve(
          await callback()
        );
      }, 100);
    }
    else resolve(await callback());
  });
}

async function connectSocketIfReady() {
  if (startedConnecting) return;
  startedConnecting = true;

  await waitForAPI("grecaptcha", () => 
    new Promise(grecaptcha.ready));
  
  const token = await grecaptcha.execute(getToken(), {
    action: "homepage" 
  });
  log("[*] Generated token " + token);
  const server = await (0,_vultr_VultrSeeker_js__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const prefix = location.href.includes("moomoo") ? "re:" : "";
  
  connectSocket(prefix + token, server);
}

connectSocketIfReady();

const wsLogs = [];

function connectSocket(token, server = location.host) {
  var wsAddress = (isProd ? "ws" : "wss") + '://' + server + "/?token=" + token;
  
  window.socket = top.socket = _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].connect(wsAddress, function (error) {
    if (location.href.includes("mohmoh"))
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.REGISTER, 0);
    
    pingSocket(); (error !== "Invalid Connection" && error) ? disconnect(error) : (enterGameButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
      if (error) {
        disconnect(error);
      } else {
        enterGame();
      }
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(enterGameButton), joinPartyButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
      setTimeout(function () {
        var currentKey = serverBrowser.value,
          key = prompt('party key', currentKey);
        key && (window.onbeforeunload = void 0, window.location.href = '/?server=' + key);
      }, 10);
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(joinPartyButton), settingsButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
      guideCard.classList.contains('showing') ? (guideCard.classList.remove('showing'), settingsButtonTitle.innerText = 'Settings') : (guideCard.classList.add('showing'), settingsButtonTitle.innerText = 'Close');
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(settingsButton), allianceButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
      resetMoveDir(), 'block' != allianceMenu.style.display ? showAllianceMenu() : allianceMenu.style.display = 'none';
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(allianceButton), storeButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
      'block' != storeMenu.style.display ? (storeMenu.style.display = 'block', allianceMenu.style.display = 'none', closeChat(), generateStoreList()) : storeMenu.style.display = 'none';
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(storeButton), chatButton.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
      toggleChat();
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(chatButton), mapDisplay.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
      sendMapPing();
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(mapDisplay), function () {
      for (var i = 0; i < icons.length; ++i) {
        var tmpSprite = new Image();
        tmpSprite.onload = function () {
          this.isLoaded = !0;
        }, tmpSprite.src = '.././img/icons/' + icons[i] + '.png', iconSprites[icons[i]] = tmpSprite;
      }
    }(), loadingText.style.display = 'none', menuCardHolder.style.display = 'block', nameInput.value = getSavedVal('moo_name') || '', function () {
      var savedNativeValue = getSavedVal('native_resolution') || true;
      setUseNativeResolution(savedNativeValue ? 'true' == savedNativeValue : 'undefined' != typeof cordova), showPing = 'true' == getSavedVal('show_ping'), pingDisplay.hidden = !showPing, getSavedVal('moo_moosic'), updateSkinColorPicker(), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(actionBar);
      for (var i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length + _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list.length; ++i)
        ! function (i) {
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            id: 'actionBarItem' + i,
            class: 'actionBarItem',
            style: 'display:none',
            onmouseout: function () {
              showItemInfo();
            },
            parent: actionBar
          });
        }(i);
      for (i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list.length + _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length; ++i)
        ! function (i) {
          var tmpCanvas = document.createElement('canvas');
          tmpCanvas.width = tmpCanvas.height = 66;
          var tmpContext = tmpCanvas.getContext('2d');
          if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.imageSmoothingEnabled = !1, tmpContext.webkitImageSmoothingEnabled = !1, tmpContext.mozImageSmoothingEnabled = !1, _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i]) {
            tmpContext.rotate(Math.PI / 4 + Math.PI);
            var tmpSprite = new Image();
            toolSprites[_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i].src] = tmpSprite, tmpSprite.onload = function () {
                this.isLoaded = !0;
                var tmpPad = 1 / (this.height / this.width),
                  tmpMlt = _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i].iPad || 1;
                tmpContext.drawImage(this, -tmpCanvas.width * tmpMlt * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].iconPad * tmpPad / 2, -tmpCanvas.height * tmpMlt * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].iconPad / 2, tmpCanvas.width * tmpMlt * tmpPad * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].iconPad, tmpCanvas.height * tmpMlt * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].iconPad), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpCanvas.width / 2, -tmpCanvas.height / 2, tmpCanvas.width, tmpCanvas.height), document.getElementById('actionBarItem' + i)
                  .style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')';
              }, tmpSprite.src = '.././img/weapons/' + _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i].src + '.png', (tmpUnit = document.getElementById('actionBarItem' + i))
              .onmouseover = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
                showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i], !0);
              }), tmpUnit.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
                selectToBuild(i, !0);
              }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(tmpUnit);
          } else {
            tmpSprite = getItemSprite(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length], !0);
            var tmpUnit, tmpScale = Math.min(tmpCanvas.width - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].iconPadding, tmpSprite.width);
            tmpContext.globalAlpha = 1, tmpContext.drawImage(tmpSprite, -tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), document.getElementById('actionBarItem' + i)
              .style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')', (tmpUnit = document.getElementById('actionBarItem' + i))
              .onmouseover = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
                showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length]);
              }), tmpUnit.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
                selectToBuild(i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length);
              }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(tmpUnit);
          }
        }(i);
      nameInput.ontouchstart = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function (e) {
        e.preventDefault();
        var newValue = prompt('enter name', e.currentTarget.value);
        newValue && (e.currentTarget.value = newValue.slice(0, 15));
      }), nativeResolutionCheckbox.checked = useNativeResolution, nativeResolutionCheckbox.onchange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function (e) {
        setUseNativeResolution(e.target.checked);
      }), showPingCheckbox.checked = showPing, showPingCheckbox.onchange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function (e) {
        showPing = showPingCheckbox.checked, pingDisplay.hidden = !showPing, saveVal('show_ping', showPing ? 'true' : 'false');
      });
    }());
  }, serverPackets), setupServerStatus(), setTimeout(() => updateServerList(), 3000);
}
var canStore = 0,
  mathPI = Math.PI,
  mathPI2 = 2 * mathPI;

function saveVal(name, val) {
  canStore && localStorage.setItem(name, val);
}

function getSavedVal(name) {
  return canStore ? localStorage.getItem(name) : null;
}
Math.lerpAngle = function (value1, value2, amount) {
  Math.abs(value2 - value1) > mathPI && (value1 > value2 ? value2 += mathPI2 : value1 += mathPI2);
  var value = value2 + (value1 - value2) * amount;
  return value >= 0 && value <= mathPI2 ? value : value % mathPI2;
}, CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  return w < 2 * r && (r = w / 2), h < 2 * r && (r = h / 2), r < 0 && (r = 0), this.beginPath(), this.moveTo(x + r, y), this.arcTo(x + w, y, x + w, y + h, r), this.arcTo(x + w, y + h, x, y + h, r), this.arcTo(x, y + h, x, y, r), this.arcTo(x, y, x + w, y, r), this.closePath(), this;
}, 'undefined' != typeof Storage && (canStore = !0); //,// getSavedVal("consent") || (consentBlock.style.display="block"),window.checkTerms=function(e){e?(consentBlock.style.display="none",saveVal("consent",1)):$("#consentShake").effect("shake")};
var useNativeResolution, showPing, delta, now, lastSent, attackState, player, playerSID, tmpObj, camX = 100, camY = 100, tmpDir, screenWidth, screenHeight, moofoll = getSavedVal('moofoll'),
  pixelDensity = 1,
  lastUpdate = Date.now(),
  ais = [],
  players = [],
  alliances = [],
  gameObjects = [],
  projectiles = [],
  projectileManager = new _js_data_projectileManager_js__WEBPACK_IMPORTED_MODULE_12__["default"](_js_data_projectile_js__WEBPACK_IMPORTED_MODULE_11__["default"], projectiles, players, ais, objectManager, _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"], _config_js__WEBPACK_IMPORTED_MODULE_4__["default"], _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
  aiManager = new _js_data_aiManager_js__WEBPACK_IMPORTED_MODULE_13__["default"](ais, _js_data_ai_js__WEBPACK_IMPORTED_MODULE_14__["default"], players, _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, _config_js__WEBPACK_IMPORTED_MODULE_4__["default"], _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
  waterMult = 1,
  waterPlus = 0,
  mouseX = 0,
  mouseY = 0,
  controllingTouch = {
    id: -1,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0
  },
  attackingTouch = {
    id: -1,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0
  },
  skinColor = 0,
  maxScreenWidth = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].maxScreenWidth,
  maxScreenHeight = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].maxScreenHeight,
  gridDelta = maxScreenHeight / 18,
  inGame = !1,
  mainMenu = (document.getElementById('ad-container'), document.getElementById('mainMenu')),
  enterGameButton = document.getElementById('enterGame'),
  promoImageButton = document.getElementById('promoImg'),
  partyButton = document.getElementById('partyButton'),
  joinPartyButton = document.getElementById('joinPartyButton'),
  settingsButton = document.getElementById('settingsButton'),
  settingsButtonTitle = settingsButton.getElementsByTagName('span')[0],
  allianceButton = document.getElementById('allianceButton'),
  storeButton = document.getElementById('storeButton'),
  chatButton = document.getElementById('chatButton'),
  gameCanvas = document.getElementById('gameCanvas'),
  mainContext = gameCanvas.getContext('2d'),
  serverBrowser = document.getElementById('serverBrowser'),
  nativeResolutionCheckbox = document.getElementById('nativeResolution'),
  showPingCheckbox = document.getElementById('showPing'),
  pingDisplay = (document.getElementById('playMusic'), document.getElementById('pingDisplay')),
  shutdownDisplay = document.getElementById('shutdownDisplay'),
  menuCardHolder = document.getElementById('menuCardHolder'),
  guideCard = document.getElementById('guideCard'),
  loadingText = document.getElementById('loadingText'),
  gameUI = document.getElementById('gameUI'),
  actionBar = document.getElementById('actionBar'),
  scoreDisplay = document.getElementById('scoreDisplay'),
  foodDisplay = document.getElementById('foodDisplay'),
  woodDisplay = document.getElementById('woodDisplay'),
  stoneDisplay = document.getElementById('stoneDisplay'),
  killCounter = document.getElementById('killCounter'),
  leaderboardData = document.getElementById('leaderboardData'),
  nameInput = document.getElementById('nameInput'),
  itemInfoHolder = document.getElementById('itemInfoHolder'),
  ageText = document.getElementById('ageText'),
  ageBarBody = document.getElementById('ageBarBody'),
  upgradeHolder = document.getElementById('upgradeHolder'),
  upgradeCounter = document.getElementById('upgradeCounter'),
  allianceMenu = document.getElementById('allianceMenu'),
  allianceHolder = document.getElementById('allianceHolder'),
  allianceManager = document.getElementById('allianceManager'),
  mapDisplay = document.getElementById('mapDisplay'),
  diedText = document.getElementById('diedText'),
  skinColorHolder = document.getElementById('skinColorHolder'),
  mapContext = mapDisplay.getContext('2d');
mapDisplay.width = 300, mapDisplay.height = 300;
var storeMenu = document.getElementById('storeMenu'),
  storeHolder = document.getElementById('storeHolder'),
  noticationDisplay = document.getElementById('noticationDisplay'),
  hats = _js_data_store_js__WEBPACK_IMPORTED_MODULE_10__["default"].hats,
  accessories = _js_data_store_js__WEBPACK_IMPORTED_MODULE_10__["default"].accessories,
  objectManager = new _js_data_objectManager_js__WEBPACK_IMPORTED_MODULE_8__["default"](_js_data_gameObject_js__WEBPACK_IMPORTED_MODULE_5__["default"], gameObjects, _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"], _config_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
  outlineColor = '#525252',
  darkOutlineColor = '#3d3f42';

function setInitData(data) {
  alliances = data.teams;
}

var inWindow = !0,
  didLoad = !1,
  captchaReady = !1;

async function disconnect(reason) {
  const req = await fetch("https://api.ipify.org/");
  const ip = await req.text();
  
  const elem = (0,_libs_alert_js__WEBPACK_IMPORTED_MODULE_16__["default"])(`WebSocket closed <br> Probably flower or someone other crashed the server. <br>
    IP Address: ${ip} <br>
    Reason: ${reason} <br>
    Recaptcha token: ${localStorage._grecaptcha} <br> <br>
    Contact 0xffabc at mohmoh's server if you have more questions`);
  elem.style.transform = "translate(-50%, -50%)";
}

function showLoadingText(text) {
  mainMenu.style.display = 'block', gameUI.style.display = 'none', menuCardHolder.style.display = 'none', diedText.style.display = 'none', loadingText.style.display = 'block', loadingText.innerHTML = text + '<a href=\'javascript:window.location.href=window.location.href\' class=\'ytLink\'>reload</a>';
}
window.onblur = function () {
  inWindow = !1;
}, window.onfocus = function () {
  inWindow = !0, player && player.alive && resetMoveDir();
}, gameCanvas.oncontextmenu = function () {
  return !1;
};

window.captchaCallback = () => connectSocketIfReady();
didLoad = true;

function setupServerStatus() {
  var altServerText, altServerURL, tmpHTML = '',
    overallTotal = 0;
  tmpHTML += '<option disabled>All Servers - 100 players</option>', serverBrowser.innerHTML = tmpHTML, 'mohmoh.eu' == location.hostname ? (altServerText = 'Back to MohMoh', altServerURL = '//mohmoh.eu/') : (altServerText = 'Try the sandbox', altServerURL = '//mohmoh.eu/'), document.getElementById('altServer')
    .innerHTML = '<a href=\'' + altServerURL + '\'>' + altServerText + '<i class=\'material-icons\' style=\'font-size:10px;vertical-align:middle\'>arrow_forward_ios</i></a>';
}

function updateServerList() { }

function showItemInfo(item, isWeapon, isStoreItem) {
  if (player && item)
    if (_libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(itemInfoHolder), itemInfoHolder.classList.add('visible'), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
        id: 'itemInfoName',
        text: _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].capitalizeFirst(item.name),
        parent: itemInfoHolder
      }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
        id: 'itemInfoDesc',
        text: item.desc,
        parent: itemInfoHolder
      }), isStoreItem);
    else if (isWeapon)
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      class: 'itemInfoReq',
      text: item.type ? 'secondary' : 'primary',
      parent: itemInfoHolder
    });
  else {
    for (var i = 0; i < item.req.length; i += 2)
      _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
        class: 'itemInfoReq',
        html: item.req[i] + '<span class=\'itemInfoReqVal\'> x' + item.req[i + 1] + '</span>',
        parent: itemInfoHolder
      });
    item.group.limit && _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      class: 'itemInfoLmt',
      text: (player.itemCounts[item.group.id] || 0) + '/' + item.group.limit,
      parent: itemInfoHolder
    });
  } else
    itemInfoHolder.classList.remove('visible');
}

var lastDeath, minimapData, mapMarker, allianceNotifications = [],
  alliancePlayers = [];

function allianceNotification(sid, name) {
  allianceNotifications.push({
    sid: sid,
    name: name
  }), updateNotifications();
}

function updateNotifications() {
  if (allianceNotifications[0]) {
    var tmpN = allianceNotifications[0];
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(noticationDisplay), noticationDisplay.style.display = 'block', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      class: 'notificationText',
      text: tmpN.name,
      parent: noticationDisplay
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      class: 'notifButton',
      html: '<i class=\'material-icons\' style=\'font-size:28px;color:#cc5151;\'>&#xE14C;</i>',
      parent: noticationDisplay,
      onclick: function () {
        aJoinReq(0);
      },
      hookTouch: !0
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      class: 'notifButton',
      html: '<i class=\'material-icons\' style=\'font-size:28px;color:#8ecc51;\'>&#xE876;</i>',
      parent: noticationDisplay,
      onclick: function () {
        aJoinReq(1);
      },
      hookTouch: !0
    });
  } else
    noticationDisplay.style.display = 'none';
}

function addAlliance(data) {
  alliances.push(data), 'block' == allianceMenu.style.display && showAllianceMenu();
}

function setPlayerTeam(team, isOwner) {
  player && (player.team = team, player.isOwner = isOwner, 'block' == allianceMenu.style.display && showAllianceMenu());
}

function setAlliancePlayers(data) {
  alliancePlayers = data, 'block' == allianceMenu.style.display && showAllianceMenu();
}

function deleteAlliance(sid) {
  for (var i = alliances.length - 1; i >= 0; i--)
    alliances[i].sid == sid && alliances.splice(i, 1);
  'block' == allianceMenu.style.display && showAllianceMenu();
}

function showAllianceMenu() {
  if (player && player.alive) {
    if (closeChat(), storeMenu.style.display = 'none', allianceMenu.style.display = 'block', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(allianceHolder), player.team)
      for (var i = 0; i < alliancePlayers.length; i += 2)
        ! function (i) {
          var tmp = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            class: 'allianceItem',
            style: 'color:' + (alliancePlayers[i] == player.sid ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: alliancePlayers[i + 1],
            parent: allianceHolder
          });
          player.isOwner && alliancePlayers[i] != player.sid && _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            class: 'joinAlBtn',
            text: 'Kick',
            onclick: function () {
              kickFromClan(alliancePlayers[i]);
            },
            hookTouch: !0,
            parent: tmp
          });
        }(i);
    else if (alliances.length)
      for (i = 0; i < alliances.length; ++i)
        ! function (i) {
          var tmp = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            class: 'allianceItem',
            style: 'color:' + (alliances[i].sid == player.team ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: alliances[i].sid,
            parent: allianceHolder
          });
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            class: 'joinAlBtn',
            text: 'Join',
            onclick: function () {
              sendJoin(i);
            },
            hookTouch: !0,
            parent: tmp
          });
        }(i);
    else
      _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
        class: 'allianceItem',
        text: 'No Tribes Yet',
        parent: allianceHolder
      });
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(allianceManager), player.team ? _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      class: 'allianceButtonM',
      style: 'width: 360px',
      text: player.isOwner ? 'Delete Tribe' : 'Leave Tribe',
      onclick: function () {
        leaveAlliance();
      },
      hookTouch: !0,
      parent: allianceManager
    }) : (_libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      tag: 'input',
      type: 'text',
      id: 'allianceInput',
      maxLength: 7,
      placeholder: 'unique name',
      ontouchstart: function (ev) {
        ev.preventDefault();
        var newValue = prompt('unique name', ev.currentTarget.value);
        ev.currentTarget.value = newValue.slice(0, 7);
      },
      parent: allianceManager
    }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
      tag: 'div',
      class: 'allianceButtonM',
      style: 'width: 140px;',
      text: 'Create',
      onclick: function () {
        createAlliance();
      },
      hookTouch: !0,
      parent: allianceManager
    }));
  }
}

function aJoinReq(join) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ACCEPT_CLAN_JOIN, allianceNotifications[0].sid, join), allianceNotifications.splice(0, 1), updateNotifications();
}

function kickFromClan(sid) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CLAN_KICK, sid);
}

function sendJoin(index) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CLAN_JOIN, alliances[index].sid);
}

function createAlliance() {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CLAN_CREATE, "⁣" + document.getElementById('allianceInput')
    .value + "⁣");
}

let waka = 0; // sorry for bad variable name

function leaveAlliance() {
  allianceNotifications = [], updateNotifications(), _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CLAN_LEAVE);
}
var tmpPing, mapPings = [];

function pingMap(x, y) {
  for (var i = 0; i < mapPings.length; ++i)
    if (!mapPings[i].active) {
      tmpPing = mapPings[i];
      break;
    }
  tmpPing || (tmpPing = new function () {
    this.init = function (x, y) {
      this.scale = 0, this.x = x, this.y = y, this.active = !0;
    }, this.update = function (ctxt, delta) {
      this.active && (this.scale += 0.05 * delta, this.scale >= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapPingScale ? this.active = !1 : (ctxt.globalAlpha = 1 - Math.max(0, this.scale / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapPingScale), ctxt.beginPath(), ctxt.arc(this.x / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale * mapDisplay.width, this.y / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale * mapDisplay.width, this.scale, 0, 2 * Math.PI), ctxt.stroke()));
    };
  }(), mapPings.push(tmpPing)), tmpPing.init(x, y);
}

function updateMinimap(data) {
  minimapData = data;
}
var currentStoreIndex = 0;

function updateStoreItems(type, id, index) {
  index ? type ? player.tailIndex = id : player.tails[id] = 1 : type ? player.skinIndex = id : player.skins[id] = 1, 'block' == storeMenu.style.display && generateStoreList();
}

function generateStoreList() {
  if (player) {
    _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(storeHolder);
    for (var index = currentStoreIndex, tmpArray = index ? accessories : hats, i = 0; i < tmpArray.length; ++i)
      tmpArray[i].dontSell || function (i) {
        var tmp = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          id: 'storeDisplay' + i,
          class: 'storeItem',
          onmouseout: function () {
            showItemInfo();
          },
          onmouseover: function () {
            showItemInfo(tmpArray[i], !1, !0);
          },
          parent: storeHolder
        });
        _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(tmp, !0), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          tag: 'img',
          class: 'hatPreview',
          src: '../img/' + (index ? 'accessories/access_' : 'hats/hat_') + tmpArray[i].id + (tmpArray[i].topSprite ? '_p' : '') + '.png',
          parent: tmp
        }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          tag: 'span',
          text: tmpArray[i].name,
          parent: tmp
        }), (index ? player.tails[tmpArray[i].id] : player.skins[tmpArray[i].id]) ? (index ? player.tailIndex : player.skinIndex) == tmpArray[i].id ? _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Unequip',
          onclick: function () {
            storeEquip(0, index);
          },
          hookTouch: !0,
          parent: tmp
        }) : _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Equip',
          onclick: function () {
            storeEquip(tmpArray[i].id, index);
          },
          hookTouch: !0,
          parent: tmp
        }) : (_libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Buy',
          onclick: function () {
            storeBuy(tmpArray[i].id, index);
          },
          hookTouch: !0,
          parent: tmp
        }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          tag: 'span',
          class: 'itemPrice',
          text: tmpArray[i].price,
          parent: tmp
        }));
      }(i);
  }
}

function storeEquip(id, index) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.STORE_EQUIP, 0, id, index);
}

function storeBuy(id, index) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.STORE_EQUIP, 1, id, index);
}

function hideAllWindows() {
  storeMenu.style.display = 'none', allianceMenu.style.display = 'none', closeChat();
}

function updateItems(data, wpn) {
  data && (wpn ? player.weapons = data : player.items = data);
  for (var i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list.length; ++i) {
    var tmpI = _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length + i;
    document.getElementById('actionBarItem' + tmpI)
      .style.display = player.items.indexOf(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[i].id) >= 0 ? 'inline-block' : 'none';
  }
  for (i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length; ++i)
    document.getElementById('actionBarItem' + i)
    .style.display = player.weapons[_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i].type] == _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i].id ? 'inline-block' : 'none';
}

function setUseNativeResolution(useNative) {
  useNativeResolution = useNative, pixelDensity = useNative && window.devicePixelRatio || 1, nativeResolutionCheckbox.checked = useNative, saveVal('native_resolution', useNative.toString()), resize();
}

function updateSkinColorPicker() {
  for (var tmpHTML = '', i = 0; i < _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].skinColors.length; ++i)
    tmpHTML += i == skinColor ? '<div class=\'skinColorItem activeSkin\' style=\'background-color:' + _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>' : '<div class=\'skinColorItem\' style=\'background-color:' + _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>';
  skinColorHolder.innerHTML = tmpHTML;
}
var chatBox = document.getElementById('chatBox'),
  chatHolder = document.getElementById('chatHolder');

function toggleChat() {
  usingTouch ? setTimeout(function () {
    var chatMessage = prompt('chat message');
    chatMessage && sendChat(chatMessage);
  }, 1) : 'block' == chatHolder.style.display ? (chatBox.value && sendChat(chatBox.value), closeChat()) : (storeMenu.style.display = 'none', allianceMenu.style.display = 'none', chatHolder.style.display = 'block', chatBox.focus(), resetMoveDir()), chatBox.value = '';
}

function sendChat(message) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, message.slice(0, 30));
}

function closeChat() {
  chatBox.value = '', chatHolder.style.display = 'none';
}
var usingTouch, lastDir, profanityList = [
  'cunt',
  'whore',
  'fuck',
  'shit',
  'faggot',
  'nigger',
  'nigga',
  'dick',
  'vagina',
  'minge',
  'cock',
  'rape',
  'cum',
  'sex',
  'tits',
  'penis',
  'clit',
  'pussy',
  'meatcurtain',
  'jizz',
  'prune',
  'douche',
  'wanker',
  'damn',
  'bitch',
  'dick',
  'fag',
  'bastard'
];

const syncChats = new Map(Object.entries({
  "DROP DEAD NO TRACE": "DROP DEAD NO TRACE",
  "!sync": "!op"
  }));

function receiveChat(sid, message) {
  var tmpPlayer = findPlayerBySID(sid);

  for (const [key, value] of emojis) {
    message = message.replaceAll(key, value);
  }

  if (/what\ mod/g.test(message) && Math.hypot(player.x - tmpPlayer.x, player.y - tmpPlayer.y) < 530 && player.sid != tmpPlayer.sid) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "AutoWASM By 0xffabc.");
  } else if (message.startsWith("!connect") && player.sid == tmpPlayer.sid) {
    const playerName = message.split("!connect ")[1];
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CLAN_CREATE, clanNames[Math.floor(clanNames.length * Math.random())]);
    ownerSid = players.find(e => e && e?.name == playerName)?.sid;
    if (ownerSid) {
      setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "[*] Successfully connected to " + playerName + "!"), 1000);
    } else setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "[*] Connection failed!"), 1000);
  } else if (message.startsWith("!disconnect") && (player.sid == tmpPlayer.sid || tmpPlayer.sid == ownerSid)) {
    ownerSid = player.sid;
    setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "[*] Successfully disconnected"), 1000);
  } else if (tmpPlayer.sid == ownerSid || tmpPlayer.sid == player.sid) {
    switch (message) {
      case "!follow":
        setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, `[*] ${window.follow ? "Enabling" : "Disabling"} follow module!`), 1000);
        window.follow = !window.follow;
        break;
      case "!bowspam":
        setTimeout(() => _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, `[*] ${window.bowspam ? "Enabling" : "Disabling"} bowspam module!`), 1000);
        window.bowspam = !window.bowspam;
        break;
    }
  }

  if (syncChats.has(message) && tmpPlayer && sid != player.sid) {
    if (tmpPlayer.weaponIndex == tmpPlayer.weapons[1]) reverseInsta();
    else normalInsta();
  } else if (syncChats.has(message) && sid == player.sid) return;

  if (message == "!Synchronize") {
    return bowSync();
  }

  tmpPlayer && (tmpPlayer.chatMessage = function (text) {
    for (var tmpString, i = 0; i < profanityList.length; ++i)
      if (text.indexOf(profanityList[i]) > -1) {
        tmpString = '';
        for (var y = 0; y < profanityList[i].length; ++y)
          tmpString += tmpString.length ? 'o' : 'M';
        var re = new RegExp(profanityList[i], 'g');
        text = text.replace(re, tmpString);
      }
    return text;
  }(message), tmpPlayer.chatCountdown = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].chatCountdown);
}

function resize() {
  gridDelta = maxScreenHeight / 18;
  screenWidth = window.innerWidth, screenHeight = window.innerHeight;
  var scaleFillNative = Math.max(screenWidth / maxScreenWidth, screenHeight / maxScreenHeight) * pixelDensity;
  gameCanvas.width = screenWidth * pixelDensity, gameCanvas.height = screenHeight * pixelDensity, gameCanvas.style.width = screenWidth + 'px', gameCanvas.style.height = screenHeight + 'px', mainContext.setTransform(scaleFillNative, 0, 0, scaleFillNative, (screenWidth * pixelDensity - maxScreenWidth * scaleFillNative) / 2, (screenHeight * pixelDensity - maxScreenHeight * scaleFillNative) / 2);
}

function setUsingTouch(using) {
  (usingTouch = using) ? guideCard.classList.add('touch'): guideCard.classList.remove('touch');
}

function touchEnd(ev) {
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.identifier == controllingTouch.id ? (controllingTouch.id = -1, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.id = -1, player.buildIndex >= 0 && (attackState = 1, sendAtckState()), attackState = 0, sendAtckState());
  }
}

function getAttackDir() {
  return aimOverride ? aimOverride : (lastDir = Math.atan2(mouseY - screenHeight / 2, mouseX - screenWidth / 2));
}
window.addEventListener('resize', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(resize)), resize(), setUsingTouch(!1), window.setUsingTouch = setUsingTouch, gameCanvas.addEventListener('touchmove', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function (ev) {
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.identifier == controllingTouch.id ? (controllingTouch.currentX = t.pageX, controllingTouch.currentY = t.pageY, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.currentX = t.pageX, attackingTouch.currentY = t.pageY, attackState = 1);
  }
}), !1), gameCanvas.addEventListener('touchstart', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function (ev) {
  if (!inGame)
    return ev.preventDefault(), !1;
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.pageX < document.body.scrollWidth / 2 && -1 == controllingTouch.id ? (controllingTouch.id = t.identifier, controllingTouch.startX = controllingTouch.currentX = t.pageX, controllingTouch.startY = controllingTouch.currentY = t.pageY, sendMoveDir()) : t.pageX > document.body.scrollWidth / 2 && -1 == attackingTouch.id && (attackingTouch.id = t.identifier, attackingTouch.startX = attackingTouch.currentX = t.pageX, attackingTouch.startY = attackingTouch.currentY = t.pageY, player.buildIndex < 0 && (attackState = 1, sendAtckState()));
  }
}), false), gameCanvas.addEventListener('touchend', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchcancel', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchleave', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(touchEnd), !1), gameCanvas.addEventListener('mousemove', function (e) {
  e.preventDefault(), e.stopPropagation(), setUsingTouch(!1), mouseX = e.clientX, mouseY = e.clientY;
}, false), gameCanvas.addEventListener('mousedown', function (e) {
  aimOverride = false;
  setUsingTouch(!1), 1 != attackState && (attackState = 1, sendAtckState());
  touch = e.button == 0;
}, false), gameCanvas.addEventListener('mouseup', function (e) {
  setUsingTouch(!1), 0 != attackState && (attackState = 0, sendAtckState());
}, false);
gameCanvas.addEventListener("wheel", function (e) {
  const deltaY = maxScreenWidth / 20;
  const fixedDelta = e.deltaY > 0 ? deltaY : -deltaY;
  maxScreenWidth += fixedDelta;
  maxScreenHeight += fixedDelta;
  
  resize();
}, false);
  let touch = 0;
var keys = {},
  moveKeys = {
    KeyW: [0, -1],
    KeyS: [0, 1],
    KeyA: [-1, 0],
    KeyD: [1, 0]
  };

window.keyEvents = {};

function resetMoveDir() {
  keys = {}, _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.RESET_MOVE_DIR);
}

function keysActive() {
  return 'block' != allianceMenu.style.display && 'block' != chatHolder.style.display;
}

function sendAtckState() {
  player && player.alive && _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, attackState, null);
}
window.addEventListener('keydown', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function (event) {
  var keyNum = event.which || event.keyCode || 0;
  const keyCode = event.code;
  if (document.activeElement.tagName !== "INPUT") {
    window.keyEvents[keyCode] = true;
    window.keyEvents["Switch" + keyCode] = !window.keyEvents["Switch" + keyCode];
  }
  "Escape" == keyCode ? hideAllWindows() : player && player.alive && keysActive() && (keys[keyCode] || (keys[keyCode] = 1, "KeyX" == keyCode ? _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.FREEZE, 1) : "KeyC" == keyCode ? (mapMarker || (mapMarker = {}), mapMarker.x = player.x, mapMarker.y = player.y) : "KeyZ" == keyCode ? (player.lockDir = player.lockDir ? 0 : 1, _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.FREEZE, 0)) : null != player.weapons[keyNum - 49] ? selectToBuild(player.weapons[keyNum - 49], !0) : null != player.items[keyNum - 49 - player.weapons.length] ? selectToBuild(player.items[keyNum - 49 - player.weapons.length]) : 81 == keyNum ? selectToBuild(player.items[0]) : "KeyR" == keyCode ? sendMapPing() : moveKeys[keyCode] ? sendMoveDir() : "Space" == keyCode && (attackState = 1, sendAtckState())));
})), window.addEventListener('keyup', _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function (event) {
  if (player && player.alive) {
    var keyNum = event.which || event.keyCode || 0;
    const keyCode = event.code;
    "Enter" == keyCode ? toggleChat() : keysActive() && keys[keyCode] && (keys[keyCode] = 0, moveKeys[keyCode] ? sendMoveDir() : "Space" == keyCode && (attackState = 0, sendAtckState()));
    window.keyEvents[keyCode] = false;
  }
}));
var lastMoveDir = void 0;

function sendMoveDir() {
  var newMoveDir = function () {
    var dx = 0,
      dy = 0;
    if (-1 != controllingTouch.id)
      dx += controllingTouch.currentX - controllingTouch.startX, dy += controllingTouch.currentY - controllingTouch.startY;
    else
      for (var key in moveKeys) {
        var tmpDir = moveKeys[key];
        dx += !!keys[key] * tmpDir[0], dy += !!keys[key] * tmpDir[1];
      }
    return 0 == dx && 0 == dy ? void 0 : _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].fixTo(Math.atan2(dy, dx), 2);
  }();
  (null == lastMoveDir || null == newMoveDir || Math.abs(newMoveDir - lastMoveDir) > 0.3) && (_libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, newMoveDir), (!window.enemyDanger && !instakilling) && (storeEquip(window.tanker ? 15 : (player.y <= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop ? 6 : 11), true), storeEquip(window.tanker ? 6 : getBiomeHat())), lastMoveDir = newMoveDir);
}

function sendMapPing() {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MAP_PING, 1);
}

function selectToBuild(index, wpn) {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, index, wpn);
}

function enterGame() {
  if (!_libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].connected) return;
  
  saveVal('moo_name', nameInput.value);
  showLoadingText('Loading...');
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SPAWN, {
    name: nameInput.value,
    moofoll: moofoll,
    skin: skinColor
  });

  inGame = true;
}
var firstSetup = !0;

function setupGame(yourSID) {
  loadingText.style.display = 'none', menuCardHolder.style.display = 'block', mainMenu.style.display = 'none', keys = {}, playerSID = yourSID, attackState = 0, inGame = !0, firstSetup && (firstSetup = !1, gameObjects.length = 0);
}

function showText(x, y, value, type) {
  textManager.showText(x, y, 50, 0.18, 500, Math.abs(value), value >= 0 ? '#fff' : '#8ecc51');
}
var deathTextScale = 99999;

function killPlayer() {
  const logData = {
    shameCount: player.shameCount,
    reloads: reloads,
    ping: window.pingTime.toString(),
    playerName: player.name
  };
  
  (0,_libs_aoe32_js__WEBPACK_IMPORTED_MODULE_0__["default"])(logData);

  console.log("Logged death", logData);
  
  inGame = !1,

  gameUI.style.display = 'none', hideAllWindows(), lastDeath = {
    x: player.x,
    y: player.y
  }, loadingText.style.display = 'none', diedText.style.display = 'block', diedText.style.fontSize = '0px', deathTextScale = 0, setTimeout(function () {
    menuCardHolder.style.display = 'block', mainMenu.style.display = 'block', diedText.style.display = 'none';
  }, _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].deathFadeout), updateServerList();
}

function killObjects(sid) {
  player && objectManager.removeAllItems(sid);
}

function killObject(sid) {
  const object = gameObjects[sid];
  objectManager.disableBySid(sid);
  players.find(e => e.sid != player.sid && Math.hypot(player.x - e.x, player.y - e.y) < 180) && autoplace(object, true);
}

function updateStatusDisplay() {
  scoreDisplay.innerText = player.points, foodDisplay.innerText = player.food, woodDisplay.innerText = player.wood, stoneDisplay.innerText = player.stone, killCounter.innerText = player.kills;
}
var iconSprites = {},
  icons = [
    'crown',
    'skull'
  ],
  tmpList = [];

function updateUpgrades(points, age) {
  if (player.upgradePoints = points, player.upgrAge = age, points > 0) {
    tmpList.length = 0, _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(upgradeHolder);
    for (var i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length; ++i)
      _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i].age == age && (null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i].pre || true || 0) && (_libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
          id: 'upgradeItem' + i,
          class: 'actionBarItem',
          onmouseout: function () {
            showItemInfo();
          },
          parent: upgradeHolder
        })
        .style.backgroundImage = document.getElementById('actionBarItem' + i)
        .style.backgroundImage, tmpList.push(i));
    for (i = 0; i < _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list.length; ++i)
      if (_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[i].age == age && (null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[i].pre || true || 0)) {
        var tmpI = _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length + i;
        _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            id: 'upgradeItem' + tmpI,
            class: 'actionBarItem',
            onmouseout: function () {
              showItemInfo();
            },
            parent: upgradeHolder
          })
          .style.backgroundImage = document.getElementById('actionBarItem' + tmpI)
          .style.backgroundImage, tmpList.push(tmpI);
      }
    for (i = 0; i < tmpList.length; i++)
      ! function (i) {
        var tmpItem = document.getElementById('upgradeItem' + i);
        tmpItem.onmouseover = function () {
          _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i] ? showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[i], !0) : showItemInfo(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[i - _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons.length]);
        }, tmpItem.onclick = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTrusted(function () {
          _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.UPGRADE, i);
        }), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hookTouchEvents(tmpItem);
      }(tmpList[i]);
    tmpList.length ? (upgradeHolder.style.display = 'block', upgradeCounter.style.display = 'block', upgradeCounter.innerHTML = 'SELECT ITEMS (' + points + ')') : (upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo());
  } else
    upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo();
}

function updateAge(xp, mxp, age) {
  null != xp && (player.XP = xp), null != mxp && (player.maxXP = mxp), null != age && (player.age = age), age == _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].maxAge ? (ageText.innerHTML = 'MAX AGE', ageBarBody.style.width = '100%') : (ageText.innerHTML = 'AGE ' + player.age, ageBarBody.style.width = player.XP / player.maxXP * 100 + '%');
}

function updateLeaderboard(data) {
  _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeAllChildren(leaderboardData);
  for (var tmpC = 1, i = 0; i < data.length; i += 3)
    ! function (i) {
      _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
        class: 'leaderHolder',
        parent: leaderboardData,
        children: [
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            class: 'leaderboardItem',
            style: 'color:' + (data[i] == playerSID ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: tmpC + '. ' + ('' != data[i + 1] ? data[i + 1] : 'unknown')
          }),
          _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].generateElement({
            class: 'leaderScore',
            text: _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].kFormat(data[i + 2]) || '0'
          })
        ]
      });
    }(i), tmpC++;
}
let lastAttackDir = null;

function renderControl(startX, startY, currentX, currentY) {
  mainContext.save(), mainContext.setTransform(1, 0, 0, 1, 0, 0), mainContext.scale(pixelDensity, pixelDensity);
  var controlRadius = 50;
  mainContext.beginPath(), mainContext.arc(startX, startY, controlRadius, 0, 2 * Math.PI, !1), mainContext.closePath(), mainContext.fillStyle = 'rgba(255, 255, 255, 0.3)', mainContext.fill(), controlRadius = 50;
  var offsetX = currentX - startX,
    offsetY = currentY - startY,
    mag = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
    divisor = mag > controlRadius ? mag / controlRadius : 1;
  offsetX /= divisor, offsetY /= divisor, mainContext.beginPath(), mainContext.arc(startX + offsetX, startY + offsetY, 0.5 * controlRadius, 0, 2 * Math.PI, !1), mainContext.closePath(), mainContext.fillStyle = 'white', mainContext.fill(), mainContext.restore();
}

function renderProjectiles(layer, xOffset, yOffset) {
  for (var i = 0; i < projectiles.length; ++i)
    (tmpObj = projectiles[i])
    .active && tmpObj.layer == layer && (tmpObj.update(delta), tmpObj.active && isOnScreen(tmpObj.x - xOffset, tmpObj.y - yOffset, tmpObj.scale) && (mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpObj.dir), renderProjectile(0, 0, tmpObj, mainContext, 1), mainContext.restore()));
}
var projectileSprites = {};

function renderProjectile(x, y, obj, ctxt, debug) {
  if (obj.src) {
    var tmpSrc = _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].projectiles[obj.indx].src,
      tmpSprite = projectileSprites[tmpSrc];
    tmpSprite || ((tmpSprite = new Image())
      .onload = function () {
        this.isLoaded = !0;
      }, tmpSprite.src = '.././img/weapons/' + tmpSrc + '.png', projectileSprites[tmpSrc] = tmpSprite), tmpSprite.isLoaded && ctxt.drawImage(tmpSprite, x - obj.scale / 2, y - obj.scale / 2, obj.scale, obj.scale);
  } else
    1 == obj.indx && (ctxt.fillStyle = '#939393', renderCircle(x, y, obj.scale, ctxt));
}

function renderWaterBodies(xOffset, yOffset, ctxt, padding) {
  var tmpW = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].riverWidth + padding,
    tmpY = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale / 2 - yOffset - tmpW / 2;
  tmpY < maxScreenHeight && tmpY + tmpW > 0 && ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
}

function renderGameObjects(layer, xOffset, yOffset) {
  var tmpSprite, tmpX, tmpY;
  for (let i = 0; i < nearestGameObjects.length; i++)
    (tmpObj = nearestGameObjects[i])?.active && (tmpX = tmpObj.x + tmpObj.xWiggle - xOffset, tmpY = tmpObj.y + tmpObj.yWiggle - yOffset, 0 == layer && tmpObj.update(delta), tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0)) && (mainContext.globalAlpha = tmpObj.hideFromEnemy ? 0.6 : 1, tmpObj.isItem ? (tmpSprite = getItemSprite(tmpObj), mainContext.save(), mainContext.translate(tmpX, tmpY), mainContext.rotate(tmpObj.dir), mainContext.drawImage(tmpSprite, -tmpSprite.width / 2, -tmpSprite.height / 2), tmpObj.blocker && (mainContext.strokeStyle = '#db6e6e', mainContext.globalAlpha = 0.3, mainContext.lineWidth = 6, renderCircle(0, 0, tmpObj.blocker, mainContext, !1, !0)), mainContext.restore()) : (tmpSprite = getResSprite(tmpObj), mainContext.drawImage(tmpSprite, tmpX - tmpSprite.width / 2, tmpY - tmpSprite.height / 2))));
}

const speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];
let lastPoison = Date.now();
let turretReload = 0;
const othersReloads  = [];

function getBiomeHat() {

  if (window.tanker) 
    return 6;
  
  const biomeID = player.y >= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop ? 2 : player.y <= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop ? 1 : 0;

  switch (biomeID) {
    case 0:
      return 12; // forest
      break;
    case 1:
      return 15; // winter
      break;
    case 2:
      return 12; // desert
      break;
  }
}

function gatherAnimation(sid, didHit, index) {
  (tmpObj = findPlayerBySID(sid)) && tmpObj.startAnim(didHit, index);

  if (sid == ownerSid && normalInsta() == false) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, players.find(p => p && p?.sid == ownerSid).dir); 
  }
  
  if (sid == player.sid) reloads[waka] = 0;
  else (othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] = 0;

  if (instakilling) return;
  if (sid != player.sid) return;

  const hitHat = (breaking || !touch) ? 40 : 7;
  const hitAcc = (player.health > 50) ? 15 : (player.health < 40 ? 18 : 13);
  const idleHat = breaking ? 6 : (turretReload >= 2500 ? (turretReload = 0, 53) : 6);
  const idleAcc = players.length >= 2 ? 15 : (player.y <= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop ? 6 : 19);

  storeEquip(window.tanker ? 6 : idleHat);
  storeEquip(window.tanker ? (players.filter(e => Math.hypot(e?.x - player.x, e?.y - player.y) < 180).length > 2 ? 59 : 15) : idleAcc, true);

  setTimeout(() => {
    storeEquip(hitHat);
    storeEquip(hitAcc, true);
    setTimeout(() => {
      if (!attackState) {
        storeEquip(window.tanker ? 6 : (idleHat == 53 ? 6 : idleHat));
        storeEquip(window.tanker ? 15 : idleAcc, true);
      }
    }, window.pingTime);
  }, speeds[waka] - window.pingTime);
}

function renderPlayers(xOffset, yOffset, zIndex) {
  for (var i = 0; i < players.length; ++i)
    (tmpObj = players[i])
    .zIndex == zIndex && (tmpObj.animate(delta), tmpObj.visible && tmpObj.alive && (tmpObj.skinRot += 0.002 * delta, tmpDir = ((player == tmpObj) ? getAttackDir() : tmpObj.dir) + tmpObj.dirPlus, mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpDir), renderPlayer(tmpObj, mainContext), mainContext.restore()));
}

function renderPlayer(e, t) {
  (t = t || mainContext)
  .lineWidth = 5.5, t.lineJoin = 'miter';
  var i = Math.PI / 4 * (_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].armS || 1),
    n = e.buildIndex < 0 && _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].hndS || 1,
    s = e.buildIndex < 0 && _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].hndD || 1;
  if (e.tailIndex > 0 && function (index, ctxt, owner) {
      if (!(tmpSkin = accessSprites[index])) {
        var tmpImage = new Image();
        tmpImage.onload = function () {
          this.isLoaded = !0, this.onload = null;
        }, tmpImage.src = '.././img/accessories/access_' + index + '.png', accessSprites[index] = tmpImage, tmpSkin = tmpImage;
      }
      var tmpObj = accessPointers[index];
      if (!tmpObj) {
        for (var i = 0; i < accessories.length; ++i)
          if (accessories[i].id == index) {
            tmpObj = accessories[i];
            break;
          }
        accessPointers[index] = tmpObj;
      }
      tmpObj?.scale && tmpSkin.isLoaded && (ctxt.save(), ctxt.translate(-20 - (tmpObj.xOff || 0), 0), tmpObj.spin && ctxt.rotate(owner.skinRot), ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), ctxt.restore());
    }(e.tailIndex, t, e), e.buildIndex < 0 && !_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].aboveHand && (renderTool(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex], _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].projectile || _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].projectiles[_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].projectile], mainContext)), t.fillStyle = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].skinColors[e.skinColor], renderCircle(e.scale * Math.cos(i), e.scale * Math.sin(i), 14), renderCircle(e.scale * s * Math.cos(-i * n), e.scale * s * Math.sin(-i * n), 14), e.buildIndex < 0 && _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].aboveHand && (renderTool(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex], _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].projectile || _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].projectiles[_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].weapons[e.weaponIndex].projectile], mainContext)), e.buildIndex >= 0) {
    var o = getItemSprite(_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[e.buildIndex]);
    t.drawImage(o, e.scale - _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[e.buildIndex].holdOffset, -o.width / 2);
  }
  renderCircle(0, 0, e.scale, t), e.skinIndex > 0 && (t.rotate(Math.PI / 2), function renderSkin(index, ctxt, parentSkin, owner) {
    if (!(tmpSkin = skinSprites[index])) {
      var tmpImage = new Image();
      tmpImage.onload = function () {
        this.isLoaded = !0, this.onload = null;
      }, tmpImage.src = '.././img/hats/hat_' + index + '.png', skinSprites[index] = tmpImage, tmpSkin = tmpImage;
    }
    var tmpObj = parentSkin || skinPointers[index];
    if (!tmpObj) {
      for (var i = 0; i < hats.length; ++i)
        if (hats[i].id == index) {
          tmpObj = hats[i];
          break;
        }
      skinPointers[index] = tmpObj;
    }
    tmpObj?.scale && tmpSkin.isLoaded && ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), !parentSkin && tmpObj?.topSprite && (ctxt.save(), ctxt.rotate(owner.skinRot), renderSkin(index + '_top', ctxt, tmpObj, owner), ctxt.restore());
  }(e.skinIndex, t, null, e));
}
var tmpSkin, skinSprites = {},
  skinPointers = {},
  accessSprites = {},
  accessPointers = {},
  toolSprites = {};

function renderTool(obj, variant, x, y, ctxt) {
  var tmpSrc = obj.src + (variant || ''),
    tmpSprite = toolSprites[tmpSrc];
  tmpSprite || ((tmpSprite = new Image())
    .onload = function () {
      this.isLoaded = !0;
    }, tmpSprite.src = '.././img/weapons/' + tmpSrc + '.png', toolSprites[tmpSrc] = tmpSprite), tmpSprite.isLoaded && ctxt.drawImage(tmpSprite, x + obj.xOff - obj.length / 2, y + obj.yOff - obj.width / 2, obj.length, obj.width);
}
var gameObjectSprites = {};

function getResSprite(obj) {
  var biomeID = obj.y >= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop ? 2 : obj.y <= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop ? 1 : 0,
    tmpIndex = obj.type + '_' + obj.scale + '_' + biomeID,
    tmpSprite = gameObjectSprites[tmpIndex];
  if (!tmpSprite) {
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = 2.1 * obj.scale + 5.5;
    var tmpContext = tmpCanvas.getContext('2d');
    if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.rotate(_libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randFloat(0, Math.PI)), tmpContext.strokeStyle = outlineColor, tmpContext.lineWidth = 5.5, 0 == obj.type)
      for (var tmpScale, i = 0; i < 2; ++i)
        renderStar(tmpContext, 7, tmpScale = tmpObj.scale * (i ? 0.5 : 1), 0.7 * tmpScale), tmpContext.fillStyle = biomeID ? i ? '#fff' : '#e3f1f4' : i ? '#b4db62' : '#9ebf57', tmpContext.fill(), i || tmpContext.stroke();
    else if (1 == obj.type)
      if (2 == biomeID)
        tmpContext.fillStyle = '#606060', renderStar(tmpContext, 6, 0.3 * obj.scale, 0.71 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#89a54c', renderCircle(0, 0, 0.55 * obj.scale, tmpContext), tmpContext.fillStyle = '#a5c65b', renderCircle(0, 0, 0.3 * obj.scale, tmpContext, !0);
      else {
        var tmpRange;
        ! function (ctxt, spikes, outer, inner) {
          var tmpOuter, rot = Math.PI / 2 * 3,
            step = Math.PI / 6;
          ctxt.beginPath(), ctxt.moveTo(0, -inner);
          for (var i = 0; i < 6; i++)
            tmpOuter = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randInt(outer + 0.9, 1.2 * outer), ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter, Math.cos(rot + 2 * step) * inner, Math.sin(rot + 2 * step) * inner), rot += 2 * step;
          ctxt.lineTo(0, -inner), ctxt.closePath();
        }(tmpContext, 0, tmpObj.scale, 0.7 * tmpObj.scale), tmpContext.fillStyle = biomeID ? '#e3f1f4' : '#89a54c', tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = biomeID ? '#6a64af' : '#c15555';
        var rotVal = mathPI2 / 4;
        for (i = 0; i < 4; ++i)
          renderCircle((tmpRange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randInt(tmpObj.scale / 3.5, tmpObj.scale / 2.3)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randInt(10, 12), tmpContext);
      }
    else
      2 != obj.type && 3 != obj.type || (tmpContext.fillStyle = 2 == obj.type ? 2 == biomeID ? '#938d77' : '#939393' : '#e0c655', renderStar(tmpContext, 3, obj.scale, obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = 2 == obj.type ? 2 == biomeID ? '#b2ab90' : '#bcbcbc' : '#ebdca3', renderStar(tmpContext, 3, 0.55 * obj.scale, 0.65 * obj.scale), tmpContext.fill());
    tmpSprite = tmpCanvas, gameObjectSprites[tmpIndex] = tmpSprite;
  }
  return tmpSprite;
}
var itemSprites = [];

function getItemSprite(obj, asIcon) {
  var tmpSprite = itemSprites[obj.id];
  if (!tmpSprite || asIcon) {
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = 2.5 * obj.scale + 5.5 + (_js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[obj.id].spritePadding || 0);
    var tmpContext = tmpCanvas.getContext('2d');
    if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.rotate(asIcon ? 0 : Math.PI / 2), tmpContext.strokeStyle = outlineColor, tmpContext.lineWidth = 5.5 * (asIcon ? tmpCanvas.width / 81 : 1), 'apple' == obj.name) {
      tmpContext.fillStyle = '#c15555', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#89a54c';
      var leafDir = -Math.PI / 2;
      ! function (x, y, l, r, ctxt) {
        var endX = x + 25 * Math.cos(r),
          endY = y + 25 * Math.sin(r);
        ctxt.moveTo(x, y), ctxt.beginPath(), ctxt.quadraticCurveTo((x + endX) / 2 + 10 * Math.cos(r + Math.PI / 2), (y + endY) / 2 + 10 * Math.sin(r + Math.PI / 2), endX, endY), ctxt.quadraticCurveTo((x + endX) / 2 - 10 * Math.cos(r + Math.PI / 2), (y + endY) / 2 - 10 * Math.sin(r + Math.PI / 2), x, y), ctxt.closePath(), ctxt.fill(), ctxt.stroke();
      }(obj.scale * Math.cos(leafDir), obj.scale * Math.sin(leafDir), 0, leafDir + Math.PI / 2, tmpContext);
    } else if ('cookie' == obj.name) {
      tmpContext.fillStyle = '#cca861', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#937c4b';
      for (var rotVal = mathPI2 / (chips = 4), i = 0; i < chips; ++i)
        renderCircle((tmpRange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randInt(4, 5), tmpContext, !0);
    } else if ('cheese' == obj.name) {
      var chips, tmpRange;
      for (tmpContext.fillStyle = '#f4f3ac', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#c3c28b', rotVal = mathPI2 / (chips = 4), i = 0; i < chips; ++i)
        renderCircle((tmpRange = _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].randInt(4, 5), tmpContext, !0);
    } else if ('wood wall' == obj.name || 'stone wall' == obj.name || 'castle wall' == obj.name) {
      tmpContext.fillStyle = 'castle wall' == obj.name ? '#83898e' : 'wood wall' == obj.name ? '#a5974c' : '#939393';
      var sides = 'castle wall' == obj.name ? 4 : 3;
      renderStar(tmpContext, sides, 1.1 * obj.scale, 1.1 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = 'castle wall' == obj.name ? '#9da4aa' : 'wood wall' == obj.name ? '#c9b758' : '#bcbcbc', renderStar(tmpContext, sides, 0.65 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
    } else if ('spikes' == obj.name || 'greater spikes' == obj.name || 'poison spikes' == obj.name || 'spinning spikes' == obj.name) {
      tmpContext.fillStyle = 'poison spikes' == obj.name ? '#7b935d' : '#939393';
      var tmpScale = 0.6 * obj.scale;
      renderStar(tmpContext, 'spikes' == obj.name ? 5 : 6, obj.scale, tmpScale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, tmpScale, tmpContext), tmpContext.fillStyle = '#c9b758', renderCircle(0, 0, tmpScale / 2, tmpContext, !0);
    } else if ('windmill' == obj.name || 'faster windmill' == obj.name || 'power mill' == obj.name)
      tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#c9b758', renderRectCircle(0, 0, 1.5 * obj.scale, 29, 4, tmpContext), tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, 0.5 * obj.scale, tmpContext);
    else if ('mine' == obj.name)
      tmpContext.fillStyle = '#939393', renderStar(tmpContext, 3, obj.scale, obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#bcbcbc', renderStar(tmpContext, 3, 0.55 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
    else if ('sapling' == obj.name)
      for (i = 0; i < 2; ++i)
        renderStar(tmpContext, 7, tmpScale = obj.scale * (i ? 0.5 : 1), 0.7 * tmpScale), tmpContext.fillStyle = i ? '#b4db62' : '#9ebf57', tmpContext.fill(), i || tmpContext.stroke();
    else if ('pit trap' == obj.name)
      tmpContext.fillStyle = '#a5974c', renderStar(tmpContext, 3, 1.1 * obj.scale, 1.1 * obj.scale), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = outlineColor, renderStar(tmpContext, 3, 0.65 * obj.scale, 0.65 * obj.scale), tmpContext.fill();
    else if ('boost pad' == obj.name)
      tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#dbd97d',
      function (s, ctx) {
        ctx = ctx || mainContext;
        var h = s * (Math.sqrt(3) / 2);
        ctx.beginPath(), ctx.moveTo(0, -h / 2), ctx.lineTo(-s / 2, h / 2), ctx.lineTo(s / 2, h / 2), ctx.lineTo(0, -h / 2), ctx.fill(), ctx.closePath();
      }(1 * obj.scale, tmpContext);
    else if ('turret' == obj.name)
      tmpContext.fillStyle = '#a5974c', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#939393', renderRect(0, -25, 0.9 * obj.scale, 50, tmpContext), renderCircle(0, 0, 0.6 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke();
    else if ('platform' == obj.name) {
      tmpContext.fillStyle = '#cebd5f';
      var tmpS = 2 * obj.scale,
        tmpW = tmpS / 4,
        tmpX = -obj.scale / 2;
      for (i = 0; i < 4; ++i)
        renderRect(tmpX - tmpW / 2, 0, tmpW, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpX += tmpS / 4;
    } else
      'healing pad' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#db6e6e', renderRectCircle(0, 0, 0.65 * obj.scale, 20, 4, tmpContext, !0)) : 'spawn pad' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderRect(0, 0, 2 * obj.scale, 2 * obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = '#71aad6', renderCircle(0, 0, 0.6 * obj.scale, tmpContext)) : 'blocker' == obj.name ? (tmpContext.fillStyle = '#7e7f82', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.rotate(Math.PI / 4), tmpContext.fillStyle = '#db6e6e', renderRectCircle(0, 0, 0.65 * obj.scale, 20, 4, tmpContext, !0)) : 'teleporter' == obj.name && (tmpContext.fillStyle = '#7e7f82', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fill(), tmpContext.stroke(), tmpContext.rotate(Math.PI / 4), tmpContext.fillStyle = '#d76edb', renderCircle(0, 0, 0.5 * obj.scale, tmpContext, !0));
    tmpSprite = tmpCanvas, asIcon || (itemSprites[obj.id] = tmpSprite);
  }
  return tmpSprite;
}

function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
  (tmpContext = tmpContext || mainContext)
  .beginPath(), tmpContext.arc(x, y, scale, 0, 2 * Math.PI), dontFill || tmpContext.fill(), dontStroke || tmpContext.stroke();
}

function renderStar(ctxt, spikes, outer, inner) {
  var x, y, rot = Math.PI / 2 * 3,
    step = Math.PI / spikes;
  ctxt.beginPath(), ctxt.moveTo(0, -outer);
  for (var i = 0; i < spikes; i++)
    x = Math.cos(rot) * outer, y = Math.sin(rot) * outer, ctxt.lineTo(x, y), rot += step, x = Math.cos(rot) * inner, y = Math.sin(rot) * inner, ctxt.lineTo(x, y), rot += step;
  ctxt.lineTo(0, -outer), ctxt.closePath();
}

function renderRect(x, y, w, h, ctxt, stroke) {
  ctxt.fillRect(x - w / 2, y - h / 2, w, h), stroke || ctxt.strokeRect(x - w / 2, y - h / 2, w, h);
}

function renderRectCircle(x, y, s, sw, seg, ctxt, stroke) {
  ctxt.save(), ctxt.translate(x, y), seg = Math.ceil(seg / 2);
  for (var i = 0; i < seg; i++)
    renderRect(0, 0, 2 * s, sw, ctxt, stroke), ctxt.rotate(Math.PI / seg);
  ctxt.restore();
}

function loadGameObject(data) {
  for (var i = 0; i < data.length;)
    objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"].list[data[i + 6]], !0, data[i + 7] >= 0 ? {
      sid: data[i + 7]
    } : null), i += 8;
}

function wiggleGameObject(dir, sid) {
  (tmpObj = findObjectBySid(sid)) && (tmpObj.xWiggle += _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].gatherWiggle * Math.cos(dir), tmpObj.yWiggle += _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].gatherWiggle * Math.sin(dir));
}

function shootTurret(sid, dir) {
  (tmpObj = findObjectBySid(sid)) && (tmpObj.dir = dir, tmpObj.xWiggle += _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].gatherWiggle * Math.cos(dir + Math.PI), tmpObj.yWiggle += _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].gatherWiggle * Math.sin(dir + Math.PI));
}

function addProjectile(x, y, dir, range, speed, indx, layer, sid) {
  inWindow && (projectileManager.addProjectile(x, y, dir, range, speed, indx, null, null, layer)
    .sid = sid);
}

function remProjectile(sid, range) {
  for (var i = 0; i < projectiles.length; ++i)
    projectiles[i].sid == sid && (projectiles[i].range = range);
}

function animateAI(sid) {
  (tmpObj = findAIBySID(sid)) && tmpObj.startAnim();
}

function loadAI(data) {
  for (var i = 0; i < ais.length; ++i)
    ais[i].forcePos = !ais[i].visible, ais[i].visible = !1;
  if (data) {
    var tmpTime = Date.now();
    for (i = 0; i < data.length;)
      (tmpObj = findAIBySID(data[i])) ? (tmpObj.index = data[i + 1], tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 2], tmpObj.y2 = data[i + 3], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 4] : tmpObj.d2, tmpObj.d2 = data[i + 4], tmpObj.health = data[i + 5], tmpObj.dt = 0, tmpObj.visible = !0) : ((tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1]))
        .x2 = tmpObj.x, tmpObj.y2 = tmpObj.y, tmpObj.d2 = tmpObj.dir, tmpObj.health = data[i + 5], aiManager.aiTypes[data[i + 1]].name || (tmpObj.name = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].cowNames[data[i + 6]]), tmpObj.forcePos = !0, tmpObj.sid = data[i], tmpObj.visible = !0), i += 7;
  }
}
var aiSprites = {};

function renderAI(obj, ctxt) {
  if (!tmpImg?.src) return;
  var tmpIndx = obj.index,
    tmpSprite = aiSprites[tmpIndx];
  if (!tmpSprite) {
    var tmpImg = new Image();
    tmpImg.onload = function () {
      this.isLoaded = !0, this.onload = null;
    }, tmpImg.src = '.././img/animals/' + (obj?.src || 'sheep_1') + '.png', tmpSprite = tmpImg, aiSprites[tmpIndx] = tmpSprite;
  }
  if (tmpSprite.isLoaded) {
    var tmpScale = 1.2 * obj.scale * (obj.spriteMlt || 1);
    ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, 2 * tmpScale, 2 * tmpScale);
  }
}

function isOnScreen(x, y, s) {
  return x + offsetCamX >= 0 && x + offsetCamX <= maxScreenWidth && y + offsetCamY >= 0 && y + offsetCamY <= maxScreenHeight;
}

function addPlayer(data, isYou) {
  var tmpPlayer = function (id) {
    for (var i = 0; i < players.length; ++i)
      if (players[i].id == id)
        return players[i];
    return null;
  }(data[0]);
  tmpPlayer || (tmpPlayer = new _js_data_player_js__WEBPACK_IMPORTED_MODULE_9__["default"](data[0], data[1], _config_js__WEBPACK_IMPORTED_MODULE_4__["default"], _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"], projectileManager, objectManager, players, ais, _js_data_items_js__WEBPACK_IMPORTED_MODULE_6__["default"], hats, accessories), players.push(tmpPlayer)), tmpPlayer.spawn(isYou ? moofoll : null), tmpPlayer.visible = !1, tmpPlayer.x2 = void 0, tmpPlayer.y2 = void 0, tmpPlayer.setData(data), isYou && (camX = (player = tmpPlayer)
    .x + offsetCamX, camY = player.y + offsetCamY, updateItems(), updateStatusDisplay(), updateAge(), updateUpgrades(0), gameUI.style.display = 'block');
}

function removePlayer(id) {
  for (var i = 0; i < players.length; i++)
    if (players[i].id == id) {
      players.splice(i, 1);
      break;
    }
}

function updateItemCounts(index, value) {
  player && (player.itemCounts[index] = value);
}

function updatePlayerValue(index, value, updateView) {
  player && (player[index] = value, updateView && updateStatusDisplay());
}


function place(id, angle = getAttackDir(), t = true) {
  if (instakilling) return;
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, id, false);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, angle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, (player.weapons[0] != waka && player.weapons[1] != waka) ? (waka = player.weapons[0]) : waka, true);
}

let lastHeal = Date.now();
let oldHealth = 100;

function getCookieHealing() {
  const delta = Date.now() - lastHeal;
  if (delta < 500) return 0;

  return 5;
}

function getItemOutheal(item) {
  switch (item) {
    case 0:
      return 25;
      break;
    case 1:
      return 40;
      break;
    case 2:
      return 35 + getCookieHealing();
      break;
    default:
      return 40;
  }
};

function heal(healCount) {
  if (player.health == 100) return;
  
  lastHeal = Date.now();
  window.fz && (findPlayerBySID(player.sid).health = 100);
  const healingItemSid = player.items[0];
  for (let healingCount = 0; healingCount < healCount; healingCount++) {
    selectToBuild(healingItemSid, false);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, getAttackDir());
  };
  selectToBuild(player.weaponIndex, true);
};

const safeHealDelay = 120;

let lastDamage = 0;
let prevHeal = 0;
let healTimestamp = Date.now();

function healing(healTimestamp) {
  if (player.health == 100) return;
  
  const damage = 100 - player.health;
  const healingItemSid = player.items[0];
  const healCount = Math.ceil(damage / getItemOutheal(healingItemSid));
  const timeDelay = Date.now() - healTimestamp;

  const prevHealEndsIn = Date.now() - prevHeal - window.pingTime;
  const prevHealFixed = prevHealEndsIn < 0 ? 0 : (prevHealEndsIn > average ? 0 : prevHealEndsIn);
  const rawHealTimeout = safeHealDelay - window.pingTime / 2;
  const safeHealTimeout = (prevHealFixed ? (
    rawHealTimeout + prevHealFixed
  ) : (
    rawHealTimeout
  )) - timeDelay + 1;
  
  window.setTimeout(() =>
    heal(healCount), safeHealTimeout);
  lastDamage = Date.now();
  prevHeal = Date.now() + safeHealTimeout;
}

function updateHealth(sid, value) {
  (tmpObj = findPlayerBySID(sid)) && (tmpObj.health = value);

  oldHealth = player.health;

  healTimestamp = Date.now();
}

function getMoveDir() {
  var newMoveDir = function () {
    var dx = 0,
      dy = 0;
    if (-1 != controllingTouch.id)
      dx += controllingTouch.currentX - controllingTouch.startX, dy += controllingTouch.currentY - controllingTouch.startY;
    else
      for (var key in moveKeys) {
        var tmpDir = moveKeys[key];
        dx += !!keys[key] * tmpDir[0], dy += !!keys[key] * tmpDir[1];
      }
    return 0 == dx && 0 == dy ? void 0 : _libs_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].fixTo(Math.atan2(dy, dx), 2);
  }();
  return newMoveDir;
}

function findObjectAngleScale(object) {
  const angle = Math.atan2(object.y - player.y, object.x - player.x);
  const boundary = angle - Math.PI / 4;
  const boundary1 = angle + Math.PI / 4;
  const angleScale = Math.abs(Math.PI - boundary - boundary1);

  return angleScale;
}

function calculateAngle(previous, next) {
  const angle = Math.atan2(previous.y - player.y, previous.x - player.x);
  const angle1 = Math.atan2(next.y - player.y, next.x - player.x);

  return (angle + angle1) / 2;
}

function calculateCenter(angle) {
  return angle + Math.PI / 2;
}

function scanFree(intersectingObject, index, sectors, nearestGameObjects, angle) {
  const previousSector = sectors[index - 1];
  const nextSector = nearestGameObjects.find( object => object && Math.abs(Math.atan2(object?.y - player.y, object?.x - player.x) - angle + Math.PI / 2) <= Math.PI / 2 );

  if (nextSector && previousSector) return calculateAngle(previousSector, nextSector);
  else return calculateCenter(angle);
}

function findFreeAngles() {
  const freeAngles = [];
  const sectors = [];

  for (let i = 0; i < Math.PI * 2; i += Math.PI / 2) {
    const intersectingObject = nearestGameObjects.find( object => 
      Math.abs(Math.atan2(object.y - player.y, object.x - player.x) - i) <= Math.PI / 2);

    if (intersectingObject) freeAngles.push(scanFree(intersectingObject, nearestGameObjects.indexOf(intersectingObject), sectors, nearestGameObjects, i));
    else freeAngles.push(i);
  }

  return freeAngles;
}

function autoplace(enemy, replace = false) {
  if (instakilling) return;

  const distance = Math.hypot(enemy?.x - player?.x, enemy?.y - player?.y) || 181;
  const angles = findFreeAngles();
  const preplacableObjects = nearestGameObjects.filter(object => object && Math.hypot(object.x - player.x, object.y - player.y) < _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].playerScale + (object?.group?.scale) || 50);
  angles.forEach(angle => {
    place(player.items[((Math.abs(angle - getMoveDir()) <= Math.PI / 2) && distance < 180) ? 2 : 4], angle);
  });
}

let reloads = [];

const sxw = 1920 / 2;
const sxh = 1080 / 2;
let tmpTime = Date.now();
let serverLag = 0;
let average = 111;
let current = 111;
let breaking = false;
let aimOverride = false;

function autobreak(trap) {
  if (instakilling) return;
  
  const correctWeapon = player.weapons[1] == 10 ? 10 : player.weapons[0];
  const trapAngle = Math.atan2(
    trap.y - player.y,
    trap.x - player.x
  );
  breaking = true;
  window.trap = trap;
  
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, trapAngle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, false, trapAngle);

  aimOverride = trapAngle;
  
  if (player.weaponIndex != correctWeapon) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka = correctWeapon, true);
  }
}

function bowSync() {
  const enemy = players.find(e => e.sid == ownerSid);

  if (!enemy) return false;
  fixInsta();
  const angle = enemy.dir;

  storeEquip(53);
  turretReload = 0;
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, angle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, false, getAttackDir());

  setTimeout(() => {
    storeEquip(getBiomeHat());
  }, average);
}

function fixInsta() {
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, null);
  setTimeout(() => {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, getMoveDir());
  }, 222);
}

function normalInsta() {
  const enemy = players.find(e => Math.hypot(player.x - e?.x, player.y - e?.y) < 180 && player.sid != e.sid && !alliancePlayers.includes(e.sid));
  window.sidFocus = enemy?.sid || 69420;
  if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] || reloads[player.weapons[1]] !== speeds[player.weapons[1]]) return false;
  if (!enemy) return false;
  if (instakilling) return;

  let angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);

  aimOverride = angle;

  instakilling = true;
  autoclicker = angle;
  fixInsta();
  storeEquip(7);
  storeEquip(4, true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "!sync");
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[0], true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, angle);
  setTimeout(() => {
    angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);
    autoclicker = angle;
    aimOverride = angle;
    storeEquip(53);
    turretReload = 0;
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
    reloads[player.weapons[1]] = 0;
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, angle);
    setTimeout(() => {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[0], true);
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, false, angle);
      storeEquip(getBiomeHat());
      instakilling = false;
      autoclicker = false;
      aimOverride = false;
    }, average / 2 + serverLag);
  }, average / 2 + serverLag);
}

function reverseInsta() {
  const enemy = players.find(e => Math.hypot(player.x - e?.x, player.y - e?.y) < 180 && player.sid != e.sid && !alliancePlayers.includes(e.sid));
  window.sidFocus = enemy?.sid || 69420;
  if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] || reloads[player.weapons[1]] !== speeds[player.weapons[1]]) return;
  if (!enemy) return;
  if (instakilling) return;

  let angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);
  aimOverride = angle;
  autoclicker = angle;

  instakilling = true;
  storeEquip(53);
  fixInsta();
  turretReload = 0;
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, angle);
  _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "!sync");
  reloads[player.weapons[1]] = 0;
  setTimeout(() => {
    angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);
    aimOverride = angle;
    autoclicker = angle;
    storeEquip(7);
    storeEquip(4, true);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka = player.weapons[0], true);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, angle);
    setTimeout(() => {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, false, angle);
      storeEquip(getBiomeHat());
      instakilling = false;
      autoclicker = false;
      aimOverride = false;
    }, average / 2 + serverLag);
  }, average / 2 + serverLag);
}

function botFunctions(tmpPlayer) {
  if (window.follow) {
    const correctWeapon = player.weapons[1] == 10 ? 10 : player.weapons[0];
    const angle_ = Math.atan2(tmpPlayer.y - player.y, tmpPlayer.x - player.x);
    const dist = Math.hypot(player.x - tmpPlayer.x, player.y - tmpPlayer.y);

    if (dist > 150) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, angle_);
      if (player.weaponIndex != correctWeapon && !window.bowspam) {
        waka = correctWeapon;
        _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka, true);
      }
      storeEquip(player.y <= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop ? 6 : 11, true);
    } else {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, null);
      storeEquip(15, true);
      if (!window.bowspam) {
        waka = player.weapons[0];
        _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, player.weapons[0], true);
      }
    }
  }
  if (window.bowspam && !breaking && !instakilling) {
    if (player.weaponIndex != player.weapons[1]) {
      waka = player.weapons[1];
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, waka, true);
    }

    if (reloads[player.weapons[1]] > speeds[player.weapons[1]] / 2 && player.skinIndex != 1) {
      storeEquip(1);
    } else if (player.skinIndex != 20) {
      storeEquip(20);
    }

    const lookingX = tmpPlayer.x + Math.cos(tmpPlayer.dir);
    const lookingY = tmpPlayer.y + Math.sin(tmpPlayer.dir);
    const angle = Math.atan2(lookingY - player.y, lookingX - player.x);
    
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, angle);
  }
};

// antiInsta function
function antiInsta() {
  // Your antiInsta code goes here
};

let controlFlow = false;

function boostSpike() {
  if (!window.enemy) return;

  const distance = Math.hypot(window.enemy.x - player.x, window.enemy.y - player.y);
  const angle = Math.atan2(window.enemy.y - player.y, window.enemy.x - player.x);

  if (distance > 400 && distance < 500) {
    place(player.items[4], angle);
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, angle);
  } else if (distance < 400 && Math.hypot(player.x - player.x2, player.y - player.y2) > 20) {
    const enemyBorder = {
      x: window.enemy.x + Math.cos(Math.PI / 2) * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].playerScale,
      y: window.enemy.y + Math.sin(Math.PI / 2) * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].playerScale
    };

    const enB = Math.atan2(enemyBorder.y - player.y, enemyBorder.x - player.x);
    
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, angle);
    
    place(player.items[2], angle - enB - Math.PI);
    place(player.items[2], angle + enB - Math.PI);
    place(player.items[4], angle);
  }
}
      
function boostInstaOptimisations() {
  if (!window.enemy) return;

  const distance = Math.hypot(window.enemy.x - player.x, window.enemy.y - player.y);
  const angle = Math.atan2(window.enemy.y - player.y, window.enemy.x - player.x);

  if (distance > 400 && distance < 450 && keyEvents.ShiftLeft) {
    place(player.items[4], angle);
    controlFlow = true;
    
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, angle);
  } else if (keyEvents.ShiftLeft && distance < 240) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, null);
    
    reverseInsta();
    controlFlow = false;
  } else if (keyEvents.ShiftLeft && distance > 450) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "[*] Calibrating" + (new Array(Math.abs(Math.floor(Math.sin(Date.now()) * 3)))).fill(".").join(""));

    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, angle);
    storeEquip(40);
  } else if (keyEvents.ShiftLeft && distance < 400 && !controlFlow) {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "[*] Calibrating" + (new Array(Math.abs(Math.floor(Math.sin(Date.now()) * 3)))).fill(".").join(""));

    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.MOVEMENT, angle - Math.PI);
    
    storeEquip(getBiomeHat());
    storeEquip(11, true);
  }
}

let lastPos = {};

function updateDist() {
  lastPos.x = player.x;
  lastPos.y - player.y;
}

function autoMills() {
  const lastPosDist = Math.hypot(lastPos?.x - player.x, lastPos?.y - player.y);

  if (lastPosDist < 50 && lastPosDist) return updateDist();
  
  const placeAngle = getMoveDir() - Math.PI;

  place(player.items[3], placeAngle);
  place(player.items[3], placeAngle - Math.PI / 2);
  place(player.items[3], placeAngle + Math.PI / 2);

  updateDist();
}

const modulesQueue = [
  /** HELPER MODULES ARE GOING FIRST **/
  () => {
    nearestGameObjects = gameObjects.filter(object => {
      if (!object?.x) return;

      if (!isOnScreen(object?.x - xOffset, object?.y - yOffset, 45)) return;
      
      return true;
    });
  }, () => {
    if (Date.now() - lastPing_ > 3000) {
      lastPing_ = Date.now();
      pingSocket();
    };
  
    current = Date.now() - tmpTime;
    average = average / 2 + (Date.now() - tmpTime) / 2;
    serverLag = Math.abs(1000 / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].serverUpdateRate - average);
    tmpTime = Date.now();
    turretReload = Math.min(turretReload + current, 2500);
    if (reloads[player.weaponIndex] < speeds[player.weaponIndex]) reloads[player.weaponIndex] += current;
    else reloads[player.weaponIndex] = speeds[player.weaponIndex];
  },
  /** DEFENCE MODULES **/
  () => antiInsta(),
  () => healing(healTimestamp),
  () => {
    if (instakilling) return;
    
    const trap = nearestGameObjects.find(obj => obj?.active && obj?.trap && obj?.owner?.sid != player.sid && Math.hypot(obj?.x - player.x, obj?.y - player.y) < obj?.scale && !alliancePlayers.includes(obj?.owner?.sid));

    if (!trap && breaking) {
      breaking = false;
      aimOverride = false;
      
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, false, getAttackDir());
    }
  
    if (trap) return autobreak(trap);
  },
  () => {
    if (instakilling) return;
    if (window.bowspam) return;
    if (breaking) return;
    
    if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] && player.weaponIndex != player.weapons[0]) _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, (waka = player.weapons[0]), true);
    else if (reloads[player.weapons[1]] !== speeds[player.weapons[1]] && player.weaponIndex != player.weapons[1]) _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, (waka = player.weapons[1]), true);

    if (reloads[player.weapons[1]] >= speeds[player.weapons[1]] && reloads[player.weapons[0]] >= speeds[player.weapons[0]] && player.weaponIndex != player.weapons[0]) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.CHANGE_WEAPON, (waka = player.weapons[0]), true);
    }
  },
  () => { /** MACRO POSITIONS **/
    if (window.keyEvents.KeyG) place(player.items[5], getAttackDir()); 
    else if (window.keyEvents.KeyV) place(player.items[2], getAttackDir());
    else if (window.keyEvents.KeyF) place(player.items[4], getAttackDir()); 
    else if (window.keyEvents.KeyZ) boostSpike();
    else if (window.keyEvents.KeyQ) place(player.items[0], getAttackDir());
    else if (window.keyEvents.KeyT) autoMills();;

    if (window.keyEvents.ArrowUp) offsetCamY -= (deltaHold += 3);
    else if (window.keyEvents.ArrowDown) offsetCamY += (deltaHold += 3);
    else if (window.keyEvents.ArrowLeft) offsetCamX -= (deltaHold += 3);
    else if (window.keyEvents.ArrowRight) offsetCamX += (deltaHold += 3);
    else deltaHold = 10;
  }, (tt) => {
    if (instakilling) return;
    if (!tt) return;

    window.boostinsta ? (tt && boostInstaOptimisations()) : (tt && autoplace());
  }, (tt) => {
    if (breaking) return;
    if (instakilling) return;
    
    if (tt?.skinIndex == 26 || tt?.skinIndex == 11) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, false, getAttackDir());
    } else if (attackState && tt?.skinIndex != 26 && tt?.skinIndex != 11) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, getAttackDir());
    }
  }, () => { /** Instakill shouldn't be interrupted **/
    if (window.keyEvents.SwitchKeyR) {
      normalInsta();
    } else if (window.keyEvents.SwitchKeyT) {
      reverseInsta();
    }
  }, () => {
    if (autoclicker) {
      _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.ATTACK, true, autoclicker);
    }
  },
  () => {
    if (!window.testPacketLimit) return;

    window.testPacketLimit += window.testPacketLimit / 2;

    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, `[!] Stress test ${window.testPacketLimit}`);
    
    for (let i = 0; i < window.testPacketLimit; i++) 
      (new WebSocket(_libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].socket.url)).close();

  }
];

let attackDir = 0, tmp_Dir = 0, camSpd = 0;
let lastPing_ = Date.now();

function updatePlayers(data) {
  let tt;
  window.enemy = false;
  window.enemyDanger = false;
  
  for (let i = 0; i < data.length;) {
    (tmpObj = findPlayerBySID(data[i])) && (tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 1], tmpObj.y2 = data[i + 2], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 3] : tmpObj.d2, tmpObj.d2 = data[i + 3], tmpObj.dt = 0, tmpObj.buildIndex = data[i + 4], tmpObj.weaponIndex = data[i + 5], tmpObj.weaponVariant = data[i + 6], tmpObj.team = data[i + 7], tmpObj.isLeader = data[i + 8], tmpObj.skinIndex = data[i + 9], tmpObj.tailIndex = data[i + 10], tmpObj.iconIndex = data[i + 11], tmpObj.zIndex = data[i + 12], tmpObj.visible = !0), i += 13;
    if (tmpObj.sid == ownerSid) botFunctions(tmpObj);
    
    if (Math.hypot(tmpObj.x - player.x, tmpObj.y - player.y) < 700 && tmpObj != player) window.enemy = tt = tmpObj;
    if (Math.hypot(tmpObj.x - player.x, tmpObj.y - player.y) < 200 && tmpObj != player) window.enemyDanger = tmpObj;
  }

  modulesQueue.forEach(task => task(tt));
}

function findPlayerBySID(sid) {
  for (var i = 0; i < players.length; ++i)
    if (players[i].sid == sid)
      return players[i];
  return null;
}

function findAIBySID(sid) {
  for (var i = 0; i < ais.length; ++i)
    if (ais[i].sid == sid)
      return ais[i];
  return null;
}

function findObjectBySid(sid) {
  return gameObjects[sid];
}
var lastPing = -1;

function pingSocketResponse() {
  var pingTime = Date.now() - lastPing;
  window.pingTime = pingTime, pingDisplay.innerText = 'Ping: ' + pingTime + '\xA0ms';
}

function pingSocket() {
  lastPing = Date.now(), _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.PING);
}

function serverShutdownNotice(countdown) {
  if (!(countdown < 0)) {
    var minutes = Math.floor(countdown / 60),
      seconds = countdown % 60;
    seconds = ('0' + seconds)
      .slice(-2), shutdownDisplay.innerText = 'Server restarting in ' + minutes + ':' + seconds, shutdownDisplay.hidden = !1;
  }
}

function openLink(link) {
  window.open(link, '_blank');
}

var i = 0;
const dxw = 1920 / 2;
const dxh = 1080 / 2;

let xOffset, yOffset;

function render() {
  now = Date.now(), delta = now - lastUpdate, lastUpdate = now;

  if (player) {
    /*attackDir = UTILS.getDistance(camX, camY, player.x, player.y);
    tmp_Dir = UTILS.getDirection(player.x, player.y, camX, camY);

    camSpd = Math.min(0.01 * attackDir * delta, attackDir);*/

    const moX = dxw - mouseX;
    const moY = dxh - mouseY;
    
    camX = player.x + moX / 10;
    camY = player.y + moY / 10;
  }
  
  xOffset = camX - maxScreenWidth / 2 + offsetCamX;
  yOffset = camY - maxScreenHeight / 2 + offsetCamY;
  
  _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset <= 0 && _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#b6db66', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset <= 0 ? (mainContext.fillStyle = '#dbc666', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#fff', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset >= 0 ? (mainContext.fillStyle = '#fff', mainContext.fillRect(0, 0
      , maxScreenWidth, _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset), mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset
      , maxScreenWidth, maxScreenHeight - (_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset))) : (mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, 0, maxScreenWidth
      , _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset), mainContext.fillStyle = '#dbc666', mainContext.fillRect(0, _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop -
      yOffset, maxScreenWidth, maxScreenHeight - (_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].snowBiomeTop - yOffset))), firstSetup || ((waterMult += waterPlus * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"]
        .waveSpeed * delta) >= _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].waveMax ? (waterMult = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].waveMax, waterPlus = -1) : waterMult <= 1 && (waterMult = waterPlus = 1), mainContext
      .fillStyle = '#dbc666', renderWaterBodies(xOffset, yOffset, mainContext, _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].riverPadding), mainContext.fillStyle = '#91b2db', renderWaterBodies(
        xOffset, yOffset, mainContext, 250 * (waterMult - 1))), mainContext.lineWidth = 4, mainContext.strokeStyle = '#000', mainContext.globalAlpha = 0.06
    , mainContext.beginPath();
  for (var i = -camX, k = -camY; i < maxScreenWidth || k < maxScreenHeight; i += gridDelta, k += gridDelta) {
    if (i > 0) {
      mainContext.moveTo(i, 0);
      mainContext.lineTo(i, maxScreenHeight);
    }
    if (k > 0) {
      mainContext.moveTo(0, k);
      mainContext.lineTo(maxScreenWidth, k);
    }
  }
  mainContext.stroke();
  mainContext.globalAlpha = 1;
  mainContext.strokeStyle = outlineColor;
  renderGameObjects(-1, xOffset, yOffset);
  mainContext.globalAlpha = 1;
  mainContext.lineWidth = 5.5;
  renderProjectiles(0, xOffset, yOffset);
  renderPlayers(xOffset, yOffset, 0);
  mainContext.globalAlpha = 1;

  if (renderGameObjects(0, xOffset, yOffset), renderProjectiles(1, xOffset, yOffset), renderGameObjects(1, xOffset, yOffset), renderPlayers(xOffset, yOffset
      , 1), renderGameObjects(2, xOffset, yOffset), renderGameObjects(3, xOffset, yOffset), mainContext.fillStyle = '#000', mainContext.globalAlpha = 0.09
    , xOffset <= 0 && mainContext.fillRect(0, 0, -xOffset, maxScreenHeight), _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - xOffset <= maxScreenWidth) {
    var tmpY = Math.max(0, -yOffset);
    mainContext.fillRect(_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - xOffset, tmpY, maxScreenWidth - (_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - xOffset), maxScreenHeight - tmpY);
  }
  if (yOffset <= 0 && mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset), _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - yOffset <= maxScreenHeight) {
    var tmpX = Math.max(0, -xOffset)
      , tmpMin = 0;
    _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - xOffset <= maxScreenWidth && (tmpMin = maxScreenWidth - (_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - xOffset)), mainContext.fillRect(tmpX, _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale -
      yOffset, maxScreenWidth - tmpX - tmpMin, maxScreenHeight - (_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale - yOffset));
  }
  for (mainContext.globalAlpha = 1, mainContext.fillStyle = 'rgba(0, 0, 70, 0.35)', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight), mainContext
    .strokeStyle = darkOutlineColor, textManager.update(delta, mainContext, xOffset, yOffset), i = 0; i < players.length + ais.length; ++i)
    if ((tmpObj = players[i] || ais[i - players.length])
      .visible) {
      var total = tmpObj.t2 - tmpObj.t1;
      var ratio = (now - average - tmpObj.t1) / total;
      tmpObj.dt += delta;
      var tmpRate = Math.min(1.7, tmpObj.dt / 170);
      var tmpDiff = tmpObj.x2 - tmpObj.x1;
      tmpObj.x = tmpObj.x1 + tmpDiff * tmpRate;
      tmpDiff = tmpObj.y2 - tmpObj.y1;
      tmpObj.y = tmpObj.y1 + tmpDiff * tmpRate;
      tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));

      if (ais[i]) {
        tmpObj.animate(delta);
        mainContext.save();
        mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
        mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - Math.PI / 2);
        renderAI(tmpObj, mainContext);
        mainContext.restore();
      }

      if (players[i]) {
        if (tmpObj.chatCountdown > 0) {
          tmpObj.chatCountdown -= delta, tmpObj.chatCountdown <= 0 && (tmpObj.chatCountdown = 0), mainContext.font = '32px Hammersmith One';
          var tmpSize = mainContext.measureText(tmpObj.chatMessage);
          mainContext.textBaseline = 'middle', mainContext.textAlign = 'center', tmpX = tmpObj.x - xOffset, tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
          var tmpW = tmpSize.width + 17;
          mainContext.fillStyle = 'rgba(0,0,0,0.2)', mainContext.roundRect(tmpX - tmpW / 2, tmpY - 23.5, tmpW, 47, 6), mainContext.fill(), mainContext.fillStyle =
            '#fff', mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
        }
      }

      var tmpText = (tmpObj.team ? '[' + tmpObj.team + '] ' : '') + tmpObj.name;
      if ('' != tmpText) {
        if (mainContext.font = (tmpObj.nameScale || 30) + 'px Hammersmith One', mainContext.fillStyle = '#fff', mainContext.textBaseline = 'middle', mainContext
          .textAlign = 'center', mainContext.lineWidth = tmpObj
          .nameScale ? 11 : 8, mainContext.lineJoin = 'round', mainContext.strokeText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"]
            .nameY), mainContext.fillText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].nameY), tmpObj.isLeader && iconSprites.crown
          .isLoaded) {
          var tmpS = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].crownIconScale;
          tmpX = tmpObj.x - xOffset - tmpS / 2 - mainContext.measureText(tmpText)
            .width / 2 - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].crownPad, mainContext.drawImage(iconSprites.crown, tmpX, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].nameY - tmpS / 2 - 5, tmpS
              , tmpS);
        }
        1 == tmpObj.iconIndex && iconSprites.skull.isLoaded && (tmpS = _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].crownIconScale, tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(
            tmpText)
          .width / 2 + _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].crownPad, mainContext.drawImage(iconSprites.skull, tmpX, tmpObj.y - yOffset - tmpObj.scale - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].nameY - tmpS / 2 - 5, tmpS
            , tmpS));
      }
      tmpObj.health > 0 && (_config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarWidth, mainContext.fillStyle = darkOutlineColor, mainContext.roundRect(tmpObj.x - xOffset - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarWidth -
          _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarPad, tmpObj.y - yOffset + tmpObj.scale + _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].nameY, 2 * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarWidth + 2 * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarPad, 17, 8), mainContext
        .fill(), mainContext.fillStyle = tmpObj == player || tmpObj.team && tmpObj.team == player.team ? '#8ecc51' : '#cc5151', mainContext.roundRect(tmpObj
          .x - xOffset - _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarWidth, tmpObj.y - yOffset + tmpObj.scale + _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].nameY + _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarPad, 2 * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarWidth * (tmpObj
            .health / tmpObj.maxHealth), 17 - 2 * _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].healthBarPad, 7), mainContext.fill());
    }

  if (player && player.alive) {
    mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height), mapContext.strokeStyle = '#fff', mapContext.lineWidth = 4;

    if (mapContext.globalAlpha = 1, mapContext.fillStyle = '#fff', renderCircle(player.x / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale * mapDisplay.width, player.y / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale *
        mapDisplay.height, 7, mapContext, !0), mapContext.fillStyle = 'rgba(255,255,255,0.35)',  true && minimapData)
      for (i = 0; i < minimapData.length;)
        renderCircle(minimapData[i] / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale * mapDisplay.width, minimapData[i + 1] / _config_js__WEBPACK_IMPORTED_MODULE_4__["default"].mapScale * mapDisplay.height, 7, mapContext, !0), i +=
        2;
  }

  window.requestAnimationFrame(render);
};
render();

window.aJoinReq = aJoinReq;
window.kickFromClan = kickFromClan;
window.sendJoin = sendJoin;
window.leaveAlliance = leaveAlliance;
window.createAlliance = createAlliance;
window.showItemInfo = showItemInfo;
window.selectSkinColor = function (index) {
  skinColor = index, updateSkinColorPicker();
};
window.changeStoreIndex = function (index) {
  currentStoreIndex != index && (currentStoreIndex = index, generateStoreList());
};

document.querySelector("#gameName").innerHTML = "AutoWASM";

document.querySelector("body").insertAdjacentHTML("beforeend", `
<style>
.menuCard, .menuText, .menuHeader {
  background: #222222 !important;
  color: #aaaaaa;
  border-radius: 2px;
  transition: all 1s 0s;
}

.menuCard {
  box-shadow: 0px 7px #888888;
  scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5);
}

.menuCard:hover {
  transform: scale(1.05);
}

#nameInput, #enterGame, #serverBrowser {
  background: #111111 !important;
  outline: none;
}

#mainMenu, #linksContainer2, #linksContainer1 {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  border: 0px !important;
}

#gameName {
  color: black !important;
  text-shadow: 5px 9px 0 #1112 !important;
}

.menuCard {
  width: 325px !important;
  margin: 5px !important;
  padding: 20px !important;
  border: 0px !important;
}

#modMenu {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 2px 2px 12px black;
  height: 290px;
  width: 300px;
  top: 45px;
  left: 45px;
  z-index: 10;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
  color: white;
  transition: all 1s 0s;
  overflow: auto;
  scrollbar-width: none;
}

#modMenu:hover {
  transform: scale(1.05);
  background: rgba(0, 0, 0, 0.8);
}

#wideAdCard, .adMenuCard, #promoImgHolder {
  display: none !important;
  visibility: hidden !important;
}

</style>
`);

const menu = document.createElement("div");
document.documentElement.appendChild(menu);
menu.id = "modMenu";

menu.innerHTML = `
<center> AutoWASM Sync </center> <br>

<input type = "text" placeholder = "Player Username" id = "username_"> <button id = "syncBtn"> Connect </button> <br>

Follow module: <span onclick = "window.follow = !window.follow; this.innerHTML = window.follow ? 'ON' : 'OFF'"> OFF </span> <br>
Bow spamming module: <span onclick = "window.bowspam = !window.bowspam; this.innerHTML = window.bowspam ? 'ON' : 'OFF'"> OFF </span> <br>
Boost Insta Optimisations: <span onclick = "window.boostinsta = !window.boostinsta; this.innerHTML = window.boostinsta ? 'ON' : 'OFF'"> OFF </span> <br>
Tanker mode: <span onclick = "window.tanker = !window.tanker; this.innerHTML = window.tanker ? 'ON' : 'OFF'"> OFF </span> <br> <br> <br>

FZ Autoheal: <span onclick = "window.fz = !window.fz; this.innerHTML = window.fz ? 'ON' : 'OFF'"> OFF </span> <br> <br>

<br> WebSocket Sender <br>
Packet: <input type = "name" id = "packet"> <br>
<button onclick = "window.socket.send(msgpack.encode(JSON.parse(document.getElementById('packet').value)))"> Send </button> <br>
<button onclick = "window.intervalSend ? (clearInterval(window.intervalSend), this.innerHTML = 'Interval Send') : (window.intervalSend = setInterval(() => window.socket.send(msgpack.encode(JSON.parse(document.getElementById('packet').value))), parseInt(prompt('Enter delay'))), this.innerHTML = 'Stop interval')"> Interval Send </button> <br>
<br>

Server tester <br>
Packet Limit tester: <button onclick = "this.innerHTML == 'Start' ? (window.testPacketLimit = true, this.innerHTML = 'Stop') : (window.testPacketLimit = false, this.innerHTML = 'Start')">Start</button> <br>

!connect <username> - Connect to a user to sync with <br>
!disconnect - Disconnect from the user <br>
!bowspam - Start bowspam module <br>
!follow - Follow the player <br>

<div align = "right"> @0xffabc </div>
`;

document.getElementById("syncBtn").onclick = function e() {
  if (this.innerHTML == "Connect") {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "!connect " + document.getElementById("username_").value);
    this.innerHTML = "Disconnect";
  } else if (this.innerHTML == "Disconnect") {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "!disconnect");
    this.innerHTML = "Connect";
  } else {
    _libs_io_client_js__WEBPACK_IMPORTED_MODULE_1__["default"].send(packets.SEND_CHAT, "!connect " + document.getElementById("username_").value);
    this.innerHTML = "Disconnect";
  }
}

})();

/******/ })()
;