import { Message } from "discord.js";

export default {
  name: 'messageCreate',
  run: async (message: Message) => {
    if (message.content === 'ping') {
      message.channel.send('Pong!');
    }
  }
};
