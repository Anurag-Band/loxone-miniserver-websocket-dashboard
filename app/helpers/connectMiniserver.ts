import initializeCommunicatorConfig from "./lxCommunicatorConfig";
import { IMiniserverConnection } from "../../types";

export default async function connectMiniserver({
  ip_address,
  username,
  password,
}: IMiniserverConnection) {
  const socket = initializeCommunicatorConfig();

  await socket.open(ip_address, username, password);

  return socket;
}
