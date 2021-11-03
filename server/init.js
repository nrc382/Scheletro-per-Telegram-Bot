const fs = require('fs');
const path = require("path");

// Legge e Restituisce il file di configurazione `configurazione.json`
module.exports.configurazione = async () => {
    let config_dir = path.dirname(require.main.filename);
    config_dir = path.join(config_dir, "./server/configurazione.json");
    console.log(config_dir);
    return fs.access(config_dir, fs.F_OK, function (err) {
        if (err) {
            console.error(err)
            return (false);
        } else{
            let to_return = fs.readFileSync(config_dir);
            let parse = JSON.parse(to_return);
            console.log(parse)
            return  (parse);
        }
    });
    
}
