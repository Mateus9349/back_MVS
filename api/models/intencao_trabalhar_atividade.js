'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Intencao_trabalhar_atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Intencao_trabalhar_atividade.hasMany(models.cabecalhoMVS, {
        foreignKey: 'intencao_id'
      });
    }
  }
  Intencao_trabalhar_atividade.init({
    silvicultura: DataTypes.STRING,
    tecnicasSilvicultura: DataTypes.STRING,
    tempoManejo: DataTypes.STRING,
    interesseAtividades: DataTypes.STRING,
    conhecimentoAtividade: DataTypes.STRING,
    motivoInteresse: DataTypes.STRING,
    outroMotivoInteresse: DataTypes.STRING,
    ouviuCertificacao: DataTypes.STRING,
    produtosCertificados: DataTypes.STRING,
    produtosOrganicos: DataTypes.STRING,
    motivosCertificacao: DataTypes.STRING,
    concordanciaCertificacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Intencao_trabalhar_atividade',
    tableName: 'intencao_trabalhar_atividade',
  });
  return Intencao_trabalhar_atividade;
};