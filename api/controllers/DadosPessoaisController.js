const Controller = require('./Controller.js');
const DadosPessoaisServices = require('../services/DadosPessoaisServices.js');

const dadosPessoaisServices = new DadosPessoaisServices();

class DadosPessoaisController extends Controller {
    constructor() {
        super(dadosPessoaisServices);
    }
}

module.exports = DadosPessoaisController;