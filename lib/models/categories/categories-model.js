'use strict';

const schema = require('./categories-schema');
const Model = require('../mongo');
/** 
 * Class that extends mongo model and calls its schema into its
 * own class for differentiation purposes.
 * 
 * */
class Category extends Model {
  constructor() {
    super(schema);
  }

}

module.exports = new Category();