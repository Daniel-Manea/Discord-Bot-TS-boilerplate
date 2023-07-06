import { ICommand } from "@interfaces/ICommand";
import Ping from "@commands/ping/Ping";
import Error from "@commands/error/Error"
export const Commands: ICommand[] = [
  Ping,
  Error
];