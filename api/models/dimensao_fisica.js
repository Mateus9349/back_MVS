'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimensao_fisica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dimensao_fisica.hasMany(models.cabecalhoMVS, {
        foreignKey: 'fisica_id'
      });
    }
  }
  Dimensao_fisica.init({
    equipamentosProprios: DataTypes.STRING,
    facilidadeDeslocarProdutos: DataTypes.STRING,
    faltaTrabalharMelhor: DataTypes.STRING,
    oQueFaltaTrabalharMelhor: DataTypes.STRING,
    equipamentosComunidade: DataTypes.STRING,
    equipamentosUtilizados: DataTypes.STRING,
    motivoEquipamentosNaoUtilizados: DataTypes.STRING,
    equipamentosLugar: DataTypes.STRING,
    respeitoEspacoTempo: DataTypes.STRING,
    facilidadeTransportarProdutosColetaArmazenamento: DataTypes.STRING,
    motivoTransporteProdutosColetaArmazenamento: DataTypes.STRING,
    facilidadeTransportarProdutosArmazenamentoVenda: DataTypes.STRING,
    motivoTransporteProdutosArmazenamentoVenda: DataTypes.STRING,
    comprasUltimosDoisAnos: DataTypes.STRING,
    dinheiroAtividadesCompras: DataTypes.STRING,
    facilidadeTransporteCidade: DataTypes.STRING,
    motivoFacilidadeTransporteCidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dimensao_fisica',
    tableName: 'dimensao_fisica',
  });
  return Dimensao_fisica;
};