const Controller = require('./Controller.js');
const ListaServices = require('../services/ListaServices.js');

const listaServices = new ListaServices();

class ListaController extends Controller {
    constructor() {
        super(listaServices);
    }
}

module.exports = ListaController;