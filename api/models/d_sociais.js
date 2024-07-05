'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class d_sociais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  d_sociais.init({
    s1: DataTypes.FLOAT,
    s2: DataTypes.FLOAT,
    s3: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'd_sociais',
  });
  return d_sociais;
};