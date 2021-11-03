const bot = require('../Primati/bot');
const express_server = require('express');

const bot_serverRouter = express_server.Router();
bot.start();
console.log(bot.configurazione);

bot_serverRouter.use(express_server.json());

bot_serverRouter.get(`/${bot.configurazione.server.router}`, function (req, res){
	bot.log.in_console("Ricevuta get sul router di primati...");
	res.status(200).json({msg: "...ok"});
});


//le richieste post vengono processate da bot.js
bot_serverRouter.post(`/${bot.configurazione.server.router}/post`, function (req, res) {
	bot.log.in_console("Ricevuta post sul router del primati bot");
    bot.primati.processUpdate(req.body);
	res.status(200).json({msg: "Ricevuta post"});
});


module.exports = bot_serverRouter;