"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorButton = void 0;
const discord_js_1 = require("discord.js");
async function createErrorButton() {
    return new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
        .setLabel("Ir a soporte")
        .setStyle(discord_js_1.ButtonStyle.Link)
        .setURL("https://discord.com/channels/1125398609106567198/1125398609723133954"));
}
exports.createErrorButton = createErrorButton;
