const Controller = require('./Controller.js');
const DfinanceirasServices = require('../services/DfinanceirasServices.js');

const d_financeirasServices = new DfinanceirasServices();

class DfinanceirasController extends Controller {
    constructor() {
        super(d_financeirasServices);
    }
}

module.exports = DfinanceirasController;