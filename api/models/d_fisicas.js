'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class d_fisicas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  d_fisicas.init({
    p1: DataTypes.FLOAT,
    p2: DataTypes.FLOAT,
    p3: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'd_fisicas',
  });
  return d_fisicas;
};