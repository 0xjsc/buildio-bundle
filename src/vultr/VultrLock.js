
async function removeBundle(resolve) {
  const blacklistRegex = /bundle|asset|FRVR/gm;

  const req = await fetch(location.href);
  const res = await req.text();

  const domParser = new DOMParser();
  const doc = domParser.parseFromString(res, "text/html");
  const scripts = document.querySelectorAll("script");

  for (const script of scripts) {
    const source = script.src;

    if (blacklistRegex.test(source)) {
      script.src = "data:,";
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
