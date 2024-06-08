const regex = /bundle|assets/gm;
const doc = document.implementation.createHTMLDocument(document.title);

doc.open();
doc.write(document.documentElement.innerHTML);
doc.close();

for (const element of doc.querySelectorAll("script")) {
  if (regex.test(element)) 
    element.remove();
}

document.replaceChild( document.importNode(doc.documentElement, true), document.documentElement);
