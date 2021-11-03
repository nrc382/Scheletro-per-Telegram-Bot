const TelegramBot = require('node-telegram-bot-api');
const configurazione = require("../utils/configurazione.json");
const utilità = require("../utils/utilità")


// Gestore delle stampe log su console
const log = new utilità.log(configurazione);

// Yagop's framework
const primati = new TelegramBot(configurazione.telegram.token, { filepath: false });

// funzione per set del webhook (telegram)
module.exports.start = async () => {
    let post_url = `${configurazione.server.url}/${configurazione.server.router}/post`;
    let bot_options = {
        max_connections: 10,
        allowed_updates: ["message", "inline_query", "callback_query"]
    }

    let webHook_res = await primati.setWebHook(post_url, bot_options);

    if (webHook_res) {
        log.in_console("> Primati bot è attivo e registrato"); // webHook_res
    } else {
        log.in_console("> Woops! Non son riuscito a registrare il WebHookTelegram!\n> ESCO!");
        process.exit(1);
    };
}

module.exports.primati = primati;
module.exports.configurazione = configurazione;
module.exports.log = log;



// EVENTI
primati.on("message", async function (message){
    console.log("Ricevuto");
    console.log(message);
});


primati.on("callback_query", async function (callback){
    console.log("Ricevuto");
    console.log(callback);
});

primati.on("inline_query", async function (inline){
    console.log("Ricevuto");
    console.log(inline);
});





