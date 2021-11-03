const bot_router = require('./server/server_router');
const express = require('express');
const config = require('./utils/configurazione.json');


var express_server = new express();
express_server.use(bot_router);
express_server.listen(config.server.port, function () {
	console.log("> Express server in ascolto per PrimatiBot sulla porta "+config.server.port);
});
