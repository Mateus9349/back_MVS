'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class d_humanas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  d_humanas.init({
    h1: DataTypes.FLOAT,
    h2: DataTypes.FLOAT,
    h3: DataTypes.FLOAT,
    h4: DataTypes.FLOAT,
    h5: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'd_humanas',
  });
  return d_humanas;
};