const {Listener} = require('discord-akairo');

// If user attempts a command that shouldn't be executed by them, it will show up in console.log

class CommandBlockedListener extends Listener {
    constructor() {
        super('commandBlocked', {
            emitter: 'commandHandler',
            event: 'commandBlocked'
        });
    }

    exec(message, command, reason) {
        console.log(`${message.author.username} was blocked from using ${command.id} because of ${reason}!`);
    }
}

module.exports = CommandBlockedListener