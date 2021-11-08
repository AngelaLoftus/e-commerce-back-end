const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    //id
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    //product_id
    product_id: {
      type: DataTypes.INTEGER,
      //references the Product model's ID
    },

    //tag_id
    tag_id: {
      type: DataTypes.INTEGER,
      //references the Tag model's ID
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
