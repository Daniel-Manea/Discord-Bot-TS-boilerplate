"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const CommandHandler = (client) => {
    const parentDirName = path_1.default.join(__dirname, '../');
    const commandPaths = path_1.default.resolve(parentDirName, 'commands');
    const commandFolders = fs_1.default.readdirSync(commandPaths);
    for (const commandFolder of commandFolders) {
        const commandPath = path_1.default.join(parentDirName, 'commands', commandFolder);
        const commandFiles = fs_1.default.readdirSync(commandPath).map(file => file);
        for (const file of commandFiles) {
            const filePath = path_1.default.join(commandPath, file);
            const command = require(filePath).default;
            client.on(command.name, async (interaction) => {
                if (!interaction.isCommand())
                    return;
                if (interaction.commandName !== command.data.name)
                    return;
                command.run(interaction);
            });
        }
    }
};
exports.CommandHandler = CommandHandler;
