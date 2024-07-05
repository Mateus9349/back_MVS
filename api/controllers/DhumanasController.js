const Controller = require('./Controller.js');
const DhumanasServices = require('../services/DhumanasServices.js');

const d_humanasServices = new DhumanasServices();

class DhumanasController extends Controller {
    constructor() {
        super(d_humanasServices);
    }
}

module.exports = DhumanasController;