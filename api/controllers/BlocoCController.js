const Controller = require('./Controller.js');
const BlocoCServices = require('../services/BlocoCServices.js');

const blocoCServices = new BlocoCServices();

class BlocoCController extends Controller {
    constructor() {
        super(blocoCServices);
    }
}

module.exports = BlocoCController;