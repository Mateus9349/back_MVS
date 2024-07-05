const { Router } = require('express');
const FinanceiraController = require('../controllers/FinanceiraController');

const financeiraController = new FinanceiraController();

const router = Router()

router.get('/financeira', (req, res) => financeiraController.pegaTodos(req, res));
router.get('/financeira/:id', (req,res) => financeiraController.pegaUmPorId(req,res)) 
router.post('/financeira', (req, res) => financeiraController.criaNovo(req, res));
router.put('/financeira/:id', (req, res) => financeiraController.atualiza(req,res));
router.delete('/financeira/:id', (req, res) => financeiraController.exclui(req, res));

module.exports = router;