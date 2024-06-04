var LangFilter = new require("bad-words");
const langFilter = new LangFilter;
langFilter.addWords('jew', 'black', 'baby', 'child', 'white', 'porn', 'pedo', 'trump', 'clinton', 'hitler', 'nazi', 'gay', 'pride', 'sex', 'pleasure', 'touch', 'poo', 'kids', 'rape', 'white power', 'nigga', 'nig nog', 'doggy', 'rapist', 'boner', 'nigger', 'nigg', 'finger', 'nogger', 'nagger', 'nig', 'fag', 'gai', 'pole', 'stripper', 'penis', 'vagina', 'pussy', 'nazi', 'hitler', 'stalin', 'burn', 'chamber', 'cock', 'peen', 'dick', 'spick', 'nieger', 'die', 'satan', 'n|ig', 'nlg', 'cunt', 'c0ck', 'fag', 'lick', 'condom', 'anal', 'shit', 'phile', 'little', 'kids', 'free KR', 'tiny', 'sidney', 'ass', 'kill', '.io', '(dot)', '[dot]', 'mini', 'whiore', 'whore', 'faggot', 'github', '1337', '666', 'satan', 'senpa', 'discord', 'd1scord', 'mistik', '.io', 'senpa.io', 'sidney', 'sid', 'senpaio', 'vries', 'asa');
var mathABS = Math.abs,
  mathCOS = Math.cos,
  mathSIN = Math.sin,
  mathPOW = Math.pow,
  mathSQRT = Math.sqrt;
export default function (id, sid, config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories, server, scoreCallback, iconCallback) {
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
      this.name = 'unknown';
      var name = data.name + '',
        isProfane = !1,
        convertedName = (name = (name = (name = (name = name.slice(0, config.maxNameLength))
              .replace(/[^\w:\(\)\/? -]+/gim, ' '))
            .replace(/[^\x00-\x7F]/g, ' '))
          .trim())
        .toLowerCase()
        .replace(/\s/g, '')
        .replace(/1/g, 'i')
        .replace(/0/g, 'o')
        .replace(/5/g, 's');
      for (var word of langFilter.list)
        if (-1 != convertedName.indexOf(word)) {
          isProfane = !0;
          break;
        }
      name.length > 0 && !isProfane && (this.name = name), this.skinColor = 0, config.skinColors[data.skin] && (this.skinColor = data.skin);
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
    for (var i = 0; i < item.req.length;) {
      if (this[item.req[i]] < Math.round(item.req[i + 1] * (mult || 1)))
        return !1;
      i += 2;
    }
    return !0;
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
