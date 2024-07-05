'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimensao_social extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dimensao_social.hasMany(models.cabecalhoMVS, {
        foreignKey: 'social_id'
      });
    }
  }
  Dimensao_social.init({
    participacaoAssociacao: DataTypes.STRING,
    relacaoAssociacao: DataTypes.STRING,
    parceriasInstituicoes: DataTypes.STRING,
    quaisParcerias: DataTypes.STRING,
    trabalhoFamilia: DataTypes.STRING,
    impactoFamilia: DataTypes.STRING,
    porqueImpactoFamilia: DataTypes.STRING,
    trabalhoComunidade: DataTypes.STRING,
    impactoComunidade: DataTypes.STRING,
    porqueImpactoComunidade: DataTypes.STRING,
    participacaoJovensDecisoes: DataTypes.STRING,
    escolasJovens: DataTypes.STRING,
    envolvimentoJovensRenda: DataTypes.STRING,
    projetoInatuRendaJovens: DataTypes.STRING,
    trabalhoMulher: DataTypes.STRING,
    outrasTrabalhoMulher: DataTypes.STRING,
    participacaoMulherAtividade: DataTypes.STRING,
    tarefasMulher: DataTypes.STRING,
    quaisTarefasMulher: DataTypes.STRING,
    valorIgualMulher: DataTypes.STRING,
    valorRecebidoMulher: DataTypes.STRING,
    incentivoParticipacaoMulher: DataTypes.STRING,
    comoIncentivoParticipacaoMulher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dimensao_social',
    tableName: 'dimensao_social',
  });
  return Dimensao_social;
};