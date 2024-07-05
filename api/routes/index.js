//routes/index.js

const bodyParser = require('body-parser')
const cors = require('cors')

const login = require('./loginRoute');
const usuarios = require('./usuariosRoute');
const acao = require('./acaoRoute');
const lista = require('./listaRoute');

const cabecalho = require('./cabecalhoRoute');
const dadosPessoais = require('./dadosPessoaisRoute');
const blocoB = require('./blocoBRoute');
const blocoC = require('./blocoCRoute');
const intencao = require('./intencaoRoute');

const ambiental = require('./ambientalRoute');
const financeira = require('./financeiraRoute');
const fisica = require('./fisicaRoute');
const humana = require('./listaRoute');
const social = require('./socialRoute');

const dambientais = require('./dambientaisRoute');
const dhumanas = require('./dhumanasRoute');
const dsociais = require('./dsociaisRoute');
const dfisicas = require('./dfisicasRoute');
const dfinanceiras = require('./dfinanceirasRoute');


module.exports = app => {
  app.use(
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({extended: false}),
    login,
    usuarios,
    acao,
    lista,
    cabecalho,
    dadosPessoais,
    blocoB,
    blocoC,
    intencao,
    ambiental,
    financeira,
    fisica,
    humana,
    social,
    dambientais,
    dhumanas,
    dsociais,
    dfisicas,
    dfinanceiras
  )
}