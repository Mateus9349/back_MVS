'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimensao_financeira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dimensao_financeira.hasMany(models.cabecalhoMVS, {
        foreignKey: 'financeira_id'
      });
    }
  }
  Dimensao_financeira.init({
    guardaDinheiroAtividades: DataTypes.STRING,
    guardaDinheiroAssociacao: DataTypes.STRING,
    coberturaGastosAssociacao: DataTypes.STRING,
    coberturaGastosIndividuais: DataTypes.STRING,
    dividasFinanceiras: DataTypes.STRING,
    capacidadePagarDividas: DataTypes.STRING,
    precoBom: DataTypes.STRING,
    pagamentoCompensaGastos: DataTypes.STRING,
    qualidadePreco: DataTypes.STRING,
    controleGastosProducao: DataTypes.STRING,
    controleGastosProducaoMetodo: DataTypes.STRING,
    publicoAlvoVendas: DataTypes.STRING,
    retornoFinanceiroVendas: DataTypes.STRING,
    quemDefinePreco: DataTypes.STRING,
    facilidadeVenderSempre: DataTypes.STRING,
    conheceLinhaCredito: DataTypes.STRING,
    usoLinhaCredito: DataTypes.STRING,
    usoComunidadeLinhaCredito: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dimensao_financeira',
    tableName: 'dimensao_financeira',
  });
  return Dimensao_financeira;
};