const { Router } = require('express');
const BlocoCController = require('../controllers/BlocoCController');

const blocoCController = new BlocoCController();

const router = Router()

router.get('/blocoC', (req, res) => blocoCController.pegaTodos(req, res));
router.get('/blocoC/:id', (req,res) => blocoCController.pegaUmPorId(req,res)) 
router.post('/blocoC', (req, res) => blocoCController.criaNovo(req, res));
router.put('/blocoC/:id', (req, res) => blocoCController.atualiza(req,res));
router.delete('/blocoC/:id', (req, res) => blocoCController.exclui(req, res));

module.exports = router;