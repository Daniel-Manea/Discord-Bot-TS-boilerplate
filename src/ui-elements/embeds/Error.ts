import { EmbedBuilder } from "discord.js";

export const createErrorEmbed = async (error: {
  title: string;
  description: string;
}) => {
  return new EmbedBuilder()
  .setColor("Red")
    .setTitle(error.title)
    .setDescription(error.description)
    .setImage("https://cdn.discordapp.com/attachments/1125928231304974397/1126131843171893278/SQUADS_LOGO_AZUL_FONDO_NEGRO_1_1.jpg")
    .addFields(
        {
            name: "¿Necesitas ayuda?",
            value: "Puedes contactar con nosotros en [squads.es](https://squads.es/)"
        }
    )
};


