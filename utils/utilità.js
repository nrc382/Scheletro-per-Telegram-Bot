module.exports.log = class log {
    constructor (configurazione){
        if (configurazione.sviluppo.logs == true){
            this.abilitato = true;
        } else {
            this.abilitato = false;
        }
    }
    in_console(testo) {
        if (this.abilitato == true){
            console.log(testo);
        }
    }
}