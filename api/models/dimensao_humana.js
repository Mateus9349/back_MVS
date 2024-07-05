'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimensao_humana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dimensao_humana.hasMany(models.cabecalhoMVS, {
        foreignKey: 'humana_id'
      });
    }
  }
  Dimensao_humana.init({
    origemAlimentacao: DataTypes.STRING,
    gastaDinheiroAlimentos: DataTypes.STRING,
    acessoAlimentosQualidade: DataTypes.STRING,
    usoDinheiroAlimentos: DataTypes.STRING,
    aprendizadoNatureza: DataTypes.STRING,
    projetoAjudaAlimentacaoAlgumaForma: DataTypes.STRING,
    outroAprendizadoNatureza: DataTypes.STRING,
    usoConhecimentosTrabalho: DataTypes.STRING,
    transmissaoConhecimentos: DataTypes.STRING,
    quemTransmissaoConhecimentos: DataTypes.STRING,
    aprendizadoTrabalho: DataTypes.STRING,
    outroAprendizadoTrabalho: DataTypes.STRING,
    assistenciaTecnica: DataTypes.STRING,
    quaisAssistenciaTecnica: DataTypes.STRING,
    aprendizadoNovo: DataTypes.STRING,
    quaisAprendizadoNovo: DataTypes.STRING,
    pessoasConversa: DataTypes.STRING,
    satisfacaoLocalTrabalho: DataTypes.STRING,
    satisfacaoBeneficiosTrabalho: DataTypes.STRING,
    satisfacaoPessoasTrabalho: DataTypes.STRING,
    reconhecimentoTrabalho: DataTypes.STRING,
    melhorarVidaTrabalho: DataTypes.STRING,
    riscosTrabalho: DataTypes.STRING,
    principaisRiscosTrabalho: DataTypes.STRING,
    treinamentoSegurancaTrabalho: DataTypes.STRING,
    qualTreinamentoSegurancaTrabalho: DataTypes.STRING,
    equipamentoProtecao: DataTypes.STRING,
    quaisEquipamentoProtecao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dimensao_humana',
    tableName: 'dimensao_humana',
  });
  return Dimensao_humana;
};