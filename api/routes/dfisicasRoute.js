const { Router } = require('express');
const DfisicasController = require('../controllers/DfisicasController');

const dfisicasController = new DfisicasController();

const router = Router()

router.get('/dfisicas', (req, res) => dfisicasController.pegaTodos(req, res));
router.get('/dfisicas/:id', (req,res) => dfisicasController.pegaUmPorId(req,res)) 
router.post('/dfisicas', (req, res) => dfisicasController.criaNovo(req, res));
router.put('/dfisicas/:id', (req, res) => dfisicasController.atualiza(req,res));
router.delete('/dfisicas/:id', (req, res) => dfisicasController.exclui(req, res));

module.exports = router;