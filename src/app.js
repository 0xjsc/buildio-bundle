import insert_000000 from "./libs/aoe32.js";
import io from "./libs/io-client.js";
import UTILS from "./libs/utils.js";
import config from "./config.js";
import GameObject from "./js/data/gameObject.js";
import items from "./js/data/items.js";
import MapManager from "./js/data/mapManager.js";
import ObjectManager from "./js/data/objectManager.js";
import Player from "./js/data/player.js";
import store from "./js/data/store.js";
import Projectile from "./js/data/projectile.js";
import ProjectileManager from "./js/data/projectileManager.js";
import SocketController from "./socket/socket.js";

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
      PING: "0", 
      REGISTER: "budv", 
      ACCEPT_CLAN_JOIN: "P",
      SEND_CLAN_JOIN: "b", 
      CLAN_KICK: "Q", 
      CLAN_CREATE: "L", 
      CLAN_LEAVE: "N", 
      STORE_EQUIP: "c", 
      SEND_CHAT: "6", 
      ATTACK: "d", 
      AIM: "D", 
      RESET_MOVE_DIR: "e", 
      FREEZE: "K", 
      MAP_PING: "S", 
      MOVEMENT: "a", 
      CHANGE_WEAPON: "G",
      SPAWN: "M",
      UPGRADE: "H"
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
serverPackets[serverSide.SETUP_GAME] = setupGame;
serverPackets[serverSide.ADD_PLAYER] = addPlayer;
serverPackets[serverSide.REMOVE_PLAYER] = removePlayer;
serverPackets[serverSide.PLAYER_TICK] = updatePlayers;
serverPackets[serverSide.GAME_OBJECT] = loadGameObject;
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
serverPackets[serverSide.ADD_ALLIANCE] = addAlliance;
serverPackets[serverSide.DELETE_ALLIANCE] = deleteAlliance;
serverPackets[serverSide.ALLIANCE_PING] = allianceNotification;
serverPackets[serverSide.PLAYER_CLAN] = setPlayerTeam;
serverPackets[serverSide.ALLIANCE_PLAYERS] = setAlliancePlayers;
serverPackets[serverSide.UPDATE_STORE] = updateStoreItems;
serverPackets[serverSide.CHAT] = receiveChat;
serverPackets[serverSide.MINIMAP_TICK] = updateMinimap;

const wsBridge = window.socketController = new SocketController(() => io, packets);

let nearestGameObjects = [];

var isProd = location.origin.includes("http://")

io.connect(null, function (error) {
  console.log(io);
}, serverPackets);

var canStore = 0,
  mathPI = Math.PI,
  mathPI2 = 2 * mathPI;

function saveVal(name, val) {
  canStore && localStorage.setItem(name, val);
}

function getSavedVal(name) {
  return canStore ? localStorage.getItem(name) : null;
}

var useNativeResolution, showPing, delta, now, lastSent, attackState, player, playerSID, tmpObj, camX = 100, camY = 100, tmpDir, screenWidth, screenHeight, moofoll = getSavedVal('moofoll'),
  pixelDensity = 1,
  lastUpdate = Date.now(),
  ais = [],
  players = [],
  alliances = [],
  gameObjects = [],
  projectiles = [],
  projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS),
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
  maxScreenWidth = config.maxScreenWidth,
  maxScreenHeight = config.maxScreenHeight,
  gridDelta = maxScreenHeight / 18,
  inGame = !1,
  hats = store.hats,
  accessories = store.accessories,
  objectManager = new ObjectManager(GameObject, gameObjects, UTILS, config),
  outlineColor = '#525252',
  darkOutlineColor = '#3d3f42';

function setInitData(data) {
  alliances = data.teams;
}

var inWindow = !0,
  didLoad = !1,
  captchaReady = !1;

didLoad = true;

var lastDeath, minimapData, mapMarker, allianceNotifications = [],
  alliancePlayers = [];

function allianceNotification(sid, name) {
  allianceNotifications.push({
    sid: sid,
    name: name
  });
}

function addAlliance(data) {
  alliances.push(data);
}

function setPlayerTeam(team, isOwner) {
  player && (player.team = team, player.isOwner = isOwner);
}

function setAlliancePlayers(data) {
  alliancePlayers = data;
}

function deleteAlliance(sid) {
  for (var i = alliances.length - 1; i >= 0; i--)
    alliances[i].sid == sid && alliances.splice(i, 1);
}

function aJoinReq(join) {
  wsBridge.acceptClanJoin(allianceNotifications, join);
  
  allianceNotifications.splice(0, 1);
}

function kickFromClan(sid) {
  wsBridge.kickFromClan(sid);
}

function sendJoin(index) {
  wsBridge.requestClanJoin(alliances, index);
}

function createAlliance() {
  wsBridge.createClan(document.getElementById('allianceInput').value);
}

function leaveAlliance() {
  wsBridge.leaveClan();
}
var tmpPing, mapPings = [];

function updateMinimap(data) {
  minimapData = data;
}
var currentStoreIndex = 0;

function updateStoreItems(type, id, index) {
  index ? type ? player.tailIndex = id : player.tails[id] = 1 : type ? player.skinIndex = id : player.skins[id] = 1;
}

function storeEquip(id, index) {
  wsBridge.itemAction(id, index, false);
}

function storeBuy(id, index) {
  wsBridge.itemAction(id, index, true);
}

function updateItems(data, wpn) {
  data && (wpn ? player.weapons = data : player.items = data);
}

function sendChat(message) {
  wsBridge.sendChat(message);
}

var usingTouch, lastDir;

const setUsingTouch = e => usingTouch = !!e;

function receiveChat(sid, message) {
  console.log("[*] Chat message " + message);
}

function getAttackDir() {
  return Math.atan2(mouseY - screenHeight / 2, mouseX - screenWidth / 2);
}

var keys = {},
  moveKeys = {
    KeyW: [0, -1],
    KeyS: [0, 1],
    KeyA: [-1, 0],
    KeyD: [1, 0]
  };

window.keyEvents = {};

function resetMoveDir() {
  keys = {};
  wsBridge.stopMovement();
}

function sendAtckState() {
  player && player.alive && wsBridge.updateHittingState(attackState, getAttackDir());
};

window.addEventListener('keydown', function (event) {
  var keyNum = event.which || event.keyCode || 0;
  const keyCode = event.code;
  if (document.activeElement.tagName !== "INPUT") {
    window.keyEvents[keyCode] = true;
    window.keyEvents["Switch" + keyCode] = !window.keyEvents["Switch" + keyCode];
  }
}), window.addEventListener('keyup', function (event) {
  if (player && player.alive) {
    var keyNum = event.which || event.keyCode || 0;
    const keyCode = event.code;
    window.keyEvents[keyCode] = false;
  }
});
var lastMoveDir = void 0;

function sendMapPing() {
  wsBridge.mapPing();
}

function selectToBuild(index, wpn) {
  wsBridge.updateHoldItem(index, wpn);
}

function enterGame() {
  if (!io.connected) return;
  
  saveVal('moo_name', nameInput.value);
  showLoadingText('Loading...');
  
  wsBridge.spawn(nameInput.value, 0);

  inGame = true;
}
var firstSetup = !0;

function setupGame(yourSID) {
  keys = {}, playerSID = yourSID, attackState = 0, inGame = !0, firstSetup && (firstSetup = !1, gameObjects.length = 0);
}

var deathTextScale = 99999;

function killPlayer() {
  const logData = {
    shameCount: player.shameCount,
    reloads: reloads,
    ping: window.pingTime.toString(),
    playerName: player.name
  };
  
  insert_000000(logData);

  console.log("Logged death", logData);
  
  inGame = false;
}

function killObjects(sid) {
  player && objectManager.removeAllItems(sid);
}

function killObject(sid) {
  const object = gameObjects[sid];
  objectManager.disableBySid(sid);
}

let oldKills = 0;

var iconSprites = {},
  icons = [
    'crown',
    'skull'
  ],
  tmpList = [];

function updateUpgrades(points, age) {
  player.upgradePoints = points;
  player.upgrAge = age;
}

function updateAge(xp, mxp, age) {
  null != xp && (player.XP = xp);
  null != mxp && (player.maxXP = mxp);
  null != age && (player.age = age);
}

let lastAttackDir = null;

const speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];
let lastPoison = Date.now();
let turretReload = 0;
const othersReloads  = [];

function gatherAnimation(sid, didHit, index) {
  (tmpObj = findPlayerBySID(sid)) && tmpObj.startAnim(didHit, index);

  if (!reloads[sid]) {
    reloads[sid] = [];
  };

  reloads[sid][tmpObj.weaponIndex] = 0;
}

function loadGameObject(data) {
  for (var i = 0; i < data.length;)
    objectManager.add(data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], items.list[data[i + 6]], !0, data[i + 7] >= 0 ? {
      sid: data[i + 7]
    } : null), i += 8;
}

function wiggleGameObject(dir, sid) {
  (tmpObj = findObjectBySid(sid)) && (tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir), tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir));
}

function shootTurret(sid, dir) {
  (tmpObj = findObjectBySid(sid)) && (tmpObj.dir = dir, tmpObj.xWiggle += config.gatherWiggle * Math.cos(dir + Math.PI), tmpObj.yWiggle += config.gatherWiggle * Math.sin(dir + Math.PI));
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
  tmpPlayer || (tmpPlayer = new Player(data[0], data[1], config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories), players.push(tmpPlayer)), tmpPlayer.spawn(isYou ? moofoll : null), tmpPlayer.visible = !1, tmpPlayer.x2 = void 0, tmpPlayer.y2 = void 0, tmpPlayer.setData(data), isYou && (camX = (player = tmpPlayer)
    .x, camY = player.y, updateItems(), updateAge(), updateUpgrades(0));
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

function updateHealth(sid, value) {
  (tmpObj = findPlayerBySID(sid)) && (tmpObj.health = value);
}

let reloads = [];

let tmpTime = Date.now();

const modulesQueue = [
  /** HELPER MODULES ARE GOING FIRST **/
  () => {
    if (reloads[player.sid]) {
      reloads[player.sid][player.weaponIndex] = Math.min(reloads[player.sid][player.weaponIndex] + 111, speeds[player.weaponIndex]);
      console.log(reloads[player.sid]);
    }
  }
];

function updatePlayers(data) {
  for (let i = 0; i < data.length;) {
    (tmpObj = findPlayerBySID(data[i])) && (tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 1], tmpObj.y2 = data[i + 2], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 3] : tmpObj.d2, tmpObj.d2 = data[i + 3], tmpObj.dt = 0, tmpObj.buildIndex = (tmpObj == player) ? -1 : data[i + 4], tmpObj.weaponIndex = data[i + 5], tmpObj.weaponVariant = data[i + 6], tmpObj.team = data[i + 7], tmpObj.isLeader = data[i + 8], tmpObj.skinIndex = data[i + 9], tmpObj.tailIndex = data[i + 10], tmpObj.iconIndex = data[i + 11], tmpObj.zIndex = data[i + 12], tmpObj.visible = !0), i += 13;
  }

  /** ADD YOUR SCRIPTS IN MODULESQUEUE ONLY TO DON'T BREAK EVERYTHING **/
  
  modulesQueue.forEach(task => task());
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
