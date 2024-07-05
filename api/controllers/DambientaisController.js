const Controller = require('./Controller.js');
const DambientaisServices = require('../services/DambientaisServices.js');

const d_ambientaisServices = new DambientaisServices();

class DambientaisController extends Controller {
    constructor() {
        super(d_ambientaisServices);
    }
}

module.exports = DambientaisController;