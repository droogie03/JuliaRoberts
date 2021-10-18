const Telebot = require("telebot");
const CONSTANTS = require("./constants");
const CONSTANTS_TEXT = require("./constantsText");
let pistas = 0;

const bot = new Telebot({
  token: CONSTANTS.TELEGRAM_TOKEN,
});

bot.on(["/start", "/hola"], (msg) => {
  bot.sendMessage(msg.chat.id, `Hola ${msg.chat.first_name} bienvenida!`);
  setTimeout(firstText, 1500, msg);
  setTimeout(stickerText, 3000, msg);
  setTimeout(secondText, 9000, msg);
});

bot.on(["/resetea_pistas"], (msg) => {
  bot.sendMessage(msg.chat.id, `Pistas reseteadas, piensalo bien ;).`);
  pistas = 0;
});

bot.on("text", function (data) {
  if (data.text.match("pista") && !data.text.match("/"))
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
  pistas += 1;
});

bot.start();

function firstText(msg) {
  return bot.sendMessage(msg.chat.id, CONSTANTS_TEXT.START_TEXT);
}

function stickerText(msg){
    return msg.reply.photo(CONSTANTS.IMG_MUPPET, { asReply: false });
}

function secondText(msg){
    return bot.sendMessage(msg.chat.id, CONSTANTS_TEXT.SECOND_TEXT);
}