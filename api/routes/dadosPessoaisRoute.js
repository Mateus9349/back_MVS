const { Router } = require('express');
const DadosPessoaisController = require('../controllers/DadosPessoaisController');

const dadosPessoaisController = new DadosPessoaisController();

const router = Router()

router.get('/dadosPessoais', (req, res) => dadosPessoaisController.pegaTodos(req, res));
router.get('/dadosPessoais/:id', (req,res) => dadosPessoaisController.pegaUmPorId(req,res)) 
router.post('/dadosPessoais', (req, res) => dadosPessoaisController.criaNovo(req, res));
router.put('/dadosPessoais/:id', (req, res) => dadosPessoaisController.atualiza(req,res));
router.delete('/dadosPessoais/:id', (req, res) => dadosPessoaisController.exclui(req, res));

module.exports = router;