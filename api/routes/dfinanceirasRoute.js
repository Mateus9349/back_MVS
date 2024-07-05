const { Router } = require('express');
const DfinanceirasController = require('../controllers/DfinanceirasController');

const dfinanceirasController = new DfinanceirasController();

const router = Router()

router.get('/dfinanceiras', (req, res) => dfinanceirasController.pegaTodos(req, res));
router.get('/dfinanceiras/:id', (req,res) => dfinanceirasController.pegaUmPorId(req,res)) 
router.post('/dfinanceiras', (req, res) => dfinanceirasController.criaNovo(req, res));
router.put('/dfinanceiras/:id', (req, res) => dfinanceirasController.atualiza(req,res));
router.delete('/dfinanceiras/:id', (req, res) => dfinanceirasController.exclui(req, res));

module.exports = router;