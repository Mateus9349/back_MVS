'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cabecalhoMVS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cabecalhoMVS.belongsTo(models.Bloco_B, {
        foreignKey: 'b_id'
      });

      cabecalhoMVS.belongsTo(models.Bloco_C, {
        foreignKey: 'c_id'
      });

      cabecalhoMVS.belongsTo(models.Dados_pessoais, {
        foreignKey: 'dados_id'
      });

      cabecalhoMVS.belongsTo(models.Intencao_trabalhar_atividade, {
        foreignKey: 'intencao_id'
      });

      cabecalhoMVS.belongsTo(models.Dimensao_ambiental, {
        foreignKey: 'ambiental_id'
      });

      cabecalhoMVS.belongsTo(models.Dimensao_financeira, {
        foreignKey: 'financeira_id'
      });

      cabecalhoMVS.belongsTo(models.Dimensao_fisica, {
        foreignKey: 'fisica_id'
      });

      cabecalhoMVS.belongsTo(models.Dimensao_humana, {
        foreignKey: 'humana_id'
      });

      cabecalhoMVS.belongsTo(models.Dimensao_social, {
        foreignKey: 'social_id'
      });
    }
  }
  cabecalhoMVS.init({
    IdentificadorEntrevista: DataTypes.STRING,
    entrevistador: DataTypes.STRING,
    dataEntrevista: DataTypes.STRING,
    duracaoEntrevista: DataTypes.STRING,
    nomeEntrevistado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cabecalhoMVS',
  });
  return cabecalhoMVS;
};