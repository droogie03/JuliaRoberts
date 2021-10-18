const Telebot = require("telebot");
const CONSTANTS = require("./constants");

const bot = new Telebot({
    token: CONSTANTS.TELEGRAM_TOKEN
});

bot.on(['/start','/hola'], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola ${msg.chat.first_name} bienvenida!`)
});


bot.on('text', function(data) {

    if(data.text.match('pista'))
        data.reply.text(data.chat.id);
    else
        data.reply.text('prueba otra vez');

});

bot.start();