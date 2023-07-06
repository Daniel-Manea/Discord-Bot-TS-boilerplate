"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'messageCreate',
    run: async (message) => {
        if (message.content === 'ping') {
            message.channel.send('Pong!');
        }
    }
};
