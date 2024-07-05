const Controller = require('./Controller.js');
const CabecalhoServices = require('../services/CabecalhoServices.js');

const cabecalhoServices = new CabecalhoServices();

class CabecalhoController extends Controller {
    constructor() {
        super(cabecalhoServices);
    }
}

module.exports = CabecalhoController;