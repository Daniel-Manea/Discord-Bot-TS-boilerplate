import { Client, GatewayIntentBits } from 'discord.js'
import { config } from 'dotenv'
import { EventEmitter } from 'node:events'
import CommandHandler from './handlers/CommandHandler'
import { EventHandler } from './handlers/EventHandler'
import DeployCommands from './utils/DeployCommands'
config()
EventEmitter.defaultMaxListeners = 0

// Create a new client instance
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
DeployCommands(client)
// Login to Discord with your client's token
client.login(process.env.TOKEN)
