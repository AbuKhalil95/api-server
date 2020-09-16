'use strict';
/** 
 * A schema for products to use in mongoose.
 * 
 * Category specifies which products are in which category.
 * 
 * name specifies the product name, no spaces for ease of computing.
 * 
 * display specifies the product name for display purposes.
 * 
 * description adds info to product.
 * 
 * */

const mongoose = require('mongoose');

const product = mongoose.Schema({
  category: {
    type: String, required: true,
  },
  name: {
    type: String, required: true,
  },
  display_name: {
    type: String, required: true,
  },
  description: {
    type: String, required: true,
  },
});

module.exports = mongoose.model('product', product);