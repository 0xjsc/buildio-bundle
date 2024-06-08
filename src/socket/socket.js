const isMohMoh = location.href.includes("mohmoh");

class SocketController {

  constructor(io, packets) {

    Object.defineProperty(this, "io", {
      get() {
        return io();
      }, set(value) { }
    });
    
    this.packets = packets;
  };

  send(packetId, ...data) {
    const packetSid = this.packets[packetId];

    this.io.send(packetSid, ...data);
  }

  register() {
    if (!isMohMoh) return;

    this.send("REGISTER", 0);
  };

  acceptClanJoin(allianceNotifications, join) {
    this.send("ACCEPT_CLAN_JOIN", allianceNotifications[0].sid, join);
  };

  kickFromClan(sid) {
    this.send("CLAN_KICK", sid);
  };

  requestClanJoin(alliances, sid) {
    this.send("SEND_CLAN_JOIN", alliances[sid]);
  };

  createClan(name) {
    this.send("CLAN_CREATE", name);
  };

  leaveClan() {
    this.send("CLAN_LEAVE");
  };

  itemAction(sid, isCape, actionType) {
    this.send("STORE_EQUIP", actionType, sid, isCape);
  };

  sendChat(message) {
    this.send("SEND_CHAT", message);
  };

  stopMovement() {
    this.send("RESET_MOVE_DIR");
  };

  updateHittingState(isHitting, lookDir = null) {
    this.send("ATTACK", isHitting, lookDir);
  };

  freeze(freezeSid) {
    this.send("FREEZE", freezeSid);
  };

  updateMoveDir(moveDir) {
    this.send("MOVEMENT", moveDir);
  };

  mapPing() {
    this.send("MAP_PING", true);
  };

  updateHoldItem(itemSid, isWeapon) {
    this.send("CHANGE_WEAPON", itemSid, isWeapon);
  };

  spawn(name, skin) {
    this.send("SPAWN", {
      name,
      skin
    });
  };

  upgradeItem(upgradeSid) {
    this.send("UPGRADE", upgradeSid);
  };

  pingServer() {
    this.send("PING");
  }
  
};

export default SocketController;
