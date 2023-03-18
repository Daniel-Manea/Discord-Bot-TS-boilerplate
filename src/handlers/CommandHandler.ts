import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

export const CommandHandler = (client: Client) => {
  const parentDirName = path.join(__dirname, '../');
  const commandPaths = path.resolve(parentDirName, 'commands');
  const commandFolders = fs.readdirSync(commandPaths);

  for (const commandFolder of commandFolders) {
    const commandPath = path.join(parentDirName, 'commands', commandFolder);
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.ts'));

    for (const file of commandFiles) {
      const filePath = path.join(commandPath, file);
      const command = require(filePath).default;
      client.once(command.name, (...args: any[]) => command.run(...args));
    }
  }
};