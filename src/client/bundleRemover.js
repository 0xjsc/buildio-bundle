document.write("<p></p>");

const regex = /bundle|assets|index|FRVR|howl|jquery|cookie|double|turnst|frvr/gm;
const doc = document.implementation.createHTMLDocument(document.title);

doc.open();
doc.write(document.documentElement.innerHTML);
doc.close();

for (const element of doc.querySelectorAll("*[src]")) {
  if (regex.test(element.src)) 
    element.remove();
}

document.replaceChild( document.importNode(doc.documentElement, true), document.documentElement);
