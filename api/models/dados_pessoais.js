'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dados_pessoais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dados_pessoais.hasMany(models.cabecalhoMVS, {
        foreignKey: 'dados_id'
      });
    }
  }
  Dados_pessoais.init({
    cidadeNascimento: DataTypes.STRING,
    estadoNascimento: DataTypes.STRING,
    cidadeAtual: DataTypes.STRING,
    localidadeAtual: DataTypes.STRING,
    tempoMoraLocal: DataTypes.STRING,
    idade: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    temFilhos: DataTypes.STRING,
    quantidadeFilhos: DataTypes.STRING,
    nivelEscolaridade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dados_pessoais',
    tableName: 'dados_pessoais',
  });
  return Dados_pessoais;
};