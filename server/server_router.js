//Router: riceve le richieste da telegram e le passa a bot.js
const express_server = require('express');


const bot = require('../Primati/bot');
bot.start(); // setta il webhook del bot

const bot_serverRouter = express_server.Router();
bot_serverRouter.use(express_server.json());

// GET sul router
bot_serverRouter.get(`/${bot.configurazione.server.router}`, function (req, res){
	bot.log.in_console("Ricevuta get sul router di primati...");
	res.status(200).json({msg: "...ok"});
});


// POST sul ruter, le richieste vengono processate da bot.js
bot_serverRouter.post(`/${bot.configurazione.server.router}/post`, function (req, res) {
	bot.log.in_console("Ricevuta post sul router del primati bot");
	
	// trigger-event su bot.js
    bot.primati.processUpdate(req.body);
	res.status(200).json({msg: "Ricevuta post"});
});


module.exports = bot_serverRouter;