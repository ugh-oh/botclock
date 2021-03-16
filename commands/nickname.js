const {Command} = require('discord-akairo');

class NicknameCommand extends Command {
    constructor() {
        super('nickname', {
            aliases: ['nickname'],
            channel: 'guild'
        });
    }
    exec(message) {
        console.log(message.member.nickname)
        if (message.member.nickname == null) {
            return message.reply('You don\'t have a nickname set.')
        } else {
            return message.reply(`Your nickname is ${message.member.nickname}.`);
        }
    }
}

module.exports = NicknameCommand