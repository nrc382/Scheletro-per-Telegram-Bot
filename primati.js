// File main

const bot_router = require('./server/server_router');
const express = require('express');
const config = require('./utils/configurazione.json');

//Inizzializza il server
var express_server = new express();

//Utilizza il router definito in server_router
express_server.use(bot_router);

//Ascolta alla porta definita in config
express_server.listen(config.server.port, function () {
	console.log("> Express server in ascolto per PrimatiBot sulla porta "+config.server.port);
});
