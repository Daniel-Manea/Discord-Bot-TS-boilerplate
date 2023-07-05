import { Client } from "discord.js";
import fs from "fs";
import path from "path";

export const EventHandler = (client: Client) => {
  const parentDirName = path.join(__dirname, "../");
  const eventPaths = path.resolve(parentDirName, "events");
  const eventFolders = fs.readdirSync(eventPaths);

  for (const eventFolder of eventFolders) {
    const eventPath = path.join(parentDirName, "events", eventFolder);
    const eventFiles = fs.readdirSync(eventPath).map((file) => file);

    for (const file of eventFiles) {
      const filePath = path.join(eventPath, file);
      const event = require(filePath).default;
      if (event.once) {
        client.once(event.name, (...args: any[]) => event.run(...args));
      } else {
        client.on(event.name, (...args: any[]) => event.run(...args));
      }
    }
  }
};
