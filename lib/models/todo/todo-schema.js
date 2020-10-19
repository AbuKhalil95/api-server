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
const todo = mongoose.Schema({
  complete: {
    type: Boolean,
  },
  text: {
    type: String, required: true,
  },
  difficulty: {
    type: Number, required: true,
  },
  assignee: {
    type: String, required: true,
  },
});

module.exports = mongoose.model('todo', todo);