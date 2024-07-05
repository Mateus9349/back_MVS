const { Router } = require('express');
const FisicaController = require('../controllers/FisicaController');

const fisicaController = new FisicaController();

const router = Router()

router.get('/fisica', (req, res) => fisicaController.pegaTodos(req, res));
router.get('/fisica/:id', (req,res) => fisicaController.pegaUmPorId(req,res)) 
router.post('/fisica', (req, res) => fisicaController.criaNovo(req, res));
router.put('/fisica/:id', (req, res) => fisicaController.atualiza(req,res));
router.delete('/fisica/:id', (req, res) => fisicaController.exclui(req, res));

module.exports = router;