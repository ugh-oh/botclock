const {Command} = require('discord-akairo');

// this command only works in a direct message
class DmCommand extends Command {
    constructor() {
        super('dm', {
            aliases: ['dm'],
            ownerOnly: true,
            channel: 'dm'
        });
    }
    exec(message) {
        return message.reply("Hey.")
    }
}

module.exports = DmCommand