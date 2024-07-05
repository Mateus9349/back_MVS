const Controller = require('./Controller.js');
const BlocoBServices = require('../services/BlocoBServices.js');

const blocoBServices = new BlocoBServices();

class BlocoBController extends Controller {
    constructor() {
        super(blocoBServices);
    }
}

module.exports = BlocoBController;