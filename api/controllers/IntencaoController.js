const Controller = require('./Controller.js');
const IntencaoServices = require('../services/IntencaoServices.js');

const intencaoServices = new IntencaoServices();

class IntencaoController extends Controller {
    constructor() {
        super(intencaoServices);
    }
}

module.exports = IntencaoController;