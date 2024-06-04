export default function (Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server) {
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
