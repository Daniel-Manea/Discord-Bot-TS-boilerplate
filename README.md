#TypeScript Discord Bot

This is a simple Discord bot written in TypeScript, using the discord.js library for interacting with the Discord API. The bot can be run using the start script in the package.json file.
Installation

To install and run the bot locally, you'll need to have Node.js and Yarn installed on your machine. Then, you can follow these steps:

    Clone the repository: git clone https://github.com/Daniel-ManeaTypeScript-Discord-Bot.git
    Install dependencies: yarn
    Create a .env file in the root directory of the project, and add your Discord bot token like so: TOKEN=your-token-here
    Start the bot: yarn start

Configuration

The src/Bot.ts file contains the main code for the bot, and you can modify it to add your own functionality. You can also modify the tsconfig.json file to change the TypeScript compiler options.
Dependencies

This project uses the following dependencies:

    discord.js: A powerful library for interacting with the Discord API.
    dotenv: A library for loading environment variables from a .env file.

And the following dev dependencies:

    typescript: A typed superset of JavaScript that compiles to plain JavaScript.
    ts-node: A TypeScript execution environment for Node.js.
    @types/dotenv: TypeScript typings for the dotenv library.
    @types/node: TypeScript typings for the Node.js runtime.

License

This project is licensed under the MIT license. See the LICENSE file for more information.