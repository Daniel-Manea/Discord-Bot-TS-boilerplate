import { Client, Collection, GatewayIntentBits, SlashCommandBuilder } from 'discord.js'
import { config } from 'dotenv'
import { EventEmitter } from 'node:events'
import { CommandHandler } from '@handlers/CommandHandler'
import { EventHandler } from '@handlers/EventHandler'



config()
EventEmitter.defaultMaxListeners = 0


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.MessageContent,
  ],
})


CommandHandler(client)
EventHandler(client)
client.login(process.env.TOKEN)
