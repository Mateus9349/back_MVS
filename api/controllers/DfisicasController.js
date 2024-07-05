const Controller = require('./Controller.js');
const DfisicasServices = require('../services/DfisicasServices.js');

const d_fisicasServices = new DfisicasServices();

class DfisicasController extends Controller {
    constructor() {
        super(d_fisicasServices);
    }
}

module.exports = DfisicasController;