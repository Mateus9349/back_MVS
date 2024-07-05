const { Router } = require('express');
const AmbientalController = require('../controllers/AmbientalController');

const ambientalController = new AmbientalController();

const router = Router()

router.get('/ambiental', (req, res) => ambientalController.pegaTodos(req, res));
router.get('/ambiental/:id', (req,res) => ambientalController.pegaUmPorId(req,res)) 
router.post('/ambiental', (req, res) => ambientalController.criaNovo(req, res));
router.put('/ambiental/:id', (req, res) => ambientalController.atualiza(req,res));
router.delete('/ambiental/:id', (req, res) => ambientalController.exclui(req, res));

module.exports = router;