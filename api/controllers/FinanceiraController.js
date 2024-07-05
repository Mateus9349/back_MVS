const Controller = require('./Controller.js');
const FinanceiraServices = require('../services/FinanceiraServices.js');

const financeiraServices = new FinanceiraServices();

class FinanceiraController extends Controller {
    constructor() {
        super(financeiraServices);
    }
}

module.exports = FinanceiraController;