import { Client } from "discord.js";

export default {
  name: 'ready',
  once: true,
  run: async (client: Client) => {
    let guildMembers = 0;
    const guildTableData = client.guilds.cache.map(guild => {
      guildMembers += guild.memberCount;
      return {
        "Guild name": guild.name,
        "Guild id": guild.id,
        "Guild channels": guild.channels.cache.size,
        "Guild members": guild.memberCount
      }
    });
    // console.table(guildTableData, ["Guild name", "Guild id", "Guild channels", "Guild members"]);
    console.table([{
      "Client name": client.user?.username.replace(/\p{Emoji}/gu, ''),
      "Client discriminator": client.user?.discriminator,
      "Client id": client.user?.id,
      "Total guilds": client.guilds.cache.size,
      "Total channels": client.channels.cache.size,
      "Total members": guildMembers
    }], ["Client name", "Client discriminator", "Client id", "Total guilds", "Total channels", "Total members"]);
  }
};
