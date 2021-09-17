const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    product: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    img: {
        type: DataTypes.STRING  
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wholesalePrice: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    sellPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },{ timestamps: false });
};