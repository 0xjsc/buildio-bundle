
async removeBundle(resolve) {
  const blacklistRegex = /bundle|index|FRVR/gm;
  const whitelistRegex /cloud|recap/gm;

  const req = await fetch(location.href);
  const res = await req.text();

  const doc = new DOMParser(res);
  const scripts = document.querySelectorAll("script");

  for (const script of scripts) {
    const source = script.src;

    if (blacklistRegex.test(source) && !whitelistRegex.test(source)) {
      /** ToDo: fix **/
      script.remove();
    };
  };

  document.replaceChild(doc, document.documentElement);

  resolve();
}

function reloadPageSilent() {
  return new Promise(removeBundle);
}

export default reloadPageSilent;
