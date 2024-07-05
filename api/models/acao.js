'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Acao.hasMany(models.Lista, {
        foreignKey: 'acao_id'
      });
    }
  }
  Acao.init({
    tecnico: DataTypes.STRING,
    acao: DataTypes.STRING,
    projeto: DataTypes.STRING,
    codigo: DataTypes.STRING,
    associacao: DataTypes.STRING,
    territorio: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Acao',
    tableName: 'acoes',
  });
  return Acao;
};