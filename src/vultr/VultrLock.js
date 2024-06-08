
async function removeBundle(resolve) {
  const blacklistRegex = /bundle|index|FRVR/gm;
  const whitelistRegex = /cloud|recap/gm;

  const req = await fetch(location.href);
  const res = await req.text();

  const domParser = new DOMParser();
  const doc = domParser.parseFromString(res, "text/html");
  const scripts = document.querySelectorAll("script");

  for (const script of scripts) {
    const source = script.src;

    if (blacklistRegex.test(source) && !whitelistRegex.test(source)) {
      /** ToDo: fix **/
      script.remove();
    };
  };

  document.replaceChild(doc.documentElement, document.documentElement);

  resolve();
}

function reloadPageSilent() {
  return new Promise(removeBundle);
}

export default reloadPageSilent;
