var LxCommunicator = require("lxcommunicator");

export default function initializeCommunicatorConfig() {
  const uuid = getUUID();

  const WebSocketConfig = LxCommunicator.WebSocketConfig;

  let deviceInfo: string;

  if (typeof window !== "undefined") {
    deviceInfo = window.navigator.userAgent;
  } else {
    deviceInfo = require("os").hostname();
  }

  const config = new WebSocketConfig(
    WebSocketConfig.protocol.WS,
    uuid,
    deviceInfo,
    WebSocketConfig.permission.APP,
    false
  );

  const socket = new LxCommunicator.WebSocket(config);

  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  return socket;
}
