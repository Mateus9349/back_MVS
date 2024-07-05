'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimensao_ambiental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dimensao_ambiental.hasMany(models.cabecalhoMVS, {
        foreignKey: 'ambiental_id'
      });
    }
  }
  Dimensao_ambiental.init({
    origemMateriais: DataTypes.STRING,
    periodoSemAtividade: DataTypes.STRING,
    tempoSemAtividade: DataTypes.STRING,
    atrapalhaOutraPessoa: DataTypes.STRING,
    estadoFloresta: DataTypes.STRING,
    contribuicaoTrabalhoFloresta: DataTypes.STRING,
    comoContribuicaoTrabalhoFloresta: DataTypes.STRING,
    utilizaEspecieFloresta: DataTypes.STRING,
    disponibilidadeEspecieTempo: DataTypes.STRING,
    facilidadeEncontrarAnimais: DataTypes.STRING,
    motivoNaoEncontrarAnimais: DataTypes.STRING,
    cacaConsumoProprio: DataTypes.STRING,
    impedimentoCaca: DataTypes.STRING,
    motivosImpedimentoCaca: DataTypes.STRING,
    ajudaConservacaoAnimais: DataTypes.STRING,
    motivoNaoAjudarConservacaoAnimais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dimensao_ambiental',
    tableName: 'dimensao_ambiental',
  });
  return Dimensao_ambiental;
};