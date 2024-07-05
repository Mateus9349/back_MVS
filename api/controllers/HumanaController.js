const Controller = require('./Controller.js');
const HumanaServices = require('../services/HumanaServices.js');

const humanaServices = new HumanaServices();

class HumanaController extends Controller {
    constructor() {
        super(humanaServices);
    }
}

module.exports = HumanaController;