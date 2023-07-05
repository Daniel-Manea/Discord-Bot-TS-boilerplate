import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { ICommand } from "src/interfaces/ICommand";

export default {
  name: 'interactionCreate',
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Revisa si el bot está activo."),
  async run(interaction: CommandInteraction) {
    console.log("Pong!")
    await interaction.reply("Pong!");
  },
} as ICommand;