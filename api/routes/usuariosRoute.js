const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router()

//router.get('/Usuario', UsuarioController.validaUsuario);
router.get('/usuario', UsuarioController.getAll);
router.post('/usuarioValidacao', UsuarioController.validaUsuario);
router.post('/usuarioCadastro', UsuarioController.criaUsuario);
router.put('/usuario/:id', UsuarioController.atualizaUsuario);
router.delete('/usuario/:id', UsuarioController.apagaUsuario);

module.exports = router