const { Router } = require('express');
const CabecalhoController = require('../controllers/CabecalhoController');

const cabecalhoController = new CabecalhoController();

const router = Router()

router.get('/cabecalho', (req, res) => cabecalhoController.pegaTodos(req, res));
router.get('/cabecalho/:id', (req,res) => cabecalhoController.pegaUmPorId(req,res)) 
router.post('/cabecalho', (req, res) => cabecalhoController.criaNovo(req, res));
router.put('/cabecalho/:id', (req, res) => cabecalhoController.atualiza(req,res));
router.delete('/cabecalho/:id', (req, res) => cabecalhoController.exclui(req, res));

module.exports = router;