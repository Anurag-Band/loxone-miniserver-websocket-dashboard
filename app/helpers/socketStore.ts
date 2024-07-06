// socketStore.ts
let socket: any;

export function setSocket(newSocket: any) {
  socket = newSocket;
}

export function getSocket() {
  return socket;
}

