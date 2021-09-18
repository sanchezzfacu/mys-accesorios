const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('client', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    buyDay: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    quantityBuy: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    totalSpent: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    debt: {
      type: DataTypes.ENUM('true', 'false'),
      allowNull: false,
    },
    debtPrice: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },{ timestamps: false });
};