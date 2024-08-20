const { Router } = require('express');
const AcaoController = require('../controllers/AcaoController');

const acaoController = new AcaoController();

const router = Router()

router.get('/acao', (req, res) => acaoController.pegaTodos(req, res));
router.get('/acao/:id', (req,res) => acaoController.pegaUmPorId(req,res)); 
router.post('/acao', (req, res) => acaoController.criaNovo(req, res));
router.put('/acao/:id', (req, res) => acaoController.atualiza(req,res));
router.delete('/acao/:id', (req, res) => acaoController.exclui(req, res));

module.exports = router;