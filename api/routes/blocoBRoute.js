const { Router } = require('express');
const BlocoBController = require('../controllers/BlocoBController');

const blocoBController = new BlocoBController();

const router = Router()

router.get('/blocoB', (req, res) => blocoBController.pegaTodos(req, res));
router.get('/blocoB/:id', (req,res) => blocoBController.pegaUmPorId(req,res)) 
router.post('/blocoB', (req, res) => blocoBController.criaNovo(req, res));
router.put('/blocoB/:id', (req, res) => blocoBController.atualiza(req,res));
router.delete('/blocoB/:id', (req, res) => blocoBController.exclui(req, res));

module.exports = router;