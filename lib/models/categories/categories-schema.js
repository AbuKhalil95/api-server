'use strict';

const mongoose = require('mongoose');
/** 
 * function that is a schema for categories to use in mongoose.
 *
 * name specifies the product name, no spaces for ease of computing.
 * 
 * display_name specifies the product name for display purposes.
 * 
 * description adds info to product.
 * 
 * */
const category = mongoose.Schema({
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

module.exports = mongoose.model('category', category);