'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  respuesta.init({
    usuario: DataTypes.STRING,
    fecha: DataTypes.DATE,
    contenido: DataTypes.TEXT,
    idPublicacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'respuesta',
  });
  return respuesta;
};