import { Client } from "discord.js";
import { Commands } from "./Commands";

export default (client: Client): void => {

  client.on("ready", async () => {
    if (!client.user || !client.application) {
      return;
    }
    
    try {
      await client.application.commands.set(Commands)
      console.log(`Successfully reloaded ${Commands.length} application (/) commands.`);
    } catch (error) {
      console.error(error);
    }
  });
}; 