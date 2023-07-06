"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const tslib_1 = require("tslib");
const Ping_1 = tslib_1.__importDefault(require("./commands/ping/Ping"));
const Error_1 = tslib_1.__importDefault(require("./commands/error/Error"));
exports.Commands = [
    Ping_1.default,
    Error_1.default
];
