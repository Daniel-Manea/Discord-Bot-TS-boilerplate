"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const Error_1 = require("../../ui-elements/embeds/Error");
const Error_2 = require("../../ui-elements/buttons/Error");
exports.default = {
    name: 'interactionCreate',
    data: new builders_1.SlashCommandBuilder()
        .setName("error")
        .setDescription("Generar un error"),
    async run(interaction) {
        console.log("Error generado");
        await interaction.reply({
            embeds: [await (0, Error_1.createErrorEmbed)({ title: "Hola", description: "Ha surgido un error en la aplicación." })],
            components: [await (0, Error_2.createErrorButton)()]
        });
    },
};
