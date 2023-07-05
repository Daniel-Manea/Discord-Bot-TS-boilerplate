import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
export async function createErrorButton() {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setLabel("Ir a soporte")
      .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/channels/1125398609106567198/1125398609723133954")
      
  );
}
