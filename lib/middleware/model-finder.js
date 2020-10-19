const categories = require('../models/categories/categories-model');
const products = require('../models/products/products-model');
const todo = require('../models/todo/todo-model');

/**
 * Looks up the proper model with url param
 */
module.exports = (req, res, next) => {
  let model = req.params.model;
  switch(model) {
  case 'categories': 
    req.model = categories;
    next();
    break;

  case 'products':
    req.model = products;
    next();
    break;

  case 'todo':
    req.model = todo;
    next();
    break;
  default:
    next(
      'Available Models/Routes are: \n\n\
       1- categories \n\
       2- products',
    );
    break;
  }
};