const Controller = require('./Controller.js');
const SocialServices = require('../services/SocialServices.js');

const socialServices = new SocialServices();

class SocialController extends Controller {
    constructor() {
        super(socialServices);
    }
}

module.exports = SocialController;