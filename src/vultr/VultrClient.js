
function VultrClient(baseUrl, devPort, lobbySize, lobbySpread, rawIPs) {
  'localhost' == location.hostname && (window.location.hostname = '127.0.0.1'), this.debugLog = !1, this.baseUrl = baseUrl, this.lobbySize = lobbySize, this.devPort = devPort, this.lobbySpread = lobbySpread, this.rawIPs = !!rawIPs, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0;
}

VultrClient.prototype.regionInfo = {
  0: {
    name: 'Local',
    latitude: 0,
    longitude: 0
  },
  'vultr:1': {
    name: 'New Jersey',
    latitude: 40.1393329,
    longitude: -75.8521818
  },
  'vultr:2': {
    name: 'Chicago',
    latitude: 41.8339037,
    longitude: -87.872238
  },
  'vultr:3': {
    name: 'Dallas',
    latitude: 32.8208751,
    longitude: -96.8714229
  },
  'vultr:4': {
    name: 'Seattle',
    latitude: 47.6149942,
    longitude: -122.4759879
  },
  'vultr:5': {
    name: 'Los Angeles',
    latitude: 34.0207504,
    longitude: -118.691914
  },
  'vultr:6': {
    name: 'Atlanta',
    latitude: 33.7676334,
    longitude: -84.5610332
  },
  'vultr:7': {
    name: 'Amsterdam',
    latitude: 52.3745287,
    longitude: 4.7581878
  },
  'vultr:8': {
    name: 'London',
    latitude: 51.5283063,
    longitude: -0.382486
  },
  'vultr:9': {
    name: 'Frankfurt',
    latitude: 50.1211273,
    longitude: 8.496137
  },
  'vultr:12': {
    name: 'Silicon Valley',
    latitude: 37.4024714,
    longitude: -122.3219752
  },
  'vultr:19': {
    name: 'Sydney',
    latitude: -33.8479715,
    longitude: 150.651084
  },
  'vultr:24': {
    name: 'Paris',
    latitude: 48.8588376,
    longitude: 2.2773454
  },
  'vultr:25': {
    name: 'Tokyo',
    latitude: 35.6732615,
    longitude: 139.569959
  },
  'vultr:39': {
    name: 'Miami',
    latitude: 25.7823071,
    longitude: -80.3012156
  },
  'vultr:40': {
    name: 'Singapore',
    latitude: 1.3147268,
    longitude: 103.7065876
  }
}, VultrClient.prototype.start = function (callback, errorCallback) {
  this.callback = callback, this.errorCallback = errorCallback;
  this.connect(null, null, null);
}, VultrClient.prototype.findServer = function (region, index) {
  var serverList = this.servers[region];
  if (Array.isArray(serverList)) {
    for (var i = 0; i < serverList.length; i++) {
      var server = serverList[i];
      if (server.index == index)
        return server;
    }
    console.warn('Could not find server in region ' + region + ' with index ' + index + '.');
  } else
    this.errorCallback('No server list for region ' + region);
}, VultrClient.prototype.pingServers = function () {
  var _this = this,
    requests = [];
  for (var region in this.servers)
    if (this.servers.hasOwnProperty(region)) {
      var serverList = this.servers[region],
        targetServer = serverList[Math.floor(Math.random() * serverList.length)];
      _this.connect(null, null, null);
      /*null != targetServer ? function (serverList, targetServer) {
          var request = new XMLHttpRequest();
          request.onreadystatechange = function (requestEvent) {
              var request = requestEvent.target;
              if (4 == request.readyState)
                  if (200 == request.status) {
                      for (var i = 0; i < requests.length; i++)
                          requests[i].abort();
                      _this.log('Connecting to region', targetServer.region);
                      var targetGame = _this.seekServer(targetServer.region);
                      _this.connect(targetGame[0], targetGame[1], targetGame[2]);
                  } else
                      console.warn('Error pinging ' + targetServer.ip + ' in region ' + region);
          };
          var targetAddress = '//' + _this.serverAddress(targetServer.ip, !0) + ':' + _this.serverPort(targetServer) + '/ping';
          request.open('GET', targetAddress, !0), request.send(null), _this.log('Pinging', targetAddress), requests.push(request);
      }(0, targetServer) : console.log('No target server for region ' + region);*/
    }
}, VultrClient.prototype.seekServer = function (region, isPrivate, gameMode) {
  null == gameMode && (gameMode = 'random'), null == isPrivate && (isPrivate = !1);
  const gameModeList = ['random'];
  var lobbySize = this.lobbySize,
    lobbySpread = this.lobbySpread,
    servers = this.servers[region].flatMap(function (s) {
      var gameIndex = 0;
      return s.games.map(function (g) {
        var currentGameIndex = gameIndex++;
        return {
          region: s.region,
          index: s.index * s.games.length + currentGameIndex,
          gameIndex: currentGameIndex,
          gameCount: s.games.length,
          playerCount: g.playerCount,
          isPrivate: g.isPrivate
        };
      });
    })
    .filter(function (s) {
      return !s.isPrivate;
    })
    .filter(function (s) {
      return !isPrivate || 0 == s.playerCount && s.gameIndex >= s.gameCount / 2;
    })
    .filter(function (s) {
      return 'random' == gameMode || gameModeList[s.index % gameModeList.length].key == gameMode;
    })
    .sort(function (a, b) {
      return b.playerCount - a.playerCount;
    })
    .filter(function (s) {
      return s.playerCount < lobbySize;
    });
  if (isPrivate && servers.reverse(), 0 != servers.length) {
    var randomSpread = Math.min(lobbySpread, servers.length),
      serverIndex = Math.floor(Math.random() * randomSpread),
      rawServer = servers[serverIndex = Math.min(serverIndex, servers.length - 1)],
      serverRegion = rawServer.region,
      gameIndex = (serverIndex = Math.floor(rawServer.index / rawServer.gameCount), rawServer.index % rawServer.gameCount);
    return this.log('Found server.'), [
      serverRegion,
      serverIndex,
      gameIndex
    ];
  }
  this.errorCallback('No open servers.');
}, VultrClient.prototype.connect = function (region, index, game) {
  if (!this.connected) {
    //metak
    /*var server = this.findServer(region, index);
    null != server ? (this.log('Connecting to server', server, 'with game index', game), server.games[game].playerCount >= this.lobbySize ? this.errorCallback('Server is already full.') : (window.history.replaceState(document.title, document.title, this.generateHref(region, index, game, this.password)), this.server = server, this.gameIndex = game, this.log('Calling callback with address', this.serverAddress(server.ip), 'on port', this.serverPort(server), 'with game index', game), this.callback(this.serverAddress(server.ip), this.serverPort(server), game))) : this.errorCallback('Failed to find server for region ' + region + ' and index ' + index);*/
  }
}, VultrClient.prototype.switchServer = function (region, index, game, password) {
  this.switchingServers = !0, window.location.href = this.generateHref(region, index, game, password);
}, VultrClient.prototype.generateHref = function (region, index, game, password) {
  var href = '/?server=' + (region = this.stripRegion(region)) + ':' + index + ':' + game;
  return password && (href += '&password=' + encodeURIComponent(password)), href;
}, VultrClient.prototype.serverAddress = function (ip, forceSecure) {
  return 'a'
}, VultrClient.prototype.serverPort = function (server) {
  return 0 == server.region ? this.devPort : location.protocol.startsWith('https') ? 443 : 80;
}, VultrClient.prototype.processServers = function (serverList) {
  this.servers = [];
}, VultrClient.prototype.ipToHex = function (ip) {
  return ip.split('.')
    .map(component => ('00' + parseInt(component)
        .toString(16))
      .substr(-2))
    .join('')
    .toLowerCase();
}, VultrClient.prototype.log = function () {
  return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ? console.verbose.apply(void 0, arguments) : void 0;
}, VultrClient.prototype.stripRegion = function (region) {
  return region.startsWith('vultr:') ? region = region.slice(6) : region.startsWith('do:') && (region = region.slice(3)), region;
}, window.testVultrClient = function () {
  var assertIndex = 1;

  function assert(actual, expected) {
    (actual = '' + actual) == (expected = '' + expected) ? console.log(`Assert ${ assertIndex } passed.`): console.warn(`Assert ${ assertIndex } failed. Expected ${ expected }, got ${ actual }.`), assertIndex++;
  }
  var client1 = new VultrClient('test.io', -1, 5, 1, !1);
  client1.errorCallback = function (error) {}, client1.processServers(function (regions) {
    var servers = [];
    for (var region in regions)
      for (var regionServers = regions[region], i = 0; i < regionServers.length; i++)
        servers.push({
          ip: region + ':' + i,
          scheme: 'testing',
          region: region,
          index: i,
          games: regionServers[i].map(p => ({
            playerCount: p,
            isPrivate: !1
          }))
        });
    return servers;
  }({
    1: [
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ],
    2: [
      [
        5,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ]
    ],
    3: [
      [
        5,
        0,
        1,
        5
      ],
      [
        0,
        0,
        0,
        0
      ]
    ],
    4: [
      [
        5,
        1,
        1,
        5
      ],
      [
        1,
        0,
        0,
        0
      ]
    ],
    5: [
      [
        5,
        1,
        1,
        5
      ],
      [
        1,
        0,
        4,
        0
      ]
    ],
    6: [
      [
        5,
        5,
        5,
        5
      ],
      [
        2,
        3,
        1,
        4
      ]
    ],
    7: [
      [
        5,
        5,
        5,
        5
      ],
      [
        5,
        5,
        5,
        5
      ]
    ]
  })), assert(client1.seekServer(1, !1), [
    1,
    0,
    0
  ]), assert(client1.seekServer(1, !0), [
    1,
    1,
    3
  ]), assert(client1.seekServer(2, !1), [
    2,
    0,
    1
  ]), assert(client1.seekServer(2, !0), [
    2,
    1,
    3
  ]), assert(client1.seekServer(3, !1), [
    3,
    0,
    2
  ]), assert(client1.seekServer(3, !0), [
    3,
    1,
    3
  ]), assert(client1.seekServer(4, !1), [
    4,
    0,
    1
  ]), assert(client1.seekServer(4, !0), [
    4,
    1,
    3
  ]), assert(client1.seekServer(5, !1), [
    5,
    1,
    2
  ]), assert(client1.seekServer(5, !0), [
    5,
    1,
    3
  ]), assert(client1.seekServer(6, !1), [
    6,
    1,
    3
  ]), assert(client1.seekServer(6, !0), void 0), assert(client1.seekServer(7, !1), void 0), assert(client1.seekServer(7, !0), void 0), console.log('Tests passed.');
};
var concat = function (x, y) {
  return x.concat(y);
};
Array.prototype.flatMap = function (f) {
  return function (f, xs) {
    return xs.map(f)
      .reduce(concat, []);
  }(f, this);
};

export default VultrClient;
