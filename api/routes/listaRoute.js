const { Router } = require('express');
const ListaController = require('../controllers/ListaController');

const listaController = new ListaController();

const router = Router()

router.get('/lista', (req, res) => listaController.pegaTodos(req, res));
router.get('/lista/:id', (req,res) => listaController.pegaUmPorId(req,res))
router.post('/lista', (req, res) => listaController.criaNovo(req, res));
router.put('/lista/:id', (req, res) => listaController.atualiza(req,res));
router.delete('/lista/:id', (req, res) => listaController.exclui(req, res));

module.exports = router;