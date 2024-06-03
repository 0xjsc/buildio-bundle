const hit360 = 1.998715926535898e+272;
let nearestGameObjects = [];

const versionHash = "1.5-GammaFinal";
const changelog = "Added preplace";
const Swal = require("sweetalert2");
const motionBlurLevel = 0.6;
let instakilling = false;

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
var io = window.io = require(/*! ./libs/io-client.js */ "./libs/io-client.js"),
  UTILS = require(/*! ./libs/utils.js */ "./libs/utils.js"),
  animText = require(/*! ./libs/animText.js */ "./libs/animText.js"),
  config = require(/*! ./config.js */ "./config.js"),
  GameObject = require(/*! ./js/data/gameObject.js */ "./js/data/gameObject.js"),
  items = require(/*! ./js/data/items.js */ "./js/data/items.js"),
  MapManager = require(/*! ./js/data/mapManager.js */ "./js/data/mapManager.js"),
  ObjectManager = require(/*! ./js/data/objectManager.js */ "./js/data/objectManager.js"),
  Player = require(/*! ./js/data/player.js */ "./js/data/player.js"),
  store = require(/*! ./js/data/store.js */ "./js/data/store.js"),
  Projectile = require(/*! ./js/data/projectile.js */ "./js/data/projectile.js"),
  ProjectileManager = require(/*! ./js/data/projectileManager.js */ "./js/data/projectileManager.js"),
  SoundManager = (require(/*! ./libs/soundManager.js */ "./libs/soundManager.js").obj),
  textManager = new animText.TextManager(),
  vultrClient = new(require(/*! ./vultr/VultrClient.js */ "./vultr/VultrClient.js"))('mohmoh.eu', 3000, config.maxPlayers, 5, !1);
vultrClient.debugLog = true;
var startedConnecting = false;

if (localStorage.version !== versionHash) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "AutoWASM has been updated to version " + versionHash + "!",
    text: changelog,
    showConfirmButton: false,
    timer: 3000,
    allowOutsideClick: false
  });
  localStorage.version = versionHash;
}

async function connectSocketIfReady() {
  if (startedConnecting) return;
  startedConnecting = true;
  const token = await grecaptcha.execute("6LcuxskpAAAAADyVCDYxrXrKEG4w-utU5skiTBZH");
  connectSocket(token);
}

const wsLogs = [];

function connectSocket(token) {
  var wsAddress = (isProd ? "ws" : "wss") + '://' + location.host + "/?token=" + token;
  io.connect(wsAddress, function (error) {
    io.send("budv", 0);
    pingSocket(); (error !== "Invalid Connection" && error) ? disconnect(error) : (enterGameButton.onclick = UTILS.checkTrusted(function () {
      ! function () {
        if (error) {
          disconnect(error);
        } else {
          enterGame();
        }
      }();
    }), UTILS.hookTouchEvents(enterGameButton), joinPartyButton.onclick = UTILS.checkTrusted(function () {
      setTimeout(function () {
        ! function () {
          var currentKey = serverBrowser.value,
            key = prompt('party key', currentKey);
          key && (window.onbeforeunload = void 0, window.location.href = '/?server=' + key);
        }();
      }, 10);
    }), UTILS.hookTouchEvents(joinPartyButton), settingsButton.onclick = UTILS.checkTrusted(function () {
      guideCard.classList.contains('showing') ? (guideCard.classList.remove('showing'), settingsButtonTitle.innerText = 'Settings') : (guideCard.classList.add('showing'), settingsButtonTitle.innerText = 'Close');
    }), UTILS.hookTouchEvents(settingsButton), allianceButton.onclick = UTILS.checkTrusted(function () {
      resetMoveDir(), 'block' != allianceMenu.style.display ? showAllianceMenu() : allianceMenu.style.display = 'none';
    }), UTILS.hookTouchEvents(allianceButton), storeButton.onclick = UTILS.checkTrusted(function () {
      'block' != storeMenu.style.display ? (storeMenu.style.display = 'block', allianceMenu.style.display = 'none', closeChat(), generateStoreList()) : storeMenu.style.display = 'none';
    }), UTILS.hookTouchEvents(storeButton), chatButton.onclick = UTILS.checkTrusted(function () {
      toggleChat();
    }), UTILS.hookTouchEvents(chatButton), mapDisplay.onclick = UTILS.checkTrusted(function () {
      sendMapPing();
    }), UTILS.hookTouchEvents(mapDisplay), function () {
      for (var i = 0; i < icons.length; ++i) {
        var tmpSprite = new Image();
        tmpSprite.onload = function () {
          this.isLoaded = !0;
        }, tmpSprite.src = '.././img/icons/' + icons[i] + '.png', iconSprites[icons[i]] = tmpSprite;
      }
    }(), loadingText.style.display = 'none', menuCardHolder.style.display = 'block', nameInput.value = getSavedVal('moo_name') || '', function () {
      var savedNativeValue = getSavedVal('native_resolution');
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
  }, {
    id: setInitData,
    d: disconnect,
    1: setupGame,
    2: addPlayer,
    4: removePlayer,
    33: updatePlayers,
    5: updateLeaderboard,
    6: loadGameObject,
    a: loadAI,
    aa: animateAI,
    7: gatherAnimation,
    8: wiggleGameObject,
    sp: shootTurret,
    9: updatePlayerValue,
    h: updateHealth,
    11: killPlayer,
    12: killObject,
    13: killObjects,
    14: updateItemCounts,
    15: updateAge,
    16: updateUpgrades,
    17: updateItems,
    18: addProjectile,
    19: remProjectile,
    20: serverShutdownNotice,
    ac: addAlliance,
    ad: deleteAlliance,
    an: allianceNotification,
    st: setPlayerTeam,
    sa: setAlliancePlayers,
    us: updateStoreItems,
    ch: receiveChat,
    mm: updateMinimap,
    t: showText,
    p: pingMap,
    pp: pingSocketResponse,
    panel: function () {},
    loadAbility: function () {},
    removeAbility: function () {}
  }), setupServerStatus(), setTimeout(() => updateServerList(), 3000);
}
var canStore = 0,
  Sound = new SoundManager(config, UTILS),
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
var useNativeResolution, showPing, delta, now, lastSent, attackState, player, playerSID, tmpObj, camX, camY, tmpDir, screenWidth, screenHeight, moofoll = getSavedVal('moofoll'),
  pixelDensity = 1,
  lastUpdate = Date.now(),
  ais = [],
  players = [],
  alliances = [],
  gameObjects = [],
  projectiles = [],
  projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS),
  AiManager = require(/*! ./js/data/aiManager.js */ "./js/data/aiManager.js"),
  AI = require(/*! ./js/data/ai.js */ "./js/data/ai.js"),
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
  hats = store.hats,
  accessories = store.accessories,
  objectManager = new ObjectManager(GameObject, gameObjects, UTILS, config),
  outlineColor = '#525252',
  darkOutlineColor = '#3d3f42';

function setInitData(data) {
  alliances = data.teams;
}
var featuredYoutuber = document.getElementById('featuredYoutube'),
  youtuberList = [{
    name: 'Join the discord -',
    link: 'https://discord.gg/WgynbMjmv9'
  }, ],
  tmpYoutuber = youtuberList[UTILS.randInt(0, youtuberList.length - 1)];
featuredYoutuber.innerHTML = '<a target=\'_blank\' class=\'ytLink\' href=\'' + tmpYoutuber.link + '\'><i class=\'material-icons\' style=\'vertical-align: top;\'>&#xE064;</i> ' + tmpYoutuber.name + '</a>';
var inWindow = !0,
  didLoad = !1,
  captchaReady = !1;

async function disconnect(reason) {
  const req = await fetch("https://api.ipify.org/");
  const ip = await req.text();
  
  Swal.fire({
    icon: "error",
    title: "WebSocket closed",
    html: `Probably flower or someone other crashed the server. <br>
    IP Address: ${ip} <br>
    Reason: ${reason} <br>
    Recaptcha token: ${localStorage._grecaptcha} <br> <br>
    Contact 0xffabc at mohmoh's server if you have more questions`,
    showConfirmButton: true,
  });
  io.close();
}

function showLoadingText(text) {
  mainMenu.style.display = 'block', gameUI.style.display = 'none', menuCardHolder.style.display = 'none', diedText.style.display = 'none', loadingText.style.display = 'block', loadingText.innerHTML = text + '<a href=\'javascript:window.location.href=window.location.href\' class=\'ytLink\'>reload</a>';
}
window.onblur = function () {
  inWindow = !1;
}, window.onfocus = function () {
  inWindow = !0, player && player.alive && resetMoveDir();
}, window.onload = function () {
  didLoad = !0, connectSocketIfReady();
}, window.captchaCallback = function () {
  captchaReady = !0, connectSocketIfReady();
}, gameCanvas.oncontextmenu = function () {
  return !1;
};

function setupServerStatus() {
  var altServerText, altServerURL, tmpHTML = '',
    overallTotal = 0;
  tmpHTML += '<option disabled>All Servers - 100 players</option>', serverBrowser.innerHTML = tmpHTML, 'mohmoh.eu' == location.hostname ? (altServerText = 'Back to MohMoh', altServerURL = '//mohmoh.eu/') : (altServerText = 'Try the sandbox', altServerURL = '//mohmoh.eu/'), document.getElementById('altServer')
    .innerHTML = '<a href=\'' + altServerURL + '\'>' + altServerText + '<i class=\'material-icons\' style=\'font-size:10px;vertical-align:middle\'>arrow_forward_ios</i></a>';
}

function updateServerList() {
  /*
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
      4 == this.readyState && (200 == this.status ? (window.vultr = JSON.parse(this.responseText), vultrClient.processServers(vultr.servers), setupServerStatus()) : console.error('Failed to load server data with status code:', this.status));
  }, xmlhttp.open('GET', '/serverData', !0), xmlhttp.send();*/
}
serverBrowser.addEventListener('change', UTILS.checkTrusted(function () {
  let parts = serverBrowser.value.split(':');
  vultrClient.switchServer(parts[0], parts[1], parts[2]);
}));
var preAdInterval = 300000,
  preAdLastShowTime = 0,
  preAdGameCount = 0;

function showPreAd() {
  if (!window.adsbygoogle)
    return console.log('Failed to load video ad API'), void enterGame();
  window.adsbygoogle.push({
    type: 'next',
    adBreakDone: () => {
      enterGame();
    }
  });
}

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
window.adsbygoogle && adsbygoogle.push({
  preloadAdBreaks: 'on'
}), window.showPreAd = showPreAd;
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
  io.send('11', allianceNotifications[0].sid, join), allianceNotifications.splice(0, 1), updateNotifications();
}

function kickFromClan(sid) {
  io.send('12', sid);
}

function sendJoin(index) {
  io.send('10', alliances[index].sid);
}

function createAlliance() {
  io.send('8', document.getElementById('allianceInput')
    .value);
}

let waka = 0; // sorry for bad variable name

function leaveAlliance() {
  allianceNotifications = [], updateNotifications(), io.send('9');
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
      this.active && (this.scale += 0.05 * delta, this.scale >= config.mapPingScale ? this.active = !1 : (ctxt.globalAlpha = 1 - Math.max(0, this.scale / config.mapPingScale), ctxt.beginPath(), ctxt.arc(this.x / config.mapScale * mapDisplay.width, this.y / config.mapScale * mapDisplay.width, this.scale, 0, 2 * Math.PI), ctxt.stroke()));
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
  io.send('13c', 0, id, index);
}

function storeBuy(id, index) {
  io.send('13c', 1, id, index);
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
  usingTouch ? setTimeout(function () {
    var chatMessage = prompt('chat message');
    chatMessage && sendChat(chatMessage);
  }, 1) : 'block' == chatHolder.style.display ? (chatBox.value && sendChat(chatBox.value), closeChat()) : (storeMenu.style.display = 'none', allianceMenu.style.display = 'none', chatHolder.style.display = 'block', chatBox.focus(), resetMoveDir()), chatBox.value = '';
}

function sendChat(message) {
  io.send('ch', message.slice(0, 30));
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

  if (/what\ mod/g.test(message) && Math.hypot(player.x - tmpPlayer.x, player.y - tmpPlayer.y) < 230 && player.sid != tmpPlayer.sid) {
    io.send("ch", "AutoWASM By 0xffabc.");
  } else if (/ez|bad|noskill|faggot|gay/gm.test(message) && Math.hypot(player.x - tmpPlayer.x, player.y - tmpPlayer.y) < 230 && player.sid != tmpPlayer.sid) {
    message = "me is retarded homo";
  }

  if (syncChats.has(message) && tmpPlayer && sid != player.sid) {
    if (tmpPlayer.weaponIndex == tmpPlayer.weapons[1]) reverseInsta();
    else normalInsta();
  } else if (syncChats.has(message) && sid == player.sid) return;

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
  return (lastDir = Math.atan2(mouseY - screenHeight / 2, mouseX - screenWidth / 2));
}
window.addEventListener('resize', UTILS.checkTrusted(resize)), resize(), setUsingTouch(!1), window.setUsingTouch = setUsingTouch, gameCanvas.addEventListener('touchmove', UTILS.checkTrusted(function (ev) {
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.identifier == controllingTouch.id ? (controllingTouch.currentX = t.pageX, controllingTouch.currentY = t.pageY, sendMoveDir()) : t.identifier == attackingTouch.id && (attackingTouch.currentX = t.pageX, attackingTouch.currentY = t.pageY, attackState = 1);
  }
}), !1), gameCanvas.addEventListener('touchstart', UTILS.checkTrusted(function (ev) {
  if (!inGame)
    return ev.preventDefault(), !1;
  ev.preventDefault(), ev.stopPropagation(), setUsingTouch(!0);
  for (var i = 0; i < ev.changedTouches.length; i++) {
    var t = ev.changedTouches[i];
    t.pageX < document.body.scrollWidth / 2 && -1 == controllingTouch.id ? (controllingTouch.id = t.identifier, controllingTouch.startX = controllingTouch.currentX = t.pageX, controllingTouch.startY = controllingTouch.currentY = t.pageY, sendMoveDir()) : t.pageX > document.body.scrollWidth / 2 && -1 == attackingTouch.id && (attackingTouch.id = t.identifier, attackingTouch.startX = attackingTouch.currentX = t.pageX, attackingTouch.startY = attackingTouch.currentY = t.pageY, player.buildIndex < 0 && (attackState = 1, sendAtckState()));
  }
}), !1), gameCanvas.addEventListener('touchend', UTILS.checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchcancel', UTILS.checkTrusted(touchEnd), !1), gameCanvas.addEventListener('touchleave', UTILS.checkTrusted(touchEnd), !1), gameCanvas.addEventListener('mousemove', function (e) {
  e.preventDefault(), e.stopPropagation(), setUsingTouch(!1), mouseX = e.clientX, mouseY = e.clientY;
}, !1), gameCanvas.addEventListener('mousedown', function (e) {
  setUsingTouch(!1), 1 != attackState && (attackState = 1, sendAtckState());
  touch = e.button == 0;
}, !1), gameCanvas.addEventListener('mouseup', function (e) {
  setUsingTouch(!1), 0 != attackState && (attackState = 0, sendAtckState());
}, !1);
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
  keys = {}, io.send('rmd');
}

function keysActive() {
  return 'block' != allianceMenu.style.display && 'block' != chatHolder.style.display;
}

function sendAtckState() {
  player && player.alive && io.send('c', attackState, null);
}
window.addEventListener('keydown', UTILS.checkTrusted(function (event) {
  var keyNum = event.which || event.keyCode || 0;
  const keyCode = event.code;
  if (document.activeElement.tagName !== "INPUT") {
    window.keyEvents[keyCode] = true;
    window.keyEvents["Switch" + keyCode] = !window.keyEvents["Switch" + keyCode];
  }
  "Escape" == keyCode ? hideAllWindows() : player && player.alive && keysActive() && (keys[keyCode] || (keys[keyCode] = 1, "KeyX" == keyCode ? io.send('7', 1) : "KeyC" == keyCode ? (mapMarker || (mapMarker = {}), mapMarker.x = player.x, mapMarker.y = player.y) : "KeyZ" == keyCode ? (player.lockDir = player.lockDir ? 0 : 1, io.send('7', 0)) : null != player.weapons[keyNum - 49] ? selectToBuild(player.weapons[keyNum - 49], !0) : null != player.items[keyNum - 49 - player.weapons.length] ? selectToBuild(player.items[keyNum - 49 - player.weapons.length]) : 81 == keyNum ? selectToBuild(player.items[0]) : "KeyR" == keyCode ? sendMapPing() : moveKeys[keyCode] ? sendMoveDir() : "Space" == keyCode && (attackState = 1, sendAtckState())));
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
  (null == lastMoveDir || null == newMoveDir || Math.abs(newMoveDir - lastMoveDir) > 0.3) && (io.send('33', newMoveDir), storeEquip(5, true), lastMoveDir = newMoveDir);
}

function sendMapPing() {
  io.send('14', 1);
}

function selectToBuild(index, wpn) {
  io.send('5', index, wpn);
}

function enterGame() {
  saveVal('moo_name', nameInput.value), !inGame && io.connected && (inGame = !0, Sound.stop('menu'), showLoadingText('Loading...'), io.send('sp', {
      name: nameInput.value,
      moofoll: moofoll,
      skin: "toString"
    })),
    function () {
      var cookieIcon = document.getElementById('ot-sdk-btn-floating');
      cookieIcon && (cookieIcon.style.display = 'none');
    }();
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
  inGame = !1,
    function () {
      var cookieIcon = document.getElementById('ot-sdk-btn-floating');
      cookieIcon && (cookieIcon.style.display = 'block');
    }();
  try {
    factorem.refreshAds([2], !0);
  } catch (e) {}
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
          io.send('6', i);
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
  for (var tmpSprite, tmpX, tmpY, i = 0; i < gameObjects.length; ++i)
    (tmpObj = gameObjects[i])?.active && (tmpX = tmpObj.x + tmpObj.xWiggle - xOffset, tmpY = tmpObj.y + tmpObj.yWiggle - yOffset, 0 == layer && tmpObj.update(delta), tmpObj.layer == layer && isOnScreen(tmpX, tmpY, tmpObj.scale + (tmpObj.blocker || 0)) && (mainContext.globalAlpha = tmpObj.hideFromEnemy ? 0.6 : 1, tmpObj.isItem ? (tmpSprite = getItemSprite(tmpObj), mainContext.save(), mainContext.translate(tmpX, tmpY), mainContext.rotate(tmpObj.dir), mainContext.drawImage(tmpSprite, -tmpSprite.width / 2, -tmpSprite.height / 2), tmpObj.blocker && (mainContext.strokeStyle = '#db6e6e', mainContext.globalAlpha = 0.3, mainContext.lineWidth = 6, renderCircle(0, 0, tmpObj.blocker, mainContext, !1, !0)), mainContext.restore()) : (tmpSprite = getResSprite(tmpObj), mainContext.drawImage(tmpSprite, tmpX - tmpSprite.width / 2, tmpY - tmpSprite.height / 2))));
}

const speeds = [300, 400, 400, 300, 300, 700, 300, 100, 400, 600, 400, 1, 700, 230, 700, 1500];
let lastPoison = Date.now();
let turretReload = 0;
const othersReloads  = [];

function getBiomeHat() {
  const biomeID = player.y >= config.mapScale - config.snowBiomeTop ? 2 : player.y <= config.snowBiomeTop ? 1 : 0;

  switch (biomeID) {
    case 0:
      return 31;
      break;
    case 1:
      return 12;
      break;
    case 2:
      return 15;
      break;
  }
}

function gatherAnimation(sid, didHit, index) {
  (tmpObj = findPlayerBySID(sid)) && tmpObj.startAnim(didHit, index);
  
  if (sid == player.sid) reloads[waka] = 0;
  else (othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] = 0;

  const hitHat = breaking ? 40 : ((player.health < 100 && player.health > 60) ? 55 : 7);
  const hitAcc = (player.health > 50) ? 21 : 18;
  const idleHat = breaking ? 26 : (turretReload >= 2500 ? (turretReload = 0, 53) : 6);
  const idleAcc = players.length >= 2 ? 15 : 11;

  storeEquip(idleHat);
  storeEquip(idleAcc, true);

  setTimeout(() => {
    storeEquip(hitHat);
    storeEquip(hitAcc, true);
    setTimeout(() => {
      if (!attackState) {
        storeEquip(getBiomeHat());
        storeEquip(idleAcc, true);
      }
    }, average);
  }, speeds[waka] - window.pingTime);
}

function renderPlayers(xOffset, yOffset, zIndex) {
  mainContext.globalAlpha = 1;
  for (var i = 0; i < players.length; ++i)
    (tmpObj = players[i])
    .zIndex == zIndex && (tmpObj.animate(delta), tmpObj.visible && (tmpObj.skinRot += 0.002 * delta, tmpDir = ((player == tmpObj) ? getAttackDir() : tmpObj.dir) + tmpObj.dirPlus, mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpDir), renderPlayer(tmpObj, mainContext), mainContext.restore()));
}

function renderPlayer(e, t) {
  (t = t || mainContext)
  .lineWidth = 5.5, t.lineJoin = 'miter';
  var i = Math.PI / 4 * (items.weapons[e.weaponIndex].armS || 1),
    n = e.buildIndex < 0 && items.weapons[e.weaponIndex].hndS || 1,
    s = e.buildIndex < 0 && items.weapons[e.weaponIndex].hndD || 1;
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
      tmpSkin.isLoaded && (ctxt.save(), ctxt.translate(-20 - (tmpObj.xOff || 0), 0), tmpObj.spin && ctxt.rotate(owner.skinRot), ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), ctxt.restore());
    }(e.tailIndex, t, e), e.buildIndex < 0 && !items.weapons[e.weaponIndex].aboveHand && (renderTool(items.weapons[e.weaponIndex], config.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == items.weapons[e.weaponIndex].projectile || items.weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, items.projectiles[items.weapons[e.weaponIndex].projectile], mainContext)), t.fillStyle = config.skinColors[e.skinColor], renderCircle(e.scale * Math.cos(i), e.scale * Math.sin(i), 14), renderCircle(e.scale * s * Math.cos(-i * n), e.scale * s * Math.sin(-i * n), 14), e.buildIndex < 0 && items.weapons[e.weaponIndex].aboveHand && (renderTool(items.weapons[e.weaponIndex], config.weaponVariants[e.weaponVariant].src, e.scale, 0, t), null == items.weapons[e.weaponIndex].projectile || items.weapons[e.weaponIndex].hideProjectile || renderProjectile(e.scale, 0, items.projectiles[items.weapons[e.weaponIndex].projectile], mainContext)), e.buildIndex >= 0) {
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
    tmpSkin.isLoaded && ctxt.drawImage(tmpSkin, -tmpObj.scale / 2, -tmpObj.scale / 2, tmpObj.scale, tmpObj.scale), !parentSkin && tmpObj.topSprite && (ctxt.save(), ctxt.rotate(owner.skinRot), renderSkin(index + '_top', ctxt, tmpObj, owner), ctxt.restore());
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
        .x2 = tmpObj.x, tmpObj.y2 = tmpObj.y, tmpObj.d2 = tmpObj.dir, tmpObj.health = data[i + 5], aiManager.aiTypes[data[i + 1]].name || (tmpObj.name = config.cowNames[data[i + 6]]), tmpObj.forcePos = !0, tmpObj.sid = data[i], tmpObj.visible = !0), i += 7;
  }
}
var aiSprites = {};

function renderAI(obj, ctxt) {
  var tmpIndx = obj.index,
    tmpSprite = aiSprites[tmpIndx];
  if (!tmpSprite) {
    var tmpImg = new Image();
    tmpImg.onload = function () {
      this.isLoaded = !0, this.onload = null;
    }, tmpImg.src = '.././img/animals/' + obj.src + '.png', tmpSprite = tmpImg, aiSprites[tmpIndx] = tmpSprite;
  }
  if (tmpSprite.isLoaded) {
    var tmpScale = 1.2 * obj.scale * (obj.spriteMlt || 1);
    ctxt.drawImage(tmpSprite, -tmpScale, -tmpScale, 2 * tmpScale, 2 * tmpScale);
  }
}

function isOnScreen(x, y, s) {
  return x + s >= 0 && x - s <= maxScreenWidth && y + s >= 0 && y - s <= maxScreenHeight;
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

let placements = [];

function place(id, angle = getAttackDir(), t = true) {
  io.send("5", id, false);
  io.send("c", true, angle);
  t && io.send("5", (waka !== player.weapons[0] && waka !== player.weapons[1]) ? player.weapons[0] : waka, true);

  const object = {
    x: player.x + Math.cos(angle) * 90,
    y: player.y + Math.sin(angle) * 90
  };
  if (!placements.find(e => Math.hypot(object.x - e.x, object.y - e.x) < 50)) placements.push(object);
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
  const healingItemSid = player.items[0];
  for (let healingCount = 0; healingCount < healCount; healingCount++) {
    selectToBuild(healingItemSid, false);
    io.send("c", true, getAttackDir());
  };
  selectToBuild(player.weaponIndex, true);
  player.buildItem({
   consume: () => { },
    scale: 0,
    x: player.x,
    y: player.y,
    dir: 0,
    id: 0,
    group: {
      id: 0,
      name: 'food',
      layer: 0
    }
  });
};
let lastDamage = 0;
const safeHealDelay = 120;
let prevHeal = 0;

function healing() {
  const damage = 100 - player.health;
  const healingItemSid = player.items[0];
  const healCount = Math.ceil(damage / getItemOutheal(healingItemSid));

  const prevHealEndsIn = Date.now() - prevHeal - window.pingTime;
  const prevHealFixed = prevHealEndsIn < 0 ? 0 : (prevHealEndsIn > average ? 0 : prevHealEndsIn);
  const rawHealTimeout = safeHealDelay - window.pingTime / 2;
  const safeHealTimeout = prevHealFixed ? (
    rawHealTimeout + prevHealFixed
  ) : (
    rawHealTimeout
  );
  
  window.setTimeout(() =>
    heal(healCount), safeHealTimeout);
  lastDamage = Date.now();
  prevHeal = Date.now() + safeHealTimeout;
}

function updateHealth(sid, value) {
  (tmpObj = findPlayerBySID(sid)) && (tmpObj.health = value);

  if (sid != player.sid || player.health > oldHealth) {
    oldHealth = player.health;
    return;
  }

  oldHealth = player.health;

  healing();
}

const cspam = Math.PI / 8;

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
  const preplacableObjects = nearestGameObjects.filter(object => object && Math.hypot(object.x - player.x, object.y - player.y) < config.playerScale + (object?.group?.scale) || 50);
  angles.forEach(angle => {
    place(player.items[((Math.abs(angle - getMoveDir()) <= Math.PI / 2) && distance < 180) ? 2 : 4], angle);
  });

  if (preplacableObjects) {
    preplacableObjects.forEach(object => {
      if (!object) return;

      console.log("! preplace " + object);
      
      const angle = Math.atan2(object.y - player.y, object.x - player.x);
      place(player.items[((Math.abs(angle - getMoveDir()) <= Math.PI / 2) && distance < 180) ? 2 : 4], angle);
    });
  }

  io.send("2", player.buildIndex ? getAttackDir() : hit360);
}

let reloads = [];

const sxw = 1920 / 2;
const sxh = 1080 / 2;
let tmpTime = Date.now();
let serverLag = 0;
let average = 111;
let current = 111;
let breaking = false;

function autobreak(trap) {
  if (instakilling) return;
  
  const correctWeapon = player.weapons[1] == 10 ? 10 : player.weapons[0];
  const trapAngle = Math.atan2(
    trap.y - player.y,
    trap.x - player.x
  );
  breaking = true;
  window.trap = trap;
  io.send("c", true, trapAngle);
  io.send("c", false, trapAngle);
  if (player.weaponIndex != correctWeapon) {
    io.send("5", waka = correctWeapon, true);
  }
}

// biomeHats function
function biomeHats() {
  // Your biomeHats code goes here
}

function normalInsta(c) {
      const enemy = players.find(e => Math.hypot(player.x - e?.x, player.y - e?.y) < 180 && player.sid != e.sid && !alliancePlayers.includes(e.sid));
      window.sidFocus = enemy?.sid || 69420;
      if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] || reloads[player.weapons[1]] !== speeds[player.weapons[1]]) return;
      if (!enemy) return;
      const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x) - Math.PI;
      
      instakilling = true;
      if (c) c();
      storeEquip(7);
      io.send("ch", "!sync");
      io.send("5", waka = player.weapons[0], true);
      io.send("c", true, angle);
      setTimeout(() => {
        storeEquip(53);
        turretReload = 0;
        io.send("5", waka = player.weapons[1], true);
        reloads[player.weapons[1]] = 0;
        io.send("c", true, angle);
        setTimeout(() => {
          io.send("5", waka = player.weapons[0], true);
          io.send("c", false, angle);
          instakilling = false;
        }, 1000 / config.clientSendRate / 2);
      }, 1000 / config.clientSendRate / 2);
}

function reverseInsta(c) {
      const enemy = players.find(e => Math.hypot(player.x - e?.x, player.y - e?.y) < 180 && player.sid != e.sid && !alliancePlayers.includes(e.sid));
      window.sidFocus = enemy?.sid || 69420;
      if (reloads[player.weapons[0]] !== speeds[player.weapons[0]] || reloads[player.weapons[1]] !== speeds[player.weapons[1]]) return;
      if (!enemy) return;
      const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x) - Math.PI;
      
      instakilling = true;
      if (c) c();
      storeEquip(53);
      turretReload = 0;
      io.send("5", waka = player.weapons[1], true);
      io.send("c", true, angle);
      io.send("ch", "!sync");
      reloads[player.weapons[1]] = 0;
      setTimeout(() => {
        storeEquip(7);
        io.send("5", waka = player.weapons[0], true);
        io.send("c", true, angle);
        setTimeout(() => {
          io.send("c", false, angle);
          instakilling = false;
        }, 1000 / config.clientSendRate / 2);
      }, 1000 / config.clientSendRate / 2);
}

let lastPing_ = Date.now();

function updatePlayers(data) {
  placements = [];
  queueMicrotask(() =>
    nearestGameObjects = gameObjects.filter( object => object && Math.hypot(object?.x - player.x, object?.y - player.y) <= config.playerScale + (object?.group?.scale || 50) ));
  if (Date.now() - lastPing_ > 3000) {
    lastPing_ = Date.now();
    pingSocket();
  }
  current = Date.now() - tmpTime;
  average = average / 2 + (Date.now() - tmpTime) / 2;
  serverLag = Math.abs(1000 / config.serverUpdateRate - average);
  tmpTime = Date.now();
  let tt = false;
  turretReload = Math.min(turretReload + current, 2500);
  if (reloads[player.weaponIndex] < speeds[player.weaponIndex]) reloads[player.weaponIndex] += current;
  else reloads[player.weaponIndex] = speeds[player.weaponIndex];

  if (window.keyEvents.KeyG) place(player.items[5], getAttackDir()); 
  else if (window.keyEvents.KeyV) place(player.items[2], getAttackDir());
  else if (window.keyEvents.KeyF) place(player.items[4], getAttackDir()); 
  
  for (i = 0; i < data.length;) {
    (tmpObj = findPlayerBySID(data[i])) && (tmpObj.t1 = void 0 === tmpObj.t2 ? tmpTime : tmpObj.t2, tmpObj.t2 = tmpTime, tmpObj.x1 = tmpObj.x, tmpObj.y1 = tmpObj.y, tmpObj.x2 = data[i + 1], tmpObj.y2 = data[i + 2], tmpObj.d1 = void 0 === tmpObj.d2 ? data[i + 3] : tmpObj.d2, tmpObj.d2 = data[i + 3], tmpObj.dt = 0, tmpObj.buildIndex = data[i + 4], tmpObj.weaponIndex = data[i + 5], tmpObj.weaponVariant = data[i + 6], tmpObj.team = data[i + 7], tmpObj.isLeader = data[i + 8], tmpObj.skinIndex = data[i + 9], tmpObj.tailIndex = data[i + 10], tmpObj.iconIndex = data[i + 11], tmpObj.zIndex = data[i + 12], tmpObj.visible = !0), i += 13;
    if (player != tmpObj) tt = tmpObj;
    if ((othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] < speeds[tmpObj.weaponIndex]) {
      (othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] += current;
    } else (othersReloads[tmpObj.sid] || (othersReloads[tmpObj.sid] = [0, 0]))[tmpObj.weaponIndex] = speeds[tmpObj.weaponIndex];
  }
  
  if (tt.skinIndex == 26 || tt.skinIndex == 11) {
    io.send("c", false, getAttackDir());
  }
  if (othersReloads[tt.sid][tt.weaponIndex] > speeds[tt.weaponIndex] - average - window.pingTime) {
    storeEquip(6);
    storeEquip(15, true);
  };
  if (!tt || tt.sid == player.sid || Math.hypot(tt.x - player.x, tt.y - player.y) > 190) storeEquip(getBiomeHat());
  if (attackState && tt.skinIndex != 26 && tt.skinIndex != 11) {
    io.send("c", true, player.buildIndex ? getAttackDir() : hit360);
  }

  if (instakilling) return;

  if (window.keyEvents.SwitchKeyR) {
    normalInsta();
  } else if (window.keyEvents.SwitchKeyT) {
    reverseInsta();
  }

  if (!breaking && reloads[player.weapons[0]] !== speeds[player.weapons[0]] && player.weaponIndex != player.weapons[0]) io.send("5", (waka = player.weapons[0]), true);
  else if (!breaking && reloads[player.weapons[1]] !== speeds[player.weapons[1]] && player.weaponIndex != player.weapons[1]) io.send("5", (waka = player.weapons[1]), true);

  if (!breaking && reloads[player.weapons[1]] >= speeds[player.weapons[1]] && reloads[player.weapons[0]] >= speeds[player.weapons[0]] && player.weaponIndex != player.weapons[0]) {
    io.send("5", (waka = player.weapons[0]), true);
  }

  if (!tt) storeEquip(5, true);
  else autoplace(tt);

  const trap = nearestGameObjects.find(obj => obj?.active && obj?.trap && obj?.owner?.sid != player.sid && Math.hypot(obj?.x - player.x, obj?.y - player.y) < obj?.scale && !alliancePlayers.includes(obj?.owner?.sid));

  if (!trap && breaking) {
    breaking = false;
    io.send("c", false, getAttackDir());
  }
  if (!trap) return;

  autobreak(trap);
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
  lastPing = Date.now(), io.send('pp');
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
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  },
  function () {
    var tmpMid = config.mapScale / 2;
    objectManager.add(0, tmpMid, tmpMid + 200, 0, config.treeScales[3], 0), objectManager.add(1, tmpMid, tmpMid - 480, 0, config.treeScales[3], 0), objectManager.add(2, tmpMid + 300, tmpMid + 450, 0, config.treeScales[3], 0), objectManager.add(3, tmpMid - 950, tmpMid - 130, 0, config.treeScales[2], 0), objectManager.add(4, tmpMid - 750, tmpMid - 400, 0, config.treeScales[3], 0), objectManager.add(5, tmpMid - 700, tmpMid + 400, 0, config.treeScales[2], 0), objectManager.add(6, tmpMid + 800, tmpMid - 200, 0, config.treeScales[3], 0), objectManager.add(7, tmpMid - 260, tmpMid + 340, 0, config.bushScales[3], 1), objectManager.add(8, tmpMid + 760, tmpMid + 310, 0, config.bushScales[3], 1), objectManager.add(9, tmpMid - 800, tmpMid + 100, 0, config.bushScales[3], 1), objectManager.add(10, tmpMid - 800, tmpMid + 300, 0, items.list[4].scale, items.list[4].id, items.list[10]), objectManager.add(11, tmpMid + 650, tmpMid - 390, 0, items.list[4].scale, items.list[4].id, items.list[10]), objectManager.add(12, tmpMid - 400, tmpMid - 450, 0, config.rockScales[2], 2);
  }(),
  function e() {
    mainContext.globalCompositeOperation = "source-over";
    now = Date.now(), delta = now - lastUpdate, lastUpdate = now,
      function () {
        if (deathTextScale < 120 && (deathTextScale += 0.1 * delta, diedText.style.fontSize = Math.min(Math.round(deathTextScale), 120) + 'px'), player) {
          var attackDir = UTILS.getDistance(camX, camY, player.x, player.y),
            tmpDir = UTILS.getDirection(player.x, player.y, camX, camY),
            camSpd = Math.min(0.01 * attackDir * delta, attackDir);
          attackDir > 0.1 ? (camX += camSpd * Math.cos(tmpDir), camY += camSpd * Math.sin(tmpDir)) : (camX = player.x, camY = player.y);
        } else
          camX = 100, camY = 100;
        for (var lastTime = now - 1000 / config.serverUpdateRate, i = 0; i < players.length + ais.length; ++i)
          if ((tmpObj = players[i] || ais[i - players.length]) && tmpObj.visible)
            if (tmpObj.forcePos)
              tmpObj.x = tmpObj.x2, tmpObj.y = tmpObj.y2, tmpObj.dir = tmpObj.d2;
            else {
              var total = tmpObj.t2 - tmpObj.t1,
                ratio = (lastTime - tmpObj.t1) / total;
              tmpObj.dt += delta;
              var tmpRate = Math.min(1.7, tmpObj.dt / 170),
                tmpDiff = tmpObj.x2 - tmpObj.x1;
              tmpObj.x = tmpObj.x1 + tmpDiff * tmpRate, tmpDiff = tmpObj.y2 - tmpObj.y1, tmpObj.y = tmpObj.y1 + tmpDiff * tmpRate, tmpObj.dir = Math.lerpAngle(tmpObj.d2, tmpObj.d1, Math.min(1.2, ratio));
            }
        var xOffset = camX - maxScreenWidth / 2,
          yOffset = camY - maxScreenHeight / 2;
        config.snowBiomeTop - yOffset <= 0 && config.mapScale - config.snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.mapScale - config.snowBiomeTop - yOffset <= 0 ? (mainContext.fillStyle = '#dbc666', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.snowBiomeTop - yOffset >= maxScreenHeight ? (mainContext.fillStyle = '#fff', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight)) : config.snowBiomeTop - yOffset >= 0 ? (mainContext.fillStyle = '#fff', mainContext.fillRect(0, 0, maxScreenWidth, config.snowBiomeTop - yOffset), mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, config.snowBiomeTop - yOffset, maxScreenWidth, maxScreenHeight - (config.snowBiomeTop - yOffset))) : (mainContext.fillStyle = '#b6db66', mainContext.fillRect(0, 0, maxScreenWidth, config.mapScale - config.snowBiomeTop - yOffset), mainContext.fillStyle = '#dbc666', mainContext.fillRect(0, config.mapScale - config.snowBiomeTop - yOffset, maxScreenWidth, maxScreenHeight - (config.mapScale - config.snowBiomeTop - yOffset))), firstSetup || ((waterMult += waterPlus * config.waveSpeed * delta) >= config.waveMax ? (waterMult = config.waveMax, waterPlus = -1) : waterMult <= 1 && (waterMult = waterPlus = 1), mainContext.globalAlpha = 1, mainContext.fillStyle = '#dbc666', renderWaterBodies(xOffset, yOffset, mainContext, config.riverPadding), mainContext.fillStyle = '#91b2db', renderWaterBodies(xOffset, yOffset, mainContext, 250 * (waterMult - 1))), mainContext.lineWidth = 4, mainContext.strokeStyle = '#000', mainContext.globalAlpha = 0.06, mainContext.beginPath();
        for (var x = -camX; x < maxScreenWidth; x += maxScreenHeight / 18)
          x > 0 && (mainContext.moveTo(x, 0), mainContext.lineTo(x, maxScreenHeight));
        for (var y = -camY; y < maxScreenHeight; y += maxScreenHeight / 18)
          x > 0 && (mainContext.moveTo(0, y), mainContext.lineTo(maxScreenWidth, y));
        for (mainContext.stroke(), mainContext.globalAlpha = 1, mainContext.strokeStyle = outlineColor, renderGameObjects(-1, xOffset, yOffset), mainContext.globalAlpha = 1, mainContext.lineWidth = 5.5, renderProjectiles(0, xOffset, yOffset), renderPlayers(xOffset, yOffset, 0), mainContext.globalAlpha = 1, i = 0; i < ais.length; ++i)
          (tmpObj = ais[i])
          .active && tmpObj.visible && (tmpObj.animate(delta), mainContext.save(), mainContext.translate(tmpObj.x - xOffset, tmpObj.y - yOffset), mainContext.rotate(tmpObj.dir + tmpObj.dirPlus - Math.PI / 2), renderAI(tmpObj, mainContext), mainContext.restore());
        if (renderGameObjects(0, xOffset, yOffset), renderProjectiles(1, xOffset, yOffset), renderGameObjects(1, xOffset, yOffset), renderPlayers(xOffset, yOffset, 1), renderGameObjects(2, xOffset, yOffset), renderGameObjects(3, xOffset, yOffset), mainContext.fillStyle = '#000', mainContext.globalAlpha = 0.09, xOffset <= 0 && mainContext.fillRect(0, 0, -xOffset, maxScreenHeight), config.mapScale - xOffset <= maxScreenWidth) {
          var tmpY = Math.max(0, -yOffset);
          mainContext.fillRect(config.mapScale - xOffset, tmpY, maxScreenWidth - (config.mapScale - xOffset), maxScreenHeight - tmpY);
        }
        if (yOffset <= 0 && mainContext.fillRect(-xOffset, 0, maxScreenWidth + xOffset, -yOffset), config.mapScale - yOffset <= maxScreenHeight) {
          var tmpX = Math.max(0, -xOffset),
            tmpMin = 0;
          config.mapScale - xOffset <= maxScreenWidth && (tmpMin = maxScreenWidth - (config.mapScale - xOffset)), mainContext.fillRect(tmpX, config.mapScale - yOffset, maxScreenWidth - tmpX - tmpMin, maxScreenHeight - (config.mapScale - yOffset));
        }
        for (mainContext.globalAlpha = 1, mainContext.fillStyle = 'rgba(0, 0, 70, 0.35)', mainContext.fillRect(0, 0, maxScreenWidth, maxScreenHeight), mainContext.strokeStyle = darkOutlineColor, i = 0; i < players.length + ais.length; ++i)
          if ((tmpObj = players[i] || ais[i - players.length])
            .visible && (10 != tmpObj.skinIndex || tmpObj == player || tmpObj.team && tmpObj.team == player.team)) {
            var tmpText = (tmpObj.team ? '[' + tmpObj.team + '] ' : '') + ([...blacklist.keys()].map(e => new RegExp(e, "gm")).find(e => e.test(tmpObj.name)) ? "me retared homo" : tmpObj.name || '') + " " + tmpObj.shameCount;
            if ('' != tmpText) {
              if (mainContext.font = (tmpObj.nameScale || 30) + 'px Hammersmith One', mainContext.fillStyle = tmpObj?.sid == window?.sidFocus ? (window.keyEvents.SwitchKeyR ? '#f00' : '#ff0') : '#fff', mainContext.textBaseline = 'middle', mainContext.textAlign = 'center', mainContext.lineWidth = tmpObj.nameScale ? 11 : 8, mainContext.lineJoin = 'round', mainContext.strokeText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config.nameY), mainContext.fillText(tmpText, tmpObj.x - xOffset, tmpObj.y - yOffset - tmpObj.scale - config.nameY), tmpObj.isLeader && iconSprites.crown.isLoaded) {
                var tmpS = config.crownIconScale;
                tmpX = tmpObj.x - xOffset - tmpS / 2 - mainContext.measureText(tmpText)
                  .width / 2 - config.crownPad, mainContext.drawImage(iconSprites.crown, tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS, tmpS);
              }
              1 == tmpObj.iconIndex && iconSprites.skull.isLoaded && (tmpS = config.crownIconScale, tmpX = tmpObj.x - xOffset - tmpS / 2 + mainContext.measureText(tmpText)
                .width / 2 + config.crownPad, mainContext.drawImage(iconSprites.skull, tmpX, tmpObj.y - yOffset - tmpObj.scale - config.nameY - tmpS / 2 - 5, tmpS, tmpS));
            }
            tmpObj.health > 0 && (config.healthBarWidth, mainContext.fillStyle = darkOutlineColor, mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth - config.healthBarPad, tmpObj.y - yOffset + tmpObj.scale + config.nameY, 2 * config.healthBarWidth + 2 * config.healthBarPad, 17, 8), mainContext.fill(), mainContext.fillStyle = tmpObj == player || tmpObj.team && tmpObj.team == player.team ? '#8ecc51' : '#cc5151', mainContext.roundRect(tmpObj.x - xOffset - config.healthBarWidth, tmpObj.y - yOffset + tmpObj.scale + config.nameY + config.healthBarPad, 2 * config.healthBarWidth * (tmpObj.health / tmpObj.maxHealth), 17 - 2 * config.healthBarPad, 7), mainContext.fill());
          }
        for (textManager.update(delta, mainContext, xOffset, yOffset), i = 0; i < players.length; ++i)
          if ((tmpObj = players[i])
            .visible && tmpObj.chatCountdown > 0) {
            tmpObj.chatCountdown -= delta, tmpObj.chatCountdown <= 0 && (tmpObj.chatCountdown = 0), mainContext.font = '32px Hammersmith One';
            var tmpSize = mainContext.measureText(tmpObj.chatMessage);
            mainContext.textBaseline = 'middle', mainContext.textAlign = 'center', tmpX = tmpObj.x - xOffset, tmpY = tmpObj.y - tmpObj.scale - yOffset - 90;
            var tmpW = tmpSize.width + 17;
            mainContext.fillStyle = 'rgba(0,0,0,0.2)', mainContext.roundRect(tmpX - tmpW / 2, tmpY - 23.5, tmpW, 47, 6), mainContext.fill(), mainContext.fillStyle = '#fff', mainContext.fillText(tmpObj.chatMessage, tmpX, tmpY);
          };
        placements.forEach(placement => {
          mainContext.fillStyle = 'rgba(255, 0, 0, 0.15)';
          renderCircle(placement.x - xOffset, 
                      placement.y - yOffset,
                      45, mainContext, true);
        });
        !function (delta) {
          if (player && player.alive) {
            mapContext.clearRect(0, 0, mapDisplay.width, mapDisplay.height), mapContext.strokeStyle = '#fff', mapContext.lineWidth = 4;
            for (var i = 0; i < mapPings.length; ++i)
              (tmpPing = mapPings[i])
              .update(mapContext, delta);
            if (mapContext.globalAlpha = 1, mapContext.fillStyle = '#fff', renderCircle(player.x / config.mapScale * mapDisplay.width, player.y / config.mapScale * mapDisplay.height, 7, mapContext, !0), mapContext.fillStyle = 'rgba(255,255,255,0.35)',  true && minimapData)
              for (i = 0; i < minimapData.length;)
                renderCircle(minimapData[i] / config.mapScale * mapDisplay.width, minimapData[i + 1] / config.mapScale * mapDisplay.height, 7, mapContext, !0), i += 2;
            lastDeath && (mapContext.fillStyle = '#fc5553', mapContext.font = '34px Hammersmith One', mapContext.textBaseline = 'middle', mapContext.textAlign = 'center', mapContext.fillText('x', lastDeath.x / config.mapScale * mapDisplay.width, lastDeath.y / config.mapScale * mapDisplay.height)), mapMarker && (mapContext.fillStyle = '#fff', mapContext.font = '34px Hammersmith One', mapContext.textBaseline = 'middle', mapContext.textAlign = 'center', mapContext.fillText('x', mapMarker.x / config.mapScale * mapDisplay.width, mapMarker.y / config.mapScale * mapDisplay.height));
          }
        }(delta), -1 !== controllingTouch.id && renderControl(controllingTouch.startX, controllingTouch.startY, controllingTouch.currentX, controllingTouch.currentY), -1 !== attackingTouch.id && renderControl(attackingTouch.startX, attackingTouch.startY, attackingTouch.currentX, attackingTouch.currentY);
      }(), requestAnimFrame(e);
    mainContext.globalAlpha = Math.min(Math.max(motionBlurLevel, 0), 1);
    mainContext.globalCompositeOperation = "source-over";
  }(), window.openLink = openLink, window.aJoinReq = aJoinReq, window.follmoo = function () {
    moofoll || (moofoll = !0, saveVal('moofoll', 1));
  }, window.kickFromClan = kickFromClan, window.sendJoin = sendJoin, window.leaveAlliance = leaveAlliance, window.createAlliance = createAlliance, window.storeBuy = storeBuy, window.storeEquip = storeEquip, window.showItemInfo = showItemInfo, window.selectSkinColor = function (index) {
    skinColor = index, updateSkinColorPicker();
  }, window.changeStoreIndex = function (index) {
    currentStoreIndex != index && (currentStoreIndex = index, generateStoreList());
  }, window.config = config;

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
</style>
`);
