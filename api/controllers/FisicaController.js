const Controller = require('./Controller.js');
const FisicaServices = require('../services/FisicaServices.js');

const fisicaServices = new FisicaServices();

class FisicaController extends Controller {
    constructor() {
        super(fisicaServices);
    }
}

module.exports = FisicaController;