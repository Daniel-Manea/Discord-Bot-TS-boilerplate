import { ChatInputApplicationCommandData, Client, CommandInteraction } from "discord.js";

export interface ICommand extends ChatInputApplicationCommandData {
    run: ({
        client,
        interaction,
    } : {
        client?: Client,
        interaction: CommandInteraction,
    }
    ) => void;
}