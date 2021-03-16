const {Inhibitor} = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
    constructor () {
        super('blacklist', {
            reason: 'blacklist'
        })
    }
    exec (message) {
        // Add a User ID to the blacklist to have the bot ignore
        const blacklist = ['']
        return blacklist.includes(message.author.id);
    }
}

module.exports = BlacklistInhibitor