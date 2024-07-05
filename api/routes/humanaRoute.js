const { Router } = require('express');
const HumanaController = require('../controllers/HumanaController');

const humanaController = new HumanaController();

const router = Router()

router.get('/humana', (req, res) => humanaController.pegaTodos(req, res));
router.get('/humana/:id', (req,res) => humanaController.pegaUmPorId(req,res)) 
router.post('/humana', (req, res) => humanaController.criaNovo(req, res));
router.put('/humana/:id', (req, res) => humanaController.atualiza(req,res));
router.delete('/humana/:id', (req, res) => humanaController.exclui(req, res));

module.exports = router;