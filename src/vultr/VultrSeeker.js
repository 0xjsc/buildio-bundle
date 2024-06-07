
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

export default vultrSeeker;
