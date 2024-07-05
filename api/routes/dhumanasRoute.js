const { Router } = require('express');
const DhumanasController = require('../controllers/DhumanasController');

const dhumanasController = new DhumanasController();

const router = Router()

router.get('/dhumanas', (req, res) => dhumanasController.pegaTodos(req, res));
router.get('/dhumanas/:id', (req,res) => dhumanasController.pegaUmPorId(req,res)) 
router.post('/dhumanas', (req, res) => dhumanasController.criaNovo(req, res));
router.put('/dhumanas/:id', (req, res) => dhumanasController.atualiza(req,res));
router.delete('/dhumanas/:id', (req, res) => dhumanasController.exclui(req, res));

module.exports = router;