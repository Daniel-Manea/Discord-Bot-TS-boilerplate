"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
exports.default = {
    name: 'interactionCreate',
    data: new builders_1.SlashCommandBuilder()
        .setName("ping")
        .setDescription("Revisa si el bot está activo."),
    async run(interaction) {
        console.log("Pong!");
        await interaction.reply("Pong!");
    },
};
