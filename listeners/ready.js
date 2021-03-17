const {Listener} = require('discord-akairo');

// can be deleted, just says fuckin 'ready' when its online. Has no other effect.
class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }
    exec() {
        console.log('I\'m Ready!');
    }
}

module.exports = ReadyListener;