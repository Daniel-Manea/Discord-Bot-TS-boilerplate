import { ICommand } from "src/interfaces/ICommand";

export const Ping: ICommand = {
  name: "ping",
  description: "Returns a greeting",
  run: async ({interaction}) => {
      const content = "Pong!";

      await interaction.followUp({
          ephemeral: true,
          content
      });
  }
};