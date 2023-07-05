import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { ICommand } from "../../interfaces/ICommand";
import { createErrorEmbed } from "../../ui-elements/embeds/Error";
import { createErrorButton } from "../../ui-elements/buttons/Error";


export default {
  name: 'interactionCreate',
  data: new SlashCommandBuilder()
    .setName("error")
    .setDescription("Generar un error"),
  async run(interaction: CommandInteraction) {
    console.log("Error generado")
    await interaction.reply({
        embeds: [await createErrorEmbed({title: "Hola", description: "Ha surgido un error en la aplicación."})],
        components: [await createErrorButton()]
    });
  },
} as ICommand;