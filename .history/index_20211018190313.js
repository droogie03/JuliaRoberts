const Telebot = require("telebot");
const CONSTANTS = require("./constants");

const bot = new Telebot({
    token: CONSTANTS.TELEGRAM_TOKEN
});

bot.on(['/start','/hola'], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola ${msg.chat.first_name:} bienvenida!`)
});


bot.on('text', function(data) {
    console.log(data)
    bot.sendMessage(data.chat.id, data)

});

bot.start();