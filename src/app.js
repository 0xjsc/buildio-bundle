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
let antiSpikeSync = false;

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
serverPackets[serverSide.SHOW_TEXT] = showText;

const wsBridge = window.socketController = new SocketController(() => io, packets);
const textManager = new animText.TextManager();

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

const versionHash = "1.6-Omicron";
const changelog = "Fixes...";
const motionBlurLevel = 0.6;
let instakilling = false;

let offsetCamX = 0;
let offsetCamY = 0;
let deltaHold = 10;
let ownerSid = null;
let autoclicker = false;
let placerr = [];

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

const recaptchaOpt = {
  action: "homepage"
};

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
  const element = Dialog(`<h2> AutoWASM has been updated to version ${versionHash}! </h2> <br> ${changelog}`);
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

async function connectSocketIfReady() {
  if (startedConnecting || !grecaptcha?.ready) return;
  startedConnecting = true;

  log("[*] Waiting for grecaptcha ready...");

  await new Promise(grecaptcha.ready);

  log("[*] Generating grecaptcha token...");
  
  const token = await grecaptcha.execute(getToken(), recaptchaOpt);
  log("[*] Generated token " + token);
  const server = await VultrServer();
  const prefix = location.href.includes("moomoo") ? "re:" : "";
  
  connectSocket(prefix + token, server);
}

window.captchaCallback = connectSocketIfReady;
window.onload = connectSocketIfReady;
window.grecaptcha?.ready && connectSocketIfReady();

const wsLogs = [];

function connectSocket(token, server = location.host) {
  var wsAddress = (isProd ? "ws" : "wss") + '://' + server + (server.includes("mohmohx") ? "" : ("/?token=" + token));

  console.log("Calling io connect on " + wsAddress);
  
  window.socket = top.socket = io;
  
  io.connect(wsAddress, function (error) {
    if (location.href.includes("mohmoh"))
      wsBridge.register();
    
    wsBridge.pingServer(); (error !== "Invalid Connection" && error) ? disconnect(error) : (loadingText.style.display = 'none', menuCardHolder.style.display = 'block', document.getElementById("enterGame").onclick = UTILS.checkTrusted(function () {
      enterGame();
    }), joinPartyButton.onclick = UTILS.checkTrusted(function () {
      var currentKey = serverBrowser.value,
        key = prompt('party key', currentKey);
      key && (window.onbeforeunload = void 0, window.location.href = '/?server=' + key);
    }), settingsButton.onclick = UTILS.checkTrusted(function () {
      guideCard.classList.contains('showing') ? (guideCard.classList.remove('showing'), settingsButtonTitle.innerText = 'Settings') : (guideCard.classList.add('showing'), settingsButtonTitle.innerText = 'Close');
    }), allianceButton.onclick = UTILS.checkTrusted(function () {
      resetMoveDir(), 'block' != allianceMenu.style.display ? showAllianceMenu() : allianceMenu.style.display = 'none';
    }), storeButton.onclick = UTILS.checkTrusted(function () {
      'block' != storeMenu.style.display ? (storeMenu.style.display = 'block', allianceMenu.style.display = 'none', closeChat(), generateStoreList()) : storeMenu.style.display = 'none';
    }), chatButton.onclick = UTILS.checkTrusted(function () {
      toggleChat();
    }), function () {
      for (var i = 0; i < icons.length; ++i) {
        var tmpSprite = new Image();
        tmpSprite.onload = function () {
          this.isLoaded = !0;
        }, tmpSprite.src = '.././img/icons/' + icons[i] + '.png', iconSprites[icons[i]] = tmpSprite;
      }
    }(), nameInput.value = getSavedVal('moo_name') || '', function () {
      var savedNativeValue = getSavedVal('native_resolution') || true;
      setUseNativeResolution(savedNativeValue ? 'true' == savedNativeValue : 'undefined' != typeof cordova), showPing = 'true' == getSavedVal('show_ping'), pingDisplay.hidden = !showPing, getSavedVal('moo_moosic'), updateSkinColorPicker(), UTILS.removeAllChildren(actionBar);
      for (var i = 0; i < items.weapons.length + items.list.length; ++i)
        ! function (i) {
          UTILS.generateElement({
            id: 'actionBarItem' + i,
            class: 'actionBarItem',
            style: 'display:none',
            onmouseout: function () {
              showItemInfo();
            },
            parent: actionBar
          });
        }(i);
      for (i = 0; i < items.list.length + items.weapons.length; ++i)
        ! function (i) {
          var tmpCanvas = document.createElement('canvas');
          tmpCanvas.width = tmpCanvas.height = 66;
          var tmpContext = tmpCanvas.getContext('2d');
          if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.imageSmoothingEnabled = !1, tmpContext.webkitImageSmoothingEnabled = !1, tmpContext.mozImageSmoothingEnabled = !1, items.weapons[i]) {
            tmpContext.rotate(Math.PI / 4 + Math.PI);
            var tmpSprite = new Image();
            toolSprites[items.weapons[i].src] = tmpSprite, tmpSprite.onload = function () {
                this.isLoaded = !0;
                var tmpPad = 1 / (this.height / this.width),
                  tmpMlt = items.weapons[i].iPad || 1;
                tmpContext.drawImage(this, -tmpCanvas.width * tmpMlt * config.iconPad * tmpPad / 2, -tmpCanvas.height * tmpMlt * config.iconPad / 2, tmpCanvas.width * tmpMlt * tmpPad * config.iconPad, tmpCanvas.height * tmpMlt * config.iconPad), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpCanvas.width / 2, -tmpCanvas.height / 2, tmpCanvas.width, tmpCanvas.height), document.getElementById('actionBarItem' + i)
                  .style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')';
              }, tmpSprite.src = '.././img/weapons/' + items.weapons[i].src + '.png', (tmpUnit = document.getElementById('actionBarItem' + i))
              .onmouseover = UTILS.checkTrusted(function () {
                showItemInfo(items.weapons[i], !0);
              }), tmpUnit.onclick = UTILS.checkTrusted(function () {
                selectToBuild(i, !0);
              }), UTILS.hookTouchEvents(tmpUnit);
          } else {
            tmpSprite = getItemSprite(items.list[i - items.weapons.length], !0);
            var tmpUnit, tmpScale = Math.min(tmpCanvas.width - config.iconPadding, tmpSprite.width);
            tmpContext.globalAlpha = 1, tmpContext.drawImage(tmpSprite, -tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), tmpContext.fillStyle = 'rgba(0, 0, 70, 0.1)', tmpContext.globalCompositeOperation = 'source-atop', tmpContext.fillRect(-tmpScale / 2, -tmpScale / 2, tmpScale, tmpScale), document.getElementById('actionBarItem' + i)
              .style.backgroundImage = 'url(' + tmpCanvas.toDataURL() + ')', (tmpUnit = document.getElementById('actionBarItem' + i))
              .onmouseover = UTILS.checkTrusted(function () {
                showItemInfo(items.list[i - items.weapons.length]);
              }), tmpUnit.onclick = UTILS.checkTrusted(function () {
                selectToBuild(i - items.weapons.length);
              }), UTILS.hookTouchEvents(tmpUnit);
          }
        }(i);
      nameInput.ontouchstart = UTILS.checkTrusted(function (e) {
        e.preventDefault();
        var newValue = prompt('enter name', e.currentTarget.value);
        newValue && (e.currentTarget.value = newValue.slice(0, 15));
      }), nativeResolutionCheckbox.checked = useNativeResolution, nativeResolutionCheckbox.onchange = UTILS.checkTrusted(function (e) {
        setUseNativeResolution(e.target.checked);
      }), showPingCheckbox.checked = showPing, showPingCheckbox.onchange = UTILS.checkTrusted(function (e) {
        showPing = showPingCheckbox.checked, pingDisplay.hidden = !showPing, saveVal('show_ping', showPing ? 'true' : 'false');
      });
    }());
  }, serverPackets), setupServerStatus(), updateServerList();
};
if (location.href.includes("render")) connectSocket("");
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
  (enterGameButton || gameName).innerHTML = "Disconnected";
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
  //var altServerText, altServerURL, tmpHTML = '',
  //  overallTotal = 0;
  //tmpHTML += '<option disabled>This feature has been disabled</option>';
  //serverBrowser.innerHTML = tmpHTML;
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

function setUseNativeResolution(useNative) {
  useNativeResolution = useNative, pixelDensity = useNative && window.devicePixelRatio || 1, nativeResolutionCheckbox.checked = useNative, saveVal('native_resolution', useNative.toString()), resize();
}

function updateSkinColorPicker() {
  for (var tmpHTML = '', i = 0; i < config.skinColors.length; ++i)
    tmpHTML += i == skinColor ? '<div class=\'skinColorItem activeSkin\' style=\'background-color:' + config.skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>' : '<div class=\'skinColorItem\' style=\'background-color:' + config.skinColors[i] + '\' onclick=\'selectSkinColor(' + i + ')\'></div>';
  skinColorHolder.innerHTML = tmpHTML;
}
var chatBox = document.getElementById('chatBox'),
  chatHolder = document.getElementById('chatHolder');

function toggleChat() {
  'block' == chatHolder.style.display ? (chatBox.value && sendChat(chatBox.value), closeChat()) : (storeMenu.style.display = 'none', allianceMenu.style.display = 'none', chatHolder.style.display = 'block', chatBox.focus(), resetMoveDir()), chatBox.value = '';
}

function sendChat(message) {
  wsBridge.sendChat(message);
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
    wsBridge.sendChat("AutoWASM By 0xffabc.");
  } else if (message.startsWith("!connect") && player.sid == tmpPlayer.sid) {
    const playerName = message.split("!connect ")[1];
    wsBridge.createClan(clanNames[Math.floor(clanNames.length * Math.random())]);
    ownerSid = players.find(e => e && e?.name == playerName)?.sid;
    if (ownerSid) {
      setTimeout(() => wsBridge.sendChat("[*] Successfully connected to " + playerName + "!"), 1000);
    } else setTimeout(() => wsbridge.sendChat("[*] Connection failed!"), 1000);
  } else if (message.startsWith("!disconnect") && (player.sid == tmpPlayer.sid || tmpPlayer.sid == ownerSid)) {
    ownerSid = player.sid;
    setTimeout(() => wsBridge.sendChat("[*] Successfully disconnected"), 1000);
  } else if (tmpPlayer.sid == ownerSid || tmpPlayer.sid == player.sid) {
    switch (message) {
      case "!follow":
        setTimeout(() => wsBridge.sendChat(`[*] ${window.follow ? "Enabling" : "Disabling"} follow module!`), 1000);
        window.follow = !window.follow;
        break;
      case "!bowspam":
        setTimeout(() => wsBridge.sendChat(`[*] ${window.bowspam ? "Enabling" : "Disabling"} bowspam module!`), 1000);
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
  }(message), tmpPlayer.chatCountdown = config.chatCountdown);
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
window.addEventListener('resize', UTILS.checkTrusted(resize)), resize(), setUsingTouch(!1), window.setUsingTouch = setUsingTouch, window.addEventListener('touchmove', UTILS.checkTrusted(function (ev) {
  if (ev.toElement.id !== "gameCanvas" &&
     ev.toElement.id !== "touch-controls-fullscreen") return;
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.identifier == controllingTouch.id ? (controllingTouch.currentX = t.pageX, controllingTouch.currentY = t.pageY, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.currentX = t.pageX, attackingTouch.currentY = t.pageY, attackState = 1);
  }
}), !1), window.addEventListener('touchstart', UTILS.checkTrusted(function (ev) {
  if (ev.toElement.id !== "gameCanvas" &&
    ev.toElement.id !== "touch-controls-fullscreen") return;
  if (!inGame)
    return ev.preventDefault(), !1;
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.pageX < document.body.scrollWidth / 2 && -1 == controllingTouch.id ? (controllingTouch.id = t.identifier, controllingTouch.startX = controllingTouch.currentX = t.pageX, controllingTouch.startY = controllingTouch.currentY = t.pageY, sendMoveDir()) : t.pageX > document.body.scrollWidth / 2 && -1 == attackingTouch.id && (attackingTouch.id = t.identifier, attackingTouch.startX = attackingTouch.currentX = t.pageX, attackingTouch.startY = attackingTouch.currentY = t.pageY, player.buildIndex < 0 && (attackState = 1, sendAtckState()));
  }
}), false), window.addEventListener('touchend', UTILS.checkTrusted(touchEnd), !1), window.addEventListener('touchcancel', UTILS.checkTrusted(touchEnd), !1), window.addEventListener('touchleave', UTILS.checkTrusted(touchEnd), !1), document.addEventListener('mousemove', function (e) {
  e.preventDefault(), e.stopPropagation(), setUsingTouch(!1), mouseX = e.clientX, mouseY = e.clientY;
}, false), document.addEventListener('mousedown', function (e) {
  if (e.toElement.id !== "gameCanvas" &&
    e.toElement.id !== "touch-controls-fullscreen") return;
  aimOverride = false;
  setUsingTouch(!1), 1 != attackState && (attackState = 1, sendAtckState());
  touch = e.button == 0;
  waka = touch ? player.weapons[0] : (10 == player.weapons[1] ? 10 : player.weapons[0]);
}, false), document.addEventListener('mouseup', function (e) {
  if (e.toElement.id !== "gameCanvas" &&
    e.toElement.id !== "touch-controls-fullscreen") return;
  setUsingTouch(!1), 0 != attackState && (attackState = 0, sendAtckState());
}, false);
document.addEventListener("wheel", function (e) {
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
  
  insert_000000(logData);

  console.log("Logged death", logData);
  
  inGame = !1,

  gameUI.style.display = 'none', hideAllWindows(), lastDeath = {
    x: player.x,
    y: player.y
  }, loadingText.style.display = 'none', diedText.style.display = 'block', diedText.style.fontSize = '0px', deathTextScale = 0, setTimeout(function () {
    menuCardHolder.style.display = 'block', mainMenu.style.display = 'block', diedText.style.display = 'none';
  }, config.deathFadeout), updateServerList();
}

function killObjects(sid) {
  player && objectManager.removeAllItems(sid);
}

function killObject(sid) {
  const object = gameObjects[sid];
  objectManager.disableBySid(sid);
  players.find(e => e.sid != player.sid && Math.hypot(player.x - e.x, player.y - e.y) < items.weapons[player.weaponIndex].range + config.playerScale) && autoplace(object, true);
}

let oldKills = 0;

function updateStatusDisplay() {
  scoreDisplay.innerText = player.points;
  foodDisplay.innerText = player.food;
  woodDisplay.innerText = player.wood;
  stoneDisplay.innerText = player.stone;
  killCounter.innerText = player.kills;

  if (oldKills++ < player.kills) {
    wsBridge.sendChat("жди докс крч");
  }
}
var iconSprites = {},
  icons = [
    'crown',
    'skull'
  ],
  tmpList = [];

function updateUpgrades(points, age) {
  if (player.upgradePoints = points, player.upgrAge = age, points > 0) {
    tmpList.length = 0, UTILS.removeAllChildren(upgradeHolder);
    for (var i = 0; i < items.weapons.length; ++i)
      items.weapons[i].age == age && (null == items.weapons[i].pre || true || 0) && (UTILS.generateElement({
          id: 'upgradeItem' + i,
          class: 'actionBarItem',
          onmouseout: function () {
            showItemInfo();
          },
          parent: upgradeHolder
        })
        .style.backgroundImage = document.getElementById('actionBarItem' + i)
        .style.backgroundImage, tmpList.push(i));
    for (i = 0; i < items.list.length; ++i)
      if (items.list[i].age == age && (null == items.list[i].pre || true || 0)) {
        var tmpI = items.weapons.length + i;
        UTILS.generateElement({
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
          items.weapons[i] ? showItemInfo(items.weapons[i], !0) : showItemInfo(items.list[i - items.weapons.length]);
        }, tmpItem.onclick = UTILS.checkTrusted(function () {
          wsBridge.upgradeItem(i);
        }), UTILS.hookTouchEvents(tmpItem);
      }(tmpList[i]);
    tmpList.length ? (upgradeHolder.style.display = 'block', upgradeCounter.style.display = 'block', upgradeCounter.innerHTML = 'SELECT ITEMS (' + points + ')') : (upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo());
  } else
    upgradeHolder.style.display = 'none', upgradeCounter.style.display = 'none', showItemInfo();
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
    var tmpSrc = items.projectiles[obj.indx].src,
      tmpSprite = projectileSprites[tmpSrc];
    tmpSprite || ((tmpSprite = new Image())
      .onload = function () {
        this.isLoaded = !0;
      }, tmpSprite.src = '.././img/weapons/' + tmpSrc + '.png', projectileSprites[tmpSrc] = tmpSprite), tmpSprite.isLoaded && ctxt.drawImage(tmpSprite, x - obj.scale / 2, y - obj.scale / 2, obj.scale, obj.scale);
  } else
    1 == obj.indx && (ctxt.fillStyle = '#939393', renderCircle(x, y, obj.scale, ctxt));
}

function renderWaterBodies(xOffset, yOffset, ctxt, padding) {
  var tmpW = config.riverWidth + padding,
    tmpY = config.mapScale / 2 - yOffset - tmpW / 2;
  tmpY < maxScreenHeight && tmpY + tmpW > 0 && ctxt.fillRect(0, tmpY, maxScreenWidth, tmpW);
}

function renderGameObjects(layer, xOffset, yOffset) {
  var tmpSprite, tmpX, tmpY;
  for (let i = 0; i < nearestGameObjects.length; i++)
    (tmpObj = nearestGameObjects[i])?.active && (tmpX = tmpObj.x + tmpObj.xWiggle - xOffset, tmpY = tmpObj.y + tmpObj.yWiggle - yOffset, 0 == layer && tmpObj.update(delta), tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0)) && (mainContext.globalAlpha = tmpObj.hideFromEnemy ? 0.6 : 1, tmpObj.isItem ? (tmpSprite = getItemSprite(tmpObj), mainContext.save(), mainContext.translate(tmpX, tmpY), mainContext.rotate(tmpObj.dir), mainContext.drawImage(tmpSprite, -tmpSprite.width / 2, -tmpSprite.height / 2), tmpObj.blocker && (mainContext.strokeStyle = '#db6e6e', mainContext.globalAlpha = 0.3, mainContext.lineWidth = 6, renderCircle(0, 0, tmpObj.blocker, mainContext, !1, !0)), mainContext.restore()) : (tmpSprite = getResSprite(tmpObj), mainContext.drawImage(tmpSprite, tmpX - tmpSprite.width / 2, tmpY - tmpSprite.height / 2))));
}

const speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];
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

function gather(tmpObj) {
  const buildDamage = -(items.weapons[tmpObj.weaponIndex].dmg * config.fetchVariant(tmpObj).val * 
        (items.weapons[tmpObj.weaponIndex].sDmg || 1) * 
        (tmpObj.skin && tmpObj.skin.bDmg ? tmpObj.skin.bDmg : 1) || ((tmpObj.skinIndex == 40) && 3.3)) || 0;
  
  for (let i = 0; i < gameObjects.length; i++) {
    const obj = gameObjects[i];
    if (!obj?.health) continue;
    
    const dist = Math.hypot(obj.x - tmpObj.x, obj.y - tmpObj.y);
    if (dist - obj.scale > items.weapons[tmpObj.weaponIndex].range) continue;
    
    obj.changeHealth(buildDamage);
  }
}

function gatherAnimation(sid, didHit, index) {
  (tmpObj = findPlayerBySID(sid)) && (tmpObj.startAnim(didHit, index), gather(tmpObj));

  if (sid == ownerSid && normalInsta() == false) {
    wsBridge.updateHittingState(true, players.find(p => p && p?.sid == ownerSid).dir); 
  }

  if (Math.hypot(tmpObj.x - player.x, tmpObj.y - player.y) < 180 && (tmpObj.skinIndex == 11 || tmpObj.tailIndex == 21)) {
    enemyIsSusMf = true;
  }
  
  if (sid == player.sid) reloads[player.weaponIndex] = 0;
  else (othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] = 0;
}

function renderPlayers(xOffset, yOffset, zIndex) {
  for (var i = 0; i < players.length; ++i) {
    tmpObj = players[i];
    if (tmpObj?.zIndex != zIndex ||
       !tmpObj?.visible) continue;
    
    tmpObj.animate(delta);
    tmpObj.skinRot += 0.002 * delta;
    tmpDir = ((player == tmpObj) ? getAttackDir() : tmpObj.dir) + tmpObj.dirPlus;
    
    mainContext.save();
    mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset);
    mainContext.rotate(tmpDir);
    mainContext.globalAlpha = (tmpObj.health <= 0 || !tmpObj.alive) ? 0.5 : 1;
    renderPlayer(tmpObj, mainContext);
    mainContext.restore();
  }
}

function renderPlayer(e, t) {
  if (!e) return;
  
  (t = t || mainContext)
  .lineWidth = 5.5, t.lineJoin = 'miter';
  var i = Math.PI / 4 * (items.weapons[e.weaponIndex]?.armS || 1),
    n = e.buildIndex < 0 && items.weapons[e.weaponIndex]?.hndS || 1,
    s = e.buildIndex < 0 && items.weapons[e.weaponIndex]?.hndD || 1;
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
    }(e.tailIndex, t, e), e.buildIndex < 0 && !items.weapons[e.weaponIndex]?.aboveHand && (renderTool(items.weapons[e.weaponIndex], config.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == items.weapons[e.weaponIndex].projectile || items.weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, items.projectiles[items.weapons[e.weaponIndex].projectile], mainContext)), t.fillStyle = config.skinColors[e.skinColor], renderCircle(e.scale * Math.cos(i), e.scale * Math.sin(i), 14), renderCircle(e.scale * s * Math.cos(-i * n), e.scale * s * Math.sin(-i * n), 14), e.buildIndex < 0 && items.weapons[e.weaponIndex].aboveHand && (renderTool(items.weapons[e.weaponIndex], config.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == items.weapons[e.weaponIndex].projectile || items.weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, items.projectiles[items.weapons[e.weaponIndex].projectile], mainContext)), e.buildIndex >= 0) {
    var o = getItemSprite(items.list[e.buildIndex]);
    t.drawImage(o, e.scale - items.list[e.buildIndex].holdOffset, -o.width / 2);
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
  var biomeID = obj.y >= config.mapScale - config.snowBiomeTop ? 2 : obj.y <= config.snowBiomeTop ? 1 : 0,
    tmpIndex = obj.type + '_' + obj.scale + '_' + biomeID,
    tmpSprite = gameObjectSprites[tmpIndex];
  if (!tmpSprite) {
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = 2.1 * obj.scale + 5.5;
    var tmpContext = tmpCanvas.getContext('2d');
    if (tmpContext.translate(tmpCanvas.width / 2, tmpCanvas.height / 2), tmpContext.rotate(UTILS.randFloat(0, Math.PI)), tmpContext.strokeStyle = outlineColor, tmpContext.lineWidth = 5.5, 0 == obj.type)
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
            tmpOuter = UTILS.randInt(outer + 0.9, 1.2 * outer), ctxt.quadraticCurveTo(Math.cos(rot + step) * tmpOuter, Math.sin(rot + step) * tmpOuter, Math.cos(rot + 2 * step) * inner, Math.sin(rot + 2 * step) * inner), rot += 2 * step;
          ctxt.lineTo(0, -inner), ctxt.closePath();
        }(tmpContext, 0, tmpObj.scale, 0.7 * tmpObj.scale), tmpContext.fillStyle = biomeID ? '#e3f1f4' : '#89a54c', tmpContext.fill(), tmpContext.stroke(), tmpContext.fillStyle = biomeID ? '#6a64af' : '#c15555';
        var rotVal = mathPI2 / 4;
        for (i = 0; i < 4; ++i)
          renderCircle((tmpRange = UTILS.randInt(tmpObj.scale / 3.5, tmpObj.scale / 2.3)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(10, 12), tmpContext);
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
    tmpCanvas.width = tmpCanvas.height = 2.5 * obj.scale + 5.5 + (items.list[obj.id].spritePadding || 0);
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
        renderCircle((tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, !0);
    } else if ('cheese' == obj.name) {
      var chips, tmpRange;
      for (tmpContext.fillStyle = '#f4f3ac', renderCircle(0, 0, obj.scale, tmpContext), tmpContext.fillStyle = '#c3c28b', rotVal = mathPI2 / (chips = 4), i = 0; i < chips; ++i)
        renderCircle((tmpRange = UTILS.randInt(obj.scale / 2.5, obj.scale / 1.7)) * Math.cos(rotVal * i), tmpRange * Math.sin(rotVal * i), UTILS.randInt(4, 5), tmpContext, !0);
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


function place(id, angle = getAttackDir(), t = true) {
  if (instakilling) return;
  
  wsBridge.updateHoldItem(id, false);
  wsBridge.updateHittingState(true, angle);
  wsBridge.updateHoldItem((player.weapons[0] != waka && player.weapons[1] != waka) ? (waka = player.weapons[0]) : waka, true);
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
  if (player.health == 100 || !player.alive || player.health <= 0) return;
  
  lastHeal = Date.now();
  window.fz && (findPlayerBySID(player.sid).health = 100);
  const healingItemSid = player.items[0];
  for (let healingCount = 0; healingCount < healCount; healingCount++) {
    selectToBuild(healingItemSid, false);
    wsBridge.updateHittingState(true, getAttackDir());
  };
  selectToBuild(player.weaponIndex, true);

  benchmarks.AutoHeal += healCount * 2 + 1;
};

const safeHealDelay = 120;

let lastDamage = 0;
let prevHeal = 0;
let healTimestamp = Date.now();

function healing(healTimestamp) {
  const damage = (100 - player.health) || 100;
  const healingItemSid = player.items[0];
  const healCount = Math.ceil(damage / getItemOutheal(healingItemSid));

  setTimeout(() => {
    heal(healCount);
  }, ((Date.now() - prevHeal) < 111) ? 
             (Date.now() - healTimestamp + 120 - window.pingTime + 
             (Date.now() - prevHeal)) : 
             (Date.now() - healTimestamp + 120 - window.pingTime));

  prevHeal = Date.now();
}

function updateHealth(sid, value) {
  (tmpObj = findPlayerBySID(sid)) && (tmpObj.health = value);

  oldHealth = player.health;

  healTimestamp = Date.now();

  healing(healTimestamp);
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

const circleLength = Math.PI * 2;
const placeDelta = Math.PI / 2;
const freeAngles = [];

for (let i = -Math.sin(Date.now()); i < circleLength; i += placeDelta) {
  if (i < 0) continue;

  freeAngles.push(i);
}

function toAngles(objects) {
  return objects.map(object => Math.atan2(object.y - player.y2, object.x - player.x2));
}

let placers = [];

let lastTickTimestamp = Date.now();
let serverTicksMap = [];
let preplaceTickRadixes = [];

function preplace(enemy) {
    if (!enemy) return;
    if (instakilling) return;
  
    enemy.moveDir = Math.atan2(player.y2 - player.y1, player.x2 - player.x1);
    const serverTickHappen = lastTickTimestamp - window.pingTime / 2 - serverLag;   
    serverTicksMap = [...new Array(2)].fill(0).map((value, index) => 
      serverTickHappen + config.serverUpdateRate);
    console.log(serverTicksMap);
    serverTicksMap.forEach(perfectTimestamp => {
        preplaceTickRadixes.push(perfectTimestamp);
        window.setTimeout(function() {
            const timeToTick = perfectTimestamp - Date.now() - window.pingTime;
            player.moveDir = Math.atan2(player.y2 - player.y1, player.x2 - player.x1);
            const actualX = Math.cos(player.moveDir) * timeToTick + player.x2;
            const actualY = Math.sin(player.moveDir) * timeToTick + player.y2;
            const permissibleError = Math.hypot(player.x2 - actualX, player.y2 - actualY);
            const placeReach = config.playerScale + items.list[15].scale + permissibleError;
            const preplacableObjects = nearestGameObjects.filter(object => {
                object && Math.hypot(object.x - actualX, object.y - actualY) <= placeReach});
            preplacableObjects.forEach(gameObject => {
                const angleLookupStart = Math.atan2(gameObject.y - actualY - Math.cos(90) * gameObject.scale / 2, gameObject.x - actualX - Math.cos(90) * gameObject.scale / 2);
                const angleLookupEnd = Math.atan2(gameObject.y - actualY + Math.cos(90) * gameObject.scale / 2, gameObject.x - actualX + Math.cos(90) * gameObject.scale / 2);
                let searchFailed = true;
                for (let currentAngle = angleLookupStart;
                    currentAngle < angleLookupEnd;
                    currentAngle += Math.abs(angleLookupEnd - angleLookupStart) / 4
                ) {
                    const actualReach = playerRadius + items.list[15].scale / 2;
                    const objectX = Math.cos(currentAngle) * actualReach + actualX;
                    const objectY = Math.sin(currentAngle) * actualReach + actualY;
                    if (preplacableObjects.find(e => e != gameObject && 
                        Math.hypot(e.x - gameObject.x, e.y - gameObject.y) < actualReach)) continue;
                    else {
                        searchFailed = false;
                        break;
                    }
                };
                if (searchFailed) currentAngle = Math.atan2(gameObject.y - actualY, gameObject.x - actualX);
                const objectSid = (Math.abs(Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2) - currentAngle) <= Math.PI / 2 &&
                    Math.hypot(player.x2 - enemy.x2, player.y2 - enemy.y2) <= weapons.list[player.weaponIndex].range + config.playerScale) ? 2 : 4;
                place(objectSid, currentAngle);
            });
        }, perfectTimestamp - Date.now() - window.pingTime);
    });
    lastTickTimestamp = Date.now();
};
                              
function autoplace(enemy, replace = false) {
  if (instakilling) return;
  if (breaking) return;

  const distance = Math.hypot(enemy?.x - player?.x, enemy?.y - player?.y) || 181;
  const enemyDir = Math.atan2((enemy || window.enemyDanger)?.y - player.y, (enemy || window.enemyDanger)?.x - player.x);
  placers = freeAngles.map((angle, i, array) => {
    place(player.items[(replace && Math.abs(angle - getMoveDir()) > Math.PI && Math.abs(enemyDir - angle) < Math.PI / 2) ? 2 : (((Math.abs(angle - getMoveDir()) <= Math.PI / 2) && distance < items.weapons[player.weaponIndex].range + config.playerScale) ? 2 : 4)], angle);
    benchmarks.Placers += 3;

    return {
      dir: angle,
      type: (preplace && Math.abs(enemyDir - angle) < Math.PI / 2) ? "spinning spikes" : "pit trap"
    };
  });

  preplace(enemy || window.enemyDanger);
}

let reloads = [...speeds];

const sxw = 1920 / 2;
const sxh = 1080 / 2;
let tmpTime = Date.now();
let serverLag = 0;
let average = 111;
let current = 111;
let breaking = false;
let aimOverride = false;
let lastOpInsta = Date.now();

function autobreak(trap) {
  if (instakilling) return;
  
  const correctWeapon = antiSpikeSync ? player.weapons[0] : (player.weapons[1] == 10 ? 10 : player.weapons[0]);
  const trapAngle = Math.atan2(
    trap.y - player.y, 
    trap.x - player.x
  );

  
  breaking = true;
  window.trap = trap;
  
  wsBridge.updateHittingState(true, trapAngle);
  antiSpikeSync = false;

  const buildDamage = items.weapons[waka].dmg * config.fetchVariant(player).val * 
        items.weapons[waka].sDmg * 3.3 || 1;

  if (trap.health - buildDamage <= 0) {
    aimOverride = false;
    antiSpikeSync = true;
    storeEquip(6);
    storeEquip(15, true);
  }
  
  benchmarks.AutoBreak++;

  aimOverride = trapAngle;
  
  if (player.weaponIndex != correctWeapon) {
    io.send(packets.CHANGE_WEAPON, waka = correctWeapon, true);
    benchmarks.AutoBreak++;
  }
}

function bowSync() {
  const enemy = players.find(e => e.sid == ownerSid);

  if (!enemy) return false;
  fixInsta();
  const angle = enemy.dir;

  storeEquip(53);
  turretReload = 0;
  io.send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
  wsBridge.updateHittingState(true, angle);
  wsBridge.updateHittingState(false, getAttackDir());

  setTimeout(() => {
    storeEquip(getBiomeHat());
  }, average);
}

function fixInsta() {
  io.send(packets.MOVEMENT, null);
  setTimeout(() => {
    io.send(packets.MOVEMENT, getMoveDir());
  }, 222);
}

function normalInsta() {
  const enemies = players.filter(e => e?.alive && e?.health > 0 && Math.hypot(player.x - e?.x, player.y - e?.y) < items.weapons[player.weaponIndex].range + config.playerScale && player.sid != e.sid && !alliancePlayers.includes(e.sid))
    .sort((a, b) => Math.hypot(a?.x - b?.x, a?.y - b?.y));
  
  const enemy = enemies[0];
  const enemy1 = enemies[1] || enemy;
  
  window.sidFocus = enemy?.sid || 69420;
  if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] || reloads[player.weapons[1]] !== speeds[player.weapons[1]]) return false;
  if (!enemy) return false;
  if (instakilling) return false;

  let angle = Math.atan2(enemy?.y2 - player.y2, enemy?.x2 - player.x2);
  let angle1 = Math.atan2(enemy1?.y2 - player.y2, enemy1?.x2 - player.x2);

  /** 180sx insta **/

  instakilling = true;

  fixInsta();
  storeEquip(53);

  setTimeout(() => {
    storeEquip(7);
    storeEquip(4, true);
    
    wsBridge.updateHoldItem(player.weapons[0], true);
    wsBridge.updateHittingState(true, hit360);
    aimOverride = angle;
    autoclicker = angle;

    setTimeout(() => {
      wsBridge.updateHittingState(true, angle1);
      aimOverride = angle1;
      autoclicker = angle1;
      io.send(packets.AIM, angle1);
      storeEquip(1);
      storeEquip(15, true);
      wsBridge.updateHoldItem(player.weapons[1], true);
      setTimeout(() => {
        aimOverride = false;
        autoclicker = false;
        instakilling = false;
        window.keyEvents.SwitchKeyR = false;
        wsBridge.updateHittingState(false, getAttackDir());
        wsBridge.updateHoldItem(player.weapons[0], true);
        lastOpInsta = Date.now();

        reloads[player.weapons[1]] = 0;
        reloads[player.weapons[0]] = 0;
        turretReload = 0;
      }, average / 2 + serverLag);
    }, average / 2 + serverLag);
  }, average / 2 + serverLag);

  return true;
}

function reverseInsta() {
  const enemy = players.find(e => e?.alive && e?.health > 0 && Math.hypot(player.x - e?.x, player.y - e?.y) < items.weapons[player.weaponIndex].range + config.playerScale && player.sid != e.sid && !alliancePlayers.includes(e.sid));
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
  io.send(packets.AIM, angle);
  io.send(packets.CHANGE_WEAPON, waka = player.weapons[1], true);
  wsBridge.updateHittingState(true, angle);
  io.send(packets.SEND_CHAT, "!sync");
  reloads[player.weapons[1]] = 0;
  setTimeout(() => {
    angle = Math.atan2(enemy.y2 - player.y2, enemy.x2 - player.x2);
    aimOverride = angle;
    autoclicker = angle;
    storeEquip(7);
    storeEquip(4, true);
    io.send(packets.CHANGE_WEAPON, waka = player.weapons[0], true);
    io.send(packets.AIM, angle);
    wsBridge.updateHittingState(true, angle);
    setTimeout(() => {
      wsBridge.updateHittingState(false, angle);
      storeEquip(getBiomeHat());
      instakilling = false;
      autoclicker = false;
      aimOverride = false;
      window.keyEvents.SwitchKeyT = false;
    }, average / 2 + serverLag);
  }, average / 2 + serverLag);

  return true;
}

function botFunctions(tmpPlayer) {
  if (window.follow) {
    const correctWeapon = player.weapons[1] == 10 ? 10 : player.weapons[0];
    const angle_ = Math.atan2(tmpPlayer.y - player.y, tmpPlayer.x - player.x);
    const dist = Math.hypot(player.x - tmpPlayer.x, player.y - tmpPlayer.y);

    if (dist > 150) {
      io.send(packets.MOVEMENT, angle_);
      if (player.weaponIndex != correctWeapon && !window.bowspam) {
        waka = correctWeapon;
        io.send(packets.CHANGE_WEAPON, waka, true);
      }
      storeEquip(player.y <= config.snowBiomeTop ? 6 : 11, true);
    } else {
      io.send(packets.MOVEMENT, null);
      storeEquip(15, true);
      if (!window.bowspam) {
        waka = player.weapons[0];
        io.send(packets.CHANGE_WEAPON, player.weapons[0], true);
      }
    }
  }
  if (window.bowspam && !breaking && !instakilling) {
    if (player.weaponIndex != player.weapons[1]) {
      waka = player.weapons[1];
      io.send(packets.CHANGE_WEAPON, waka, true);
    }

    if (reloads[player.weapons[1]] > speeds[player.weapons[1]] / 2 && player.skinIndex != 1) {
      storeEquip(1);
    } else if (player.skinIndex != 20) {
      storeEquip(20);
    }

    const lookingX = tmpPlayer.x + Math.cos(tmpPlayer.dir);
    const lookingY = tmpPlayer.y + Math.sin(tmpPlayer.dir);
    const angle = Math.atan2(lookingY - player.y, lookingX - player.x);
    
    wsBridge.updateHittingState(true, angle);
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
    io.send(packets.MOVEMENT, angle);
  } else if (distance < 400 && Math.hypot(player.x1 - player.x2, player.y1 - player.y2) > 20) {
    const enemyBorder = {
      x: window.enemy.x + Math.cos(Math.PI / 2) * config.playerScale,
      y: window.enemy.y + Math.sin(Math.PI / 2) * config.playerScale
    };

    const enB = Math.atan2(enemyBorder.y - player.y, enemyBorder.x - player.x);
    
    io.send(packets.MOVEMENT, angle);
    
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
    
    io.send(packets.MOVEMENT, angle);
  } else if (keyEvents.ShiftLeft && distance < 240) {
    io.send(packets.MOVEMENT, null);
    
    reverseInsta();
    controlFlow = false;
  } else if (keyEvents.ShiftLeft && distance > 450) {
    io.send(packets.SEND_CHAT, "[*] Calibrating" + (new Array(Math.abs(Math.floor(Math.sin(Date.now()) * 3)))).fill(".").join(""));

    io.send(packets.MOVEMENT, angle);
    storeEquip(40);
  } else if (keyEvents.ShiftLeft && distance < 400 && !controlFlow) {
    io.send(packets.SEND_CHAT, "[*] Calibrating" + (new Array(Math.abs(Math.floor(Math.sin(Date.now()) * 3)))).fill(".").join(""));

    io.send(packets.MOVEMENT, angle - Math.PI);
    
    storeEquip(getBiomeHat());
    storeEquip(11, true);
  }
}

let lastPos = {};
let endTimeout = false;

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

const boughtHats = [];
const hatsList = [
  { acc: 11, cost: 2000, isAcc: 1 },
  { hat: 6, cost: 4000, isAcc: 0 },
  { hat: 7, cost: 6000, isAcc: 0 },
  { hat: 11, cost: 10000, isAcc: 0},
  { hat: 40, cost: 15000, isAcc: 0 },
  { acc: 13, cost: 16000, isAcc: 1 },
  { acc: 21, cost: 20000, isAcc: 1 }
];

const benchmarks = {
  AutoBreak: 0,
  AntiInsta: 0,
  AutoHeal: 0,
  AutoReload: 0,
  Macros: 0,
  Placers: 0,
  ItemController: 0
};

let enemyIsSusMf = false;
let lastPoison = Date.now();
const poisonCD = 2500;

const modulesQueue = [
  /** HELPER MODULES ARE GOING FIRST **/
  () => {
    placers = [];
    
    nearestGameObjects = gameObjects.filter(object => {
      if (!object?.x) return;

      if (!isOnScreen(object?.x - xOffset, object?.y - yOffset, object.scale)) return;
      
      return true;
    });
  }, () => {
    if (Date.now() - lastPing_ > 3000) {
      lastPing_ = Date.now();
      pingSocket();
    };
  
    current = Date.now() - tmpTime;
    average = average / 2 + (Date.now() - tmpTime) / 2;
    serverLag = Math.abs(1000 / config.serverUpdateRate - average);
    tmpTime = Date.now();
    turretReload = Math.min(turretReload + current, 2500);
    if (!player?.weaponIndex) return;
    
    reloads[player.weaponIndex] = Math.min(reloads[player.weaponIndex] + current, speeds[player.weaponIndex]);
  },
  /** DEFENCE MODULES **/
  () => {
    if (instakilling) return;
    
    const trap = nearestGameObjects.find(obj => obj?.active && obj?.trap && obj?.owner?.sid != player.sid && Math.hypot(obj?.x - player.x, obj?.y - player.y) < obj?.scale && !alliancePlayers.includes(obj?.owner?.sid));

    if (!trap && breaking) {
      breaking = false;
      antiSpikeSync = false;
      aimOverride = false;
      
      wsBridge.updateHittingState(false, getAttackDir());
      benchmarks.AutoBreak++;
    }
  
    if (trap) return autobreak(trap);
  },
  () => {
    if (instakilling) return;
    if (window.bowspam) return;
    if (breaking) return;
    if (!player || !player?.weaponIndex) return;
    
    if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] && player.weaponIndex != player.weapons[0]) {
      io.send(packets.CHANGE_WEAPON, (waka = player.weapons[0]), true);
      benchmarks.AutoReload++;
    } else if (reloads[player.weapons[0]] == speeds[player.weapons[0]] && reloads[player.weapons[1]] != speeds[player.weapons[1]] && player.weaponIndex != player.weapons[1]) {
      io.send(packets.CHANGE_WEAPON, (waka = player.weapons[1]), true);
      benchmarks.AutoReload++;
    }

    if (reloads[player.weapons[1]] >= speeds[player.weapons[1]] && reloads[player.weapons[0]] >= speeds[player.weapons[0]]) {
      waka = touch ? player.weapons[0] : (10 == player.weapons[1] ? 10 : player.weapons[0]);
      io.send(packets.CHANGE_WEAPON, waka, true);
      benchmarks.AutoReload++;
    }
  },
  () => { /** MACRO POSITIONS **/
    if (window.keyEvents.KeyG) place(player.items[5], getAttackDir()); 
    else if (window.keyEvents.KeyV) place(player.items[2], getAttackDir());
    else if (window.keyEvents.KeyF) place(player.items[4], getAttackDir()); 
    else if (window.keyEvents.KeyZ) boostSpike();
    else if (window.keyEvents.KeyQ) place(player.items[0], getAttackDir());
    else if (window.keyEvents.KeyH) autoMills();;

    if (window.keyEvents.ArrowUp) offsetCamY -= (deltaHold += 3);
    else if (window.keyEvents.ArrowDown) offsetCamY += (deltaHold += 3);
    else if (window.keyEvents.ArrowLeft) offsetCamX -= (deltaHold += 3);
    else if (window.keyEvents.ArrowRight) offsetCamX += (deltaHold += 3);
    else deltaHold = 10;
  }, (tt) => {
    if (instakilling) return (bullspam = false, aimOverride = false);
    if (!tt) return (bullspam = false, aimOverride = false);
    
    const dumbestEnemy = players.sort((a, b) => Math.hypot(a?.x - player.x, a?.y - player.y) -
                                            Math.hypot(b?.x - player.x, b?.y - player.y)).find(e => e.sid != playerSID);
    
    window.boostinsta ? (tt && boostInstaOptimisations()) : (tt && autoplace());
  }, (tt) => {
    if (breaking) return;
    if (instakilling) return;
    
    if (tt?.skinIndex == 26 || tt?.skinIndex == 11) {
      wsBridge.updateHittingState(false, getAttackDir());
      storeEquip(11);
      storeEquip(21, true);
    } else if (attackState) {
      wsBridge.updateHittingState(true, getAttackDir());
    }
  }, () => { /** Instakill shouldn't be interrupted **/
    if (window.keyEvents.SwitchKeyR) {
      normalInsta()
    } else if (window.keyEvents.SwitchKeyT) {
      reverseInsta();
    }
  }, () => {
    if (autoclicker) {
      wsBridge.updateHittingState(true, autoclicker);
    }
  }, () => {
    if (!window.ghost) return;
    if (!endTimeout) {
      endTimeout = Date.now() + 60000;
    }

    storeEquip(15, true);
    storeEquip(60);

    if (player.skinIndex != 60) {
      wsBridge.sendChat("[*] GhostDrone defence broken!");
      endTimeout = false;
      return;
    }

    wsBridge.sendChat("[*] GhostDrone ends in " + Math.floor((endTimeout - Date.now()) / 1000) + "s");
  }, () => {
    const hitHat = (breaking || !touch) ? 40 : ((Date.now() - lastPoison >= poisonCD) ? (lastPoison = Date.now(), 21) : 7);
    const hitAcc = enemyIsSusMf ? 21 : 18;
    const idleHat = window.enemyDanger ? 6 : getBiomeHat();
    const idleAcc = window.enemyDanger ? (enemyIsSusMf ? (enemyIsSusMf = false, 21) : 13) : (player.y <= config.snowBiomeTop ? 6 : 11);
    const tankerHat = 6;
    const tankerAcc = 15;
    const weapon = waka || player.weaponIndex;
    const preparingForHit = reloads[weapon] == speeds[weapon];
    
    const alreadyWearsHit = player.skinIndex == hitHat && player.tailIndex == hitAcc;
    const alreadyWearsIdle = player.skinIndex == idleHat && player.tailIndex == idleAcc;

    if (preparingForHit && (attackState || breaking || bullspam)) {
      storeEquip(hitHat);
      storeEquip(hitAcc, true);
      reloads[weapon] = 0;
    } else {
      storeEquip(window.tanker ? tankerHat : idleHat);
      storeEquip(window.tanker ? tankerAcc : idleAcc, true);
    }
  }
];

let attackDir = 0, tmp_Dir = 0, camSpd = 0;
let lastPing_ = Date.now();

let bullspam = false;
  
function bullSpam(dumbestEnemy) {
  if (breaking) return (bullspam = false, aimOverride = false);
  if (reloads[player.weaponIndex] != speeds[player.weaponIndex]) return;
  if (player.skinIndex == 60) return (bullspam = false, aimOverride = false);
  if (typeof dumbestEnemy !== "object") return (bullspam = false, aimOverride = false);
  
  bullspam = true;
  
  const aimDirection = Math.atan2(dumbestEnemy.y2 - player.y2, dumbestEnemy.x2 - player.x2);
  if (Math.hypot(dumbestEnemy.x2 - player.x2, dumbestEnemy.y2 - player.y2) > items.weapons[player.weaponIndex].range + config.playerScale) return (bullspam = false, aimOverride = false); 

  wsBridge.updateHoldItem(player.weapons[0], true);
  wsBridge.updateHittingState(true, aimDirection);
  wsBridge.updateHittingState(false, getAttackDir());
  
  aimOverride = aimDirection;
}

function updatePlayers(data) {
  let tt;
  window.enemy = false;
  window.enemyDanger = false;
  
  for (let i = 0; i < data.length;) {
    (tmpObj = findPlayerBySID(data[i])) && (tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 1], tmpObj.y2 = data[i + 2], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 3] : tmpObj.d2, tmpObj.d2 = data[i + 3], tmpObj.dt = 0, tmpObj.buildIndex = (tmpObj == player) ? -1 : data[i + 4], tmpObj.weaponIndex = data[i + 5], tmpObj.weaponVariant = data[i + 6], tmpObj.team = data[i + 7], tmpObj.isLeader = data[i + 8], tmpObj.skinIndex = data[i + 9], tmpObj.tailIndex = data[i + 10], tmpObj.iconIndex = data[i + 11], tmpObj.zIndex = data[i + 12], tmpObj.visible = !0), i += 13;
    if (!tmpObj) continue;
    if (tmpObj?.sid == ownerSid) botFunctions(tmpObj);
    
    if (Math.hypot(tmpObj.x - player.x, tmpObj.y - player.y) < 700 && tmpObj != player) window.enemy = tt = tmpObj;
    if (Math.hypot(tmpObj.x - player.x, tmpObj.y - player.y) < 300 && tmpObj != player) window.enemyDanger = tmpObj;
  }

  if (!player?.health) return;
  
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
  window.pingTime = pingTime;
}

function pingSocket() {
  lastPing = Date.now();
  wsBridge.pingServer();
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

const requestAnimationFrame_ = requestAnimationFrame;

function render() {
  now = Date.now(), delta = now - lastUpdate, lastUpdate = now;

  if (player) {
    const moX = dxw - mouseX;
    const moY = dxh - mouseY;
    
    camX = player.x + moX / 10;
    camY = player.y + moY / 10;
  }
  
  xOffset = camX - maxScreenWidth / 2 + offsetCamX;
  yOffset = camY - maxScreenHeight / 2 + offsetCamY;
  
  config.snowBiomeTop - yOffset <= 0 && config.mapScale - config.snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#b6db66', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.mapScale - config.snowBiomeTop - yOffset <= 0 ? (mainContext.fillStyle = '#dbc666', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#fff', mainContext
      .fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.snowBiomeTop - yOffset >= 0 ? (mainContext.fillStyle = '#fff', mainContext.fillRect(0, 0
      , maxScreenWidth, config.snowBiomeTop - yOffset), mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, config.snowBiomeTop - yOffset
      , maxScreenWidth, maxScreenHeight - (config.snowBiomeTop - yOffset))) : (mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, 0, maxScreenWidth
      , config.mapScale - config.snowBiomeTop - yOffset), mainContext.fillStyle = '#dbc666', mainContext.fillRect(0, config.mapScale - config.snowBiomeTop -
      yOffset, maxScreenWidth, maxScreenHeight - (config.mapScale - config.snowBiomeTop - yOffset))), firstSetup || ((waterMult += waterPlus * config
        .waveSpeed * delta) >= config.waveMax ? (waterMult = config.waveMax, waterPlus = -1) : waterMult <= 1 && (waterMult = waterPlus = 1), mainContext
      .fillStyle = '#dbc666', renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding), mainContext.fillStyle = '#91b2db', renderWaterBodies(
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
    , xOffset <= 0 && mainContext.fillRect(0, 0, -xOffset, maxScreenHeight), config.mapScale - xOffset <= maxScreenWidth) {
    var tmpY = Math.max(0, -yOffset);
    mainContext.fillRect(config.mapScale - xOffset, tmpY, maxScreenWidth - (config.mapScale - xOffset), maxScreenHeight - tmpY);
  }
  if (yOffset <= 0 && mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset), config.mapScale - yOffset <= maxScreenHeight) {
    var tmpX = Math.max(0, -xOffset)
      , tmpMin = 0;
    config.mapScale - xOffset <= maxScreenWidth && (tmpMin = maxScreenWidth - (config.mapScale - xOffset)), mainContext.fillRect(tmpX, config.mapScale -
      yOffset, maxScreenWidth - tmpX - tmpMin, maxScreenHeight - (config.mapScale - yOffset));
  }
  for (mainContext.globalAlpha = 1, mainContext.fillStyle = 'rgba(0, 0, 70, 0.35)', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight), mainContext
    .strokeStyle = darkOutlineColor, textManager.update(delta, mainContext, xOffset, yOffset), i = 0; i < players.length; ++i)
    if ((tmpObj = players[i])
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

      if (players[i] && tmpObj.chatCountdown) {
        tmpObj.chatCountdown -= delta, tmpObj.chatCountdown <= 0 && (tmpObj.chatCountdown = 0), mainContext.font = '32px "Baloo 2"';
        var tmpSize = mainContext.measureText(tmpObj.chatMessage);
        mainContext.textBaseline = 'middle', mainContext.textAlign = 'center', tmpX = tmpObj.x - xOffset, tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
        var tmpW = tmpSize.width + 17;
        mainContext.fillStyle = 'rgba(0,0,0,0.2)', mainContext.roundRect(tmpX - tmpW / 2, tmpY - 23.5, tmpW, 47, 6), mainContext.fill(), mainContext.fillStyle =
          '#fff', mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
      }

      var tmpText = (tmpObj.team ? '[' + tmpObj.team + '] ' : '') + tmpObj.name;
      if ('' != tmpText) {
        if (mainContext.font = (tmpObj.nameScale || 30) + 'px "Baloo 2"', mainContext.fillStyle = (tmpObj.health <= 0 || !tmpObj.alive) ? '#7E7E7E' : '#fff', mainContext.textBaseline = 'middle', mainContext
          .textAlign = 'center', mainContext.lineWidth = tmpObj
          .nameScale ? 11 : 8, mainContext.lineJoin = 'round', mainContext.strokeText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config
            .nameY), mainContext.fillText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config.nameY), tmpObj.isLeader && iconSprites.crown
          .isLoaded) {
          var tmpS = config.crownIconScale;
          tmpX = tmpObj.x - xOffset - tmpS / 2 - mainContext.measureText(tmpText)
            .width / 2 - config.crownPad, mainContext.drawImage(iconSprites.crown, tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS
              , tmpS);
        }
        1 == tmpObj.iconIndex && iconSprites.skull.isLoaded && (tmpS = config.crownIconScale, tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(
            tmpText)
          .width / 2 + config.crownPad, mainContext.drawImage(iconSprites.skull, tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS
            , tmpS));
      }
      tmpObj.health > 0 && (config.healthBarWidth, mainContext.fillStyle = darkOutlineColor, mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth -
          config.healthBarPad, tmpObj.y - yOffset + tmpObj.scale + config.nameY, 2 * config.healthBarWidth + 2 * config.healthBarPad, 17, 8), mainContext
        .fill(), mainContext.fillStyle = tmpObj == player || tmpObj.team && tmpObj.team == player.team ? '#8ecc51' : '#cc5151', mainContext.roundRect(tmpObj
          .x - xOffset - config.healthBarWidth, tmpObj.y - yOffset + tmpObj.scale + config.nameY + config.healthBarPad, 2 * config.healthBarWidth * (tmpObj
            .health / tmpObj.maxHealth), 17 - 2 * config.healthBarPad, 7), mainContext.fill());
    }

  if (player?.alive) {
    const mapOffY = gameCanvas.height - 200;
    
    mainContext.fillStyle = "rgba(0, 0, 0, 0.3)";
    mainContext.shadowBlur = 3;
    mainContext.roundRect(0, mapOffY, 200, mapOffY + 200, 10);
    mainContext.fill();
    mainContext.fillStyle = '#fff';
    renderCircle(player.x / config.mapScale * 200, mapOffY + player.y / config.mapScale *
        200, 5, mainContext, true);
    mainContext.fillStyle = 'rgba(255, 255, 255, 0.35)';
    if (minimapData) {
      for (i = 0; i < minimapData.length;) {
        renderCircle(minimapData[i] / config.mapScale * 200, mapOffY + minimapData[i + 1] / config.mapScale * 200, 5, mainContext, true);
        i += 2;
      }
    };
    placers.forEach(angle => {
      if (placers.find(e => Math.abs(e.dir - angle.dir) < Math.PI / 2)) return;
      
      const tmpX = Math.cos(angle.dir) * 90 + player.x1 - xOffset;
      const tmpY = Math.sin(angle.dir) * 90 + player.y1 - yOffset;
      
      const sprite = itemSprites[angle.type == "pit trap" ? player.items[4] : player.items[2]];
      if (!sprite) return;
    
      mainContext.save();
      mainContext.globalAlpha = 0.3;
      mainContext.translate(tmpX, tmpY);
      mainContext.rotate(angle.dir);
      mainContext.drawImage(sprite, -sprite.width / 2, -sprite.height / 2);
      mainContext.restore();
    });
  };

  requestAnimationFrame_(render);
};

render();

window.requestAnimFrame = window.requestAnimationFrame = null;

window.aJoinReq = aJoinReq;
window.kickFromClan = kickFromClan;
window.sendJoin = sendJoin;
window.leaveAlliance = leaveAlliance;
window.createAlliance = createAlliance;
window.showItemInfo = showItemInfo;
window.selectSkinColor = function (index) {
  skinColor = index;
  updateSkinColorPicker();
};
window.changeStoreIndex = function (index) {
  currentStoreIndex != index && (currentStoreIndex = index, generateStoreList());
};

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
  top: 300px;
  left: 0px;
  z-index: 10;
  border: 5px solid transparent;
  border-top: linear-gradient(#b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  color: white;
  transition: all 1s 0s;
  overflow: auto;
  scrollbar-width: none;
  font-family: Arial !important;
}

#modMenu:hover {
  transform: scale(1.05);
  background: rgba(0, 0, 0, 0.8);
}

#wideAdCard, .adMenuCard, #promoImgHolder, #mapDisplay, #scoreDisplay, #main-menu-left-ad, #bottom-ad {
  display: none !important;
  visibility: hidden !important;
}

.actionBarItem, #stoneDisplay, #woodDisplay, #foodDisplay, #leaderboard, .gameButton, #killCounter, .resourceDisplay {
  border-radius: 10px !important;
  box-shadow: 0px 0px 4px 2px rgb(15, 10, 12);
}
</style>
`);
