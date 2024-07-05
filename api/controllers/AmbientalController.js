const Controller = require('./Controller.js');
const AmbientalServices = require('../services/AmbientalServices.js');

const ambientalServices = new AmbientalServices();

class AmbientalController extends Controller {
    constructor() {
        super(ambientalServices);
    }
}

module.exports = AmbientalController;