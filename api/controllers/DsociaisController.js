const Controller = require('./Controller.js');
const DsociaisServices = require('../services/DsociaisServices.js');

const d_sociaisServices = new DsociaisServices();

class DsociaisController extends Controller {
    constructor() {
        super(d_sociaisServices);
    }
}

module.exports = DsociaisController;