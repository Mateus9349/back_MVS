const { Router } = require('express');
const IntencaoController = require('../controllers/IntencaoController');

const intencaoController = new IntencaoController();

const router = Router()

router.get('/intencao', (req, res) => intencaoController.pegaTodos(req, res));
router.get('/intencao/:id', (req,res) => intencaoController.pegaUmPorId(req,res)) 
router.post('/intencao', (req, res) => intencaoController.criaNovo(req, res));
router.put('/intencao/:id', (req, res) => intencaoController.atualiza(req,res));
router.delete('/intencao/:id', (req, res) => intencaoController.exclui(req, res));

module.exports = router;