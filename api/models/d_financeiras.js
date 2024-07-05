'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class d_financeiras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  d_financeiras.init({
    f1: DataTypes.FLOAT,
    f2: DataTypes.FLOAT,
    f3: DataTypes.FLOAT,
    f4: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'd_financeiras',
  });
  return d_financeiras;
};