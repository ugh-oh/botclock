const {Command} = require('discord-akairo');

class SpamCommand extends Command {
    constructor() {
        super('spam', {
            aliases: ['spam']
        });
    }

    exec(message) {
        return message.reply('spam!');
    }
}

module.exports = SpamCommand