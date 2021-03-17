// DOCS: https://www.discord.js/
// DOCS: https://www.discord-akairo.github.io/#/docs/


require('dotenv').config();
const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');

class MyClient extends AkairoClient {
    constructor() {
        super({
            // Options for Akairo go here.
            ownerID: '266199942756827137',
        }, {
            // Options for discord.js goes here.
            disableMentions: 'everyone'
        });
        this.commandHandler = new CommandHandler (this, {
            // Options for command handler goes here.
            directory: './commands/',
            prefix: '!'
        });

        this.inhibitorHandler = new InhibitorHandler(this, {
            // Options for inhibitors goes here
            directory: './inhibitors/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            // Options for listeners goes here
            directory: './listeners/'
        });

        // Set commandHandler to use the other Handlers
        this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
        this.commandHandler.useListenerHandler(this.ListenerHandler);

        // set the emitters to listen to the other handlers
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            inhibitorHandler: this.inhibitorHandler,
            listenerHandler: this.listenerHandler
        });

        // Load all commands, handlers and emitters
        this.commandHandler.loadAll();
        this.inhibitorHandler.loadAll();
        this.listenerHandler.loadAll();
        }
}

const client = new MyClient();
client.login(process.env.TOKEN);