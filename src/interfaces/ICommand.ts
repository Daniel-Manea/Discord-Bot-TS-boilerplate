import {CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface ICommand extends SlashCommandBuilder {
    data: SlashCommandBuilder
    run: (interaction: CommandInteraction) => Promise<void>
}