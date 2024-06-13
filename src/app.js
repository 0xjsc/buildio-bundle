import insert_000000 from "./libs/aoe32.js";
import io from "./libs/io-client.js";
import UTILS from "./libs/utils.js";
import animText from "./libs/animText.js";
import config from "./config.js";
import GameObject from "./js/data/gameObject.js";
import items from "./js/data/items.js";
import MapManager from "./js/data/mapManager.js";
import ObjectManager from "./js/data/objectManager.js";
import Player from "./js/data/player.js";
import store from "./js/data/store.js";
import Projectile from "./js/data/projectile.js";
import ProjectileManager from "./js/data/projectileManager.js";
import AiManager from "./js/data/aiManager.js";
import AI from "./js/data/ai.js";
import VultrServer from "./vultr/VultrSeeker.js";
import Dialog from "./libs/alert.js";
import SocketController from "./socket/socket.js";

const serverPackets = {};
const eventsListener = location.href.includes("mohmoh") ? document.getElementById("gameCanvas") : document.getElementById("touch-controls-fullscreen");
const { log } = console;

let packets, serverSide;

const hit360 = Number(
  199871592653589792171177631498931686031281669589442211709791690215455978209410508293026261119265370230936153240360026347462449376754846791234307902747653227578310433809475993341322854294818292437842268106508769947533062086396136846277710511436997007404745373491372264259584n
);

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

const wsBridge = window.socketController = new SocketController(() => io, packets);
const textManager = new animText.TextManager();

let nearestGameObjects = [];

var isProd = location.origin.includes("http://")

connectSocket();

const wsLogs = [];

function connectSocket() {
  io.connect(wsAddress, function (error) {
    console.log("[*] Socket was hooked!", io);
  }, serverPackets);
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
  projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS),
  aiManager = new AiManager(ais, AI, players, items, null, config, UTILS),
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
  diedText = document.getElementById('diedText'),
  skinColorHolder = document.getElementById('skinColorHolder');
  var storeMenu = document.getElementById('storeMenu'),
  storeHolder = document.getElementById('storeHolder'),
  noticationDisplay = document.getElementById('noticationDisplay'),
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

async function disconnect(reason) {
  enterGameButton.innerHTML = "Disconnected";
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
    if (UTILS.removeAllChildren(itemInfoHolder), itemInfoHolder.classList.add('visible'), UTILS.generateElement({
        id: 'itemInfoName',
        text: UTILS.capitalizeFirst(item.name),
        parent: itemInfoHolder
      }), UTILS.generateElement({
        id: 'itemInfoDesc',
        text: item.desc,
        parent: itemInfoHolder
      }), isStoreItem);
    else if (isWeapon)
    UTILS.generateElement({
      class: 'itemInfoReq',
      text: item.type ? 'secondary' : 'primary',
      parent: itemInfoHolder
    });
  else {
    for (var i = 0; i < item.req.length; i += 2)
      UTILS.generateElement({
        class: 'itemInfoReq',
        html: item.req[i] + '<span class=\'itemInfoReqVal\'> x' + item.req[i + 1] + '</span>',
        parent: itemInfoHolder
      });
    item.group.limit && UTILS.generateElement({
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
    UTILS.removeAllChildren(noticationDisplay), noticationDisplay.style.display = 'block', UTILS.generateElement({
      class: 'notificationText',
      text: tmpN.name,
      parent: noticationDisplay
    }), UTILS.generateElement({
      class: 'notifButton',
      html: '<i class=\'material-icons\' style=\'font-size:28px;color:#cc5151;\'>&#xE14C;</i>',
      parent: noticationDisplay,
      onclick: function () {
        aJoinReq(0);
      },
      hookTouch: !0
    }), UTILS.generateElement({
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
    if (closeChat(), storeMenu.style.display = 'none', allianceMenu.style.display = 'block', UTILS.removeAllChildren(allianceHolder), player.team)
      for (var i = 0; i < alliancePlayers.length; i += 2)
        ! function (i) {
          var tmp = UTILS.generateElement({
            class: 'allianceItem',
            style: 'color:' + (alliancePlayers[i] == player.sid ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: alliancePlayers[i + 1],
            parent: allianceHolder
          });
          player.isOwner && alliancePlayers[i] != player.sid && UTILS.generateElement({
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
          var tmp = UTILS.generateElement({
            class: 'allianceItem',
            style: 'color:' + (alliances[i].sid == player.team ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: alliances[i].sid,
            parent: allianceHolder
          });
          UTILS.generateElement({
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
      UTILS.generateElement({
        class: 'allianceItem',
        text: 'No Tribes Yet',
        parent: allianceHolder
      });
    UTILS.removeAllChildren(allianceManager), player.team ? UTILS.generateElement({
      class: 'allianceButtonM',
      style: 'width: 360px',
      text: player.isOwner ? 'Delete Tribe' : 'Leave Tribe',
      onclick: function () {
        leaveAlliance();
      },
      hookTouch: !0,
      parent: allianceManager
    }) : (UTILS.generateElement({
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
    }), UTILS.generateElement({
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
  wsBridge.acceptClanJoin(allianceNotifications, join);
  
  allianceNotifications.splice(0, 1);
  updateNotifications();
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

let waka = 0; // sorry for bad variable name

function leaveAlliance() {
  allianceNotifications = [];
  updateNotifications();
  wsBridge.leaveClan();
}
var tmpPing, mapPings = [];

function pingMap(x, y) { }

function updateMinimap(data) {
  minimapData = data;
}
var currentStoreIndex = 0;

function updateStoreItems(type, id, index) {
  index ? type ? player.tailIndex = id : player.tails[id] = 1 : type ? player.skinIndex = id : player.skins[id] = 1, 'block' == storeMenu.style.display && generateStoreList();
}

function generateStoreList() {
  if (player) {
    UTILS.removeAllChildren(storeHolder);
    for (var index = currentStoreIndex, tmpArray = index ? accessories : hats, i = 0; i < tmpArray.length; ++i)
      tmpArray[i].dontSell || function (i) {
        var tmp = UTILS.generateElement({
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
        UTILS.hookTouchEvents(tmp, !0), UTILS.generateElement({
          tag: 'img',
          class: 'hatPreview',
          src: '../img/' + (index ? 'accessories/access_' : 'hats/hat_') + tmpArray[i].id + (tmpArray[i].topSprite ? '_p' : '') + '.png',
          parent: tmp
        }), UTILS.generateElement({
          tag: 'span',
          text: tmpArray[i].name,
          parent: tmp
        }), (index ? player.tails[tmpArray[i].id] : player.skins[tmpArray[i].id]) ? (index ? player.tailIndex : player.skinIndex) == tmpArray[i].id ? UTILS.generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Unequip',
          onclick: function () {
            storeEquip(0, index);
          },
          hookTouch: !0,
          parent: tmp
        }) : UTILS.generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Equip',
          onclick: function () {
            storeEquip(tmpArray[i].id, index);
          },
          hookTouch: !0,
          parent: tmp
        }) : (UTILS.generateElement({
          class: 'joinAlBtn',
          style: 'margin-top: 5px',
          text: 'Buy',
          onclick: function () {
            storeBuy(tmpArray[i].id, index);
          },
          hookTouch: !0,
          parent: tmp
        }), UTILS.generateElement({
          tag: 'span',
          class: 'itemPrice',
          text: tmpArray[i].price,
          parent: tmp
        }));
      }(i);
  }
}

function storeEquip(id, index) {
  wsBridge.itemAction(id, index, false);
}

function storeBuy(id, index) {
  wsBridge.itemAction(id, index, true);
}

function hideAllWindows() {
  storeMenu.style.display = 'none', allianceMenu.style.display = 'none', closeChat();
}

function updateItems(data, wpn) {
  data && (wpn ? player.weapons = data : player.items = data);
  for (var i = 0; i < items.list.length; ++i) {
    var tmpI = items.weapons.length + i;
    document.getElementById('actionBarItem' + tmpI)
      .style.display = player.items.indexOf(items.list[i].id) >= 0 ? 'inline-block' : 'none';
  }
  for (i = 0; i < items.weapons.length; ++i)
    document.getElementById('actionBarItem' + i)
    .style.display = player.weapons[items.weapons[i].type] == items.weapons[i].id ? 'inline-block' : 'none';
}

function setUseNativeResolution(useNative) { }

function updateSkinColorPicker() { }
var chatBox = document.getElementById('chatBox'),
  chatHolder = document.getElementById('chatHolder');

function toggleChat() { }

function sendChat(message) {
  wsBridge.sendChat(message);
}

function closeChat() { }
var usingTouch, lastDir;

function receiveChat(sid, message) { }

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

eventsListener.addEventListener('mousemove', function (e) {
  e.preventDefault(), e.stopPropagation(), setUsingTouch(!1), mouseX = e.clientX, mouseY = e.clientY;
});
eventsListener.addEventListener('mousedown', function (e) {
  aimOverride = false;
  setUsingTouch(!1), 1 != attackState && (attackState = 1, sendAtckState());
  touch = e.button == 0;
  waka = touch ? player.weapons[0] : (10 == player.weapons[1] ? 10 : player.weapons[0]);
});
eventsListener.addEventListener('mouseup', function (e) {
  setUsingTouch(!1), 0 != attackState && (attackState = 0, sendAtckState());
});

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
  keys = {};
  wsBridge.stopMovement();
}

function keysActive() {
  return 'block' != allianceMenu.style.display && 'block' != chatHolder.style.display;
}

function sendAtckState() {
  player && player.alive && wsBridge.updateHittingState(attackState, getAttackDir());
};

window.addEventListener('keydown', UTILS.checkTrusted(function (event) {
  var keyNum = event.which || event.keyCode || 0;
  const keyCode = event.code;
  if (document.activeElement.tagName !== "INPUT") {
    window.keyEvents[keyCode] = true;
    window.keyEvents["Switch" + keyCode] = !window.keyEvents["Switch" + keyCode];
  }
  "Escape" == keyCode ? hideAllWindows() : player && player.alive && keysActive() && (keys[keyCode] || (keys[keyCode] = 1, "KeyX" == keyCode ? wsBridge.freeze(true) : "KeyC" == keyCode ? (mapMarker || (mapMarker = {}), mapMarker.x = player.x, mapMarker.y = player.y) : "KeyZ" == keyCode ? (player.lockDir = player.lockDir ? 0 : 1, wsBridge.freeze(false)) : null != player.weapons[keyNum - 49] ? selectToBuild(player.weapons[keyNum - 49], !0) : null != player.items[keyNum - 49 - player.weapons.length] ? selectToBuild(player.items[keyNum - 49 - player.weapons.length]) : 81 == keyNum ? selectToBuild(player.items[0]) : "KeyR" == keyCode ? sendMapPing() : moveKeys[keyCode] ? sendMoveDir() : "Space" == keyCode && (attackState = 1, sendAtckState())));
})), window.addEventListener('keyup', UTILS.checkTrusted(function (event) {
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
    return 0 == dx && 0 == dy ? void 0 : UTILS.fixTo(Math.atan2(dy, dx), 2);
  }();
  (null == lastMoveDir || null == newMoveDir || Math.abs(newMoveDir - lastMoveDir) > 0.3) && (wsBridge.updateMoveDir(newMoveDir), (!window.enemyDanger && !instakilling) && (storeEquip(window.tanker ? 15 : (player.y <= config.snowBiomeTop ? 6 : 11), true), storeEquip(window.tanker ? 6 : getBiomeHat())), lastMoveDir = newMoveDir);
}

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
  
  inGame = !1,
}

function killObjects(sid) {
  player && objectManager.removeAllItems(sid);
}

function killObject(sid) {
  const object = gameObjects[sid];
  objectManager.disableBySid(sid);
  players.find(e => e.sid != player.sid && Math.hypot(player.x - e.x, player.y - e.y) < 180) && autoplace(object, true);
}

let oldKills = 0;

function updateStatusDisplay() { }
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
  null != xp && (player.XP = xp), null != mxp && (player.maxXP = mxp), null != age && (player.age = age), age == config.maxAge ? (ageText.innerHTML = 'MAX AGE', ageBarBody.style.width = '100%') : (ageText.innerHTML = 'AGE ' + player.age, ageBarBody.style.width = player.XP / player.maxXP * 100 + '%');
}

function updateLeaderboard(data) {
  UTILS.removeAllChildren(leaderboardData);
  for (var tmpC = 1, i = 0; i < data.length; i += 3)
    ! function (i) {
      UTILS.generateElement({
        class: 'leaderHolder',
        parent: leaderboardData,
        children: [
          UTILS.generateElement({
            class: 'leaderboardItem',
            style: 'color:' + (data[i] == playerSID ? '#fff' : 'rgba(255,255,255,0.6)'),
            text: tmpC + '. ' + ('' != data[i + 1] ? data[i + 1] : 'unknown')
          }),
          UTILS.generateElement({
            class: 'leaderScore',
            text: UTILS.kFormat(data[i + 2]) || '0'
          })
        ]
      });
    }(i), tmpC++;
}
let lastAttackDir = null;

const speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];
let lastPoison = Date.now();
let turretReload = 0;
const othersReloads  = [];

function getBiomeHat() {

  if (window.tanker) 
    return 6;
  
  const biomeID = player.y >= config.mapScale - config.snowBiomeTop ? 2 : player.y <= config.snowBiomeTop ? 1 : 0;

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
    wsBridge.updateHittingState(true, players.find(p => p && p?.sid == ownerSid).dir); 
  }
  
  if (sid == player.sid) reloads[waka] = 0;
  else (othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] = 0;
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

function loadAI(data) {
  for (var i = 0; i < ais.length; ++i)
    ais[i].forcePos = !ais[i].visible, ais[i].visible = !1;
  if (data) {
    var tmpTime = Date.now();
    for (i = 0; i < data.length;)
      (tmpObj = findAIBySID(data[i])) ? (tmpObj.index = data[i + 1], tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 2], tmpObj.y2 = data[i + 3], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 4] : tmpObj.d2, tmpObj.d2 = data[i + 4], tmpObj.health = data[i + 5], tmpObj.dt = 0, tmpObj.visible = !0) : ((tmpObj = aiManager.spawn(data[i + 2], data[i + 3], data[i + 4], data[i + 1]))
        .x2 = tmpObj.x, tmpObj.y2 = tmpObj.y, tmpObj.d2 = tmpObj.dir, tmpObj.health = data[i + 5], aiManager.aiTypes[data[i + 1]]?.name || (tmpObj.name = "Sheep"), tmpObj.forcePos = !0, tmpObj.sid = data[i], tmpObj.visible = !0), i += 7;
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
  tmpPlayer || (tmpPlayer = new Player(data[0], data[1], config, UTILS, projectileManager, objectManager, players, ais, items, hats, accessories), players.push(tmpPlayer)), tmpPlayer.spawn(isYou ? moofoll : null), tmpPlayer.visible = !1, tmpPlayer.x2 = void 0, tmpPlayer.y2 = void 0, tmpPlayer.setData(data), isYou && (camX = (player = tmpPlayer)
    .x, camY = player.y, updateItems(), updateStatusDisplay(), updateAge(), updateUpgrades(0), gameUI.style.display = 'block');
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
    return 0 == dx && 0 == dy ? void 0 : UTILS.fixTo(Math.atan2(dy, dx), 2);
  }();
  return newMoveDir;
}

let reloads = [];

const sxw = 1920 / 2;
const sxh = 1080 / 2;
let tmpTime = Date.now();
let serverLag = 0;
let average = 111;
let current = 111;
let aimOverride = false;

const benchmarks = {
  AutoBreak: 0,
  AntiInsta: 0,
  AutoHeal: 0,
  AutoReload: 0,
  Macros: 0,
  Placers: 0,
  ItemController: 0
}

const modulesQueue = [
  /** HELPER MODULES ARE GOING FIRST **/
  () => {
    nearestGameObjects = gameObjects.filter(object => {
      if (!object?.x) return;

      if (!isOnScreen(object?.x - xOffset, object?.y - yOffset, 45)) return;
      
      return true;
    });
  }
];

let attackDir = 0, tmp_Dir = 0, camSpd = 0;
let lastPing_ = Date.now();

function updatePlayers(data) {
  for (let i = 0; i < data.length;) {
    (tmpObj = findPlayerBySID(data[i])) && (tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 1], tmpObj.y2 = data[i + 2], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 3] : tmpObj.d2, tmpObj.d2 = data[i + 3], tmpObj.dt = 0, tmpObj.buildIndex = (tmpObj == player) ? -1 : data[i + 4], tmpObj.weaponIndex = data[i + 5], tmpObj.weaponVariant = data[i + 6], tmpObj.team = data[i + 7], tmpObj.isLeader = data[i + 8], tmpObj.skinIndex = data[i + 9], tmpObj.tailIndex = data[i + 10], tmpObj.iconIndex = data[i + 11], tmpObj.zIndex = data[i + 12], tmpObj.visible = !0), i += 13;
  }

  if (!player?.health) return;

  /** ADD YOUR SCRIPTS IN MODULESQUEUE ONLY TO DON'T BREAK EVERYTHING **/
  
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
  lastPing = Date.now();
  wsBridge.pingServer();
}

function serverShutdownNotice(countdown) { }

function openLink(link) {
  window.open(link, '_blank');
}

document.querySelector("#gameName").innerHTML = "moomoo";
