const Telebot = require("telebot");
const CONSTANTS = require("./constants")

const bot = new Telebot({
    token: CONSTANTS.TELEGRAM_TOKEN
});