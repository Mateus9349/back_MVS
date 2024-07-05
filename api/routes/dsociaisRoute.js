const { Router } = require('express');
const DsociaisController = require('../controllers/DsociaisController');

const dsociaisController = new DsociaisController();

const router = Router()

router.get('/dsociais', (req, res) => dsociaisController.pegaTodos(req, res));
router.get('/dsociais/:id', (req,res) => dsociaisController.pegaUmPorId(req,res)) 
router.post('/dsociais', (req, res) => dsociaisController.criaNovo(req, res));
router.put('/dsociais/:id', (req, res) => dsociaisController.atualiza(req,res));
router.delete('/dsociais/:id', (req, res) => dsociaisController.exclui(req, res));

module.exports = router;