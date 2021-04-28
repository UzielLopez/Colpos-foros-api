'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Publicacion.init({
    contenido: DataTypes.TEXT,
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATE,
    usuario: DataTypes.STRING,
    idCategoriaPublicacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publicacion',
  });
  return Publicacion;
};