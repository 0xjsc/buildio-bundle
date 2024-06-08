const html = document.documentElement.innerHTML;
const regex = /bundle|assets|index|FRVR|howl|jquery|cookie|double|turnst|frvr/gm;
const doc = document.implementation.createHTMLDocument(document.title);

document.write("<p></p>");
doc.open();
doc.write(html);
doc.close();

for (const element of doc.querySelectorAll("*[src]")) {
  if (regex.test(element.src)) 
    element.remove();
}

document.replaceChild( document.importNode(doc.documentElement, true), document.documentElement);
