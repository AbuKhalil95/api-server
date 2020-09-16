'use strict';

const schema = require('./products-schema');
const Model = require('../mongo');
/** 
 * Class that extends mongo model and calls its schema into its
 * own class for differentiation purposes.
 * 
 * */
class Product extends Model {
  constructor() {
    super(schema);
  }

}

module.exports = new Product();