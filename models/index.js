// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//product can only have one category
//dog can only have one owner

// Categories have many Products
//category can be associated with more than 1 product
//owner can have many dogs

//many to many
// Products belongToMany Tags (through ProductTag)


// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
