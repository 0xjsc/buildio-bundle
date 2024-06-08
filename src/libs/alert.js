
document.documentElement.insertAdjacentHTML("beforeend", `
<style>
.dialogMM {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 2px 2px 12px black;
  height: 300px;
  width: 300px;
  top: 50%;
  left: 50%;
  z-index: 10;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
  border-image-slice: 1;
  color: white;
  transition: all 1s 0s;
  overflow: auto;
}
</style>
`)

function Dialog(text) {
  const menu = document.createElement("div");
  document.documentElement.appendChild(menu);
  menu.class = "dialogMM";
  menu.innerHTML = text;
  
  return menu;
}

export default Dialog;
