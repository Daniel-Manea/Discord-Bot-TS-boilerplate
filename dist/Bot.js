"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const node_events_1 = require("node:events");
const CommandHandler_1 = require("./handlers/CommandHandler");
const EventHandler_1 = require("./handlers/EventHandler");
(0, dotenv_1.config)();
node_events_1.EventEmitter.defaultMaxListeners = 0;
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildVoiceStates,
        discord_js_1.GatewayIntentBits.GuildPresences,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
(0, CommandHandler_1.CommandHandler)(client);
(0, EventHandler_1.EventHandler)(client);
client.login(process.env.TOKEN);
