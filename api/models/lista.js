'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lista.belongsTo(models.Acao, {
        foreignKey: 'acao_id'
      })
    }
  }
  Lista.init({
    nome: DataTypes.STRING,
    genero: DataTypes.STRING,
    idade: DataTypes.NUMBER,
    jovem: DataTypes.STRING,
    organizacao: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lista',
    tableName: 'listas'
  });
  return Lista;
};