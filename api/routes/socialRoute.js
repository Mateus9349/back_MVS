const { Router } = require('express');
const SocialController = require('../controllers/SocialController');

const socialController = new SocialController();

const router = Router()

router.get('/social', (req, res) => socialController.pegaTodos(req, res));
router.get('/social/:id', (req,res) => socialController.pegaUmPorId(req,res)) 
router.post('/social', (req, res) => socialController.criaNovo(req, res));
router.put('/social/:id', (req, res) => socialController.atualiza(req,res));
router.delete('/social/:id', (req, res) => socialController.exclui(req, res));

module.exports = router;