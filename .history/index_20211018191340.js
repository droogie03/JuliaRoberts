const Telebot = require("telebot");
const CONSTANTS = require("./constants");

const pistas = 0;

const bot = new Telebot({
  token: CONSTANTS.TELEGRAM_TOKEN,
});

bot.on(["/start", "/hola"], (msg) => {
  bot.sendMessage(msg.chat.id, `Hola ${msg.chat.first_name} bienvenida!`);
});

bot.on("text", function (data) {
  if (data.text.match("pista"))
    switch (pistas) {
      case 0:
        data.reply.text("primera pista");
        break;
      case 1:
        data.reply.text("segunda pista");
        break;
      case 2:
        data.reply.text("tercera pista");
        break;
      default:
        data.reply.text("no hay mas pistas");
        break;
    }
    pistas+=1;
});

bot.start();
