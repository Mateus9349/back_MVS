'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bloco_C extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bloco_C.hasMany(models.cabecalhoMVS, {
        foreignKey: 'c_id'
      });
    }
  }
  Bloco_C.init({
    cidadeNascimento: DataTypes.STRING,
    estadoNascimento: DataTypes.STRING,
    cidadeAtual: DataTypes.STRING,
    localidadeAtual: DataTypes.STRING,
    tempoMoraLocal: DataTypes.STRING,
    idade: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    temFilhos: DataTypes.STRING,
    quantidadeFilhos: DataTypes.STRING,
    nivelEscolaridade: DataTypes.STRING,
    telefone: DataTypes.STRING,
    usaComputador: DataTypes.STRING,
    acessoInternet: DataTypes.STRING,
    conexaoInternet: DataTypes.STRING,
    localConexaoInternet: DataTypes.STRING,
    conheceProgramas: DataTypes.STRING,
    quaisProgramas: DataTypes.STRING,
    participaProgramas: DataTypes.STRING,
    satisfacaoProgramas: DataTypes.STRING,
    porqueInsatisfacao: DataTypes.STRING,
    expectativasProjeto: DataTypes.STRING,
    satisfacaoProjeto: DataTypes.STRING,
    identificacao: DataTypes.STRING,
    fonteRenda: DataTypes.STRING,
    atividadeTrabalho: DataTypes.STRING,
    rendaAtividade: DataTypes.STRING,
    tempoAtividade: DataTypes.STRING,
    motivoTrabalho: DataTypes.STRING,
    outroMotivoTrabalho: DataTypes.STRING,
    pessoasTrabalho: DataTypes.STRING,
    outroTipoPessoas: DataTypes.STRING,
    localTrabalho: DataTypes.STRING,
    tempoChegadaTrabalho: DataTypes.STRING,
    meioTransporte: DataTypes.STRING,
    horasTrabalhoSafra: DataTypes.STRING,
    horasTrabalhoSemSafra: DataTypes.STRING,
    pernoiteLocalTrabalho: DataTypes.STRING,
    quantidadeNoitesPernoite: DataTypes.STRING,
    realizaBeneficiamento: DataTypes.STRING,
    tipoBeneficiamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bloco_C',
    tableName: 'bloco_c',
  });
  return Bloco_C;
};