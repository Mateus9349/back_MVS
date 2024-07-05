const Controller = require('./Controller.js');
const AcaoServices = require('../services/AcaoServices.js');

const acaoServices = new AcaoServices();

class AcaoController extends Controller {
    constructor() {
        super(acaoServices);
    }
}

module.exports = AcaoController;