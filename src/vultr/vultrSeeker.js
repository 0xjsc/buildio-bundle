
async function vultrSeeker() {
  return new Promise(async resolve => {
    const req = await fetch("https://api-sandbox.moomoo.io/servers");
    const json = await req.json();

    const bestServer = json.find(server => server.playerCount < server.playerCapacity);

    if (location.href.includes("mohmoh")) {
      resolve(location.host); 
    } else {
      alert("[*] AutoWASM Is not currently support on moomoo.io!"); 
    }
  });
}

export default vultrSeeker;
