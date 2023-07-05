import { Client, CommandInteraction } from 'discord.js';
import fs from 'fs';
import path from 'path';

export const CommandHandler = (client: Client) => {
  const parentDirName = path.join(__dirname, '../');
  const commandPaths = path.resolve(parentDirName, 'commands');
  const commandFolders = fs.readdirSync(commandPaths);

  for (const commandFolder of commandFolders) {
    const commandPath = path.join(parentDirName, 'commands', commandFolder);
    const commandFiles = fs.readdirSync(commandPath).map(file => file);

    for (const file of commandFiles) {
      const filePath = path.join(commandPath, file);
      const command = require(filePath).default;
      client.on(command.name, async (interaction: CommandInteraction) => {
        if (!interaction.isCommand()) return;
        if (interaction.commandName !== command.data.name) return;
        command.run(interaction)
      });
    }
  }
};