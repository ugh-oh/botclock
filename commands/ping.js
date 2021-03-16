const {Command} = require('discord-akairo');


class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'tennis']
        });
    }

    exec(message) {
        return message.reply('Pong!');
    }
}

module.exports = PingCommand