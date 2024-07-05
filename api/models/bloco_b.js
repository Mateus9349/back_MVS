'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bloco_B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bloco_B.hasMany(models.cabecalhoMVS, {
        foreignKey: 'b_id'
      });
    }
  }
  Bloco_B.init({
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
    satisfacaoProjeto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bloco_B',
    tableName: 'bloco_b',
  });
  return Bloco_B;
};