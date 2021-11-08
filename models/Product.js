// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //id column
    id: { 
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    //product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //price column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //validate that it is a decimal
      validate: {
        isDecimal: true
      }
    }, 
    //stock
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //set a default value of ten??
      //validate that this is a number
      validate: {
        isNumeric: true
      }
    },
    //category_id
    category_id: {
      type: DataTypes.INTEGER,
      //references the category model's id
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
