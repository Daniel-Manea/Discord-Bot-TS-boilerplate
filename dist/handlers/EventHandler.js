"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const EventHandler = (client) => {
    const parentDirName = path_1.default.join(__dirname, "../");
    const eventPaths = path_1.default.resolve(parentDirName, "events");
    const eventFolders = fs_1.default.readdirSync(eventPaths);
    for (const eventFolder of eventFolders) {
        const eventPath = path_1.default.join(parentDirName, "events", eventFolder);
        const eventFiles = fs_1.default.readdirSync(eventPath).map((file) => file);
        for (const file of eventFiles) {
            const filePath = path_1.default.join(eventPath, file);
            const event = require(filePath).default;
            if (event.once) {
                client.once(event.name, (...args) => event.run(...args));
            }
            else {
                client.on(event.name, (...args) => event.run(...args));
            }
        }
    }
};
exports.EventHandler = EventHandler;
