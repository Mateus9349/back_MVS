const { Router } = require('express');
const DambientaisController = require('../controllers/DambientaisController');

const dambientaisController = new DambientaisController();

const router = Router()

router.get('/dambientais', (req, res) => dambientaisController.pegaTodos(req, res));
router.get('/dambientais/:id', (req,res) => dambientaisController.pegaUmPorId(req,res)) 
router.post('/dambientais', (req, res) => dambientaisController.criaNovo(req, res));
router.put('/dambientais/:id', (req, res) => dambientaisController.atualiza(req,res));
router.delete('/dambientais/:id', (req, res) => dambientaisController.exclui(req, res));

module.exports = router;