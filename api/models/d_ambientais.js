'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class d_ambientais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  d_ambientais.init({
    a1: DataTypes.FLOAT,
    a2: DataTypes.FLOAT,
    a3: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'd_ambientais',
  });
  return d_ambientais;
};