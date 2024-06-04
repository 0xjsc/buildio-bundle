export default function (ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {
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
