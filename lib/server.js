'use strict';

// requirements constants
const express = require('express');
const app = express();
const { requestTime } = require('./middleware/timestamp');
const logger = require('./middleware/logger.js');
const notFoundHandler = require('./middleware/404');
const serverErrorHandler = require('./middleware/500');

const db = require('../data/db.json');

// Global MiddleWare where you could call it anywhere and has a global scope
app.use(express.json());
app.use(requestTime);
app.use(logger);
app.use(serverErrorHandler);

// routes as MiddleWare
// categories
app.post('/categories', postCategories);
app.get('/categories', getCategories);
app.get('/categories/:id', getOneCategory);
app.put('/categories/:id', updateOneCategory);
app.delete('/categories/:id', deleteOneCategory);

// products
app.post('/products', postProducts);
app.get('/products', getProducts);
app.get('/products/:id', getOneProduct);
app.put('/products/:id', updateOneProduct);
app.delete('/products/:id', deleteOneProduct);

// annoying favicon request
app.get('/favicon.ico', (req, res) => res.status(204));

// error routes
app.use('*', notFoundHandler);


// functions 
// ----------------------------------- categories ----------------------------------- //
function postCategories(req, res) {
  // temporary template
  const postData = {
    "id": parseInt(db.categories.results[db.categories.results.length - 1].id) + 1,
    "name": req.body.name || 'N/A',
    "display_name": req.body.display_name || 'N/A',
    "description": req.body.description || 'N/A'
  };
  
  db.categories.results.push(postData);
  db.categories.count = db.categories.results.length;
  res.status(201).json(db.categories);
}

function getCategories(req, res) {
  res.status(200).json(db.categories);
}

function getOneCategory(req, res) {
  let paramID = req.params.id;
  let filtered = db.categories.results.filter(result => result.id == paramID);
  if (filtered.length == 0) {
    throw new Error("Bad Request .... No ID match");
  }

  res.status(200).json(filtered);
}

function updateOneCategory(req, res) {
  let paramID = req.params.id;
  const updateData = {
    "id": paramID,
    "name": req.body.name || 'N/A',
    "display_name": req.body.display_name || 'N/A',
    "description": req.body.description || 'N/A'
  };
  let index = db.categories.results.findIndex(category => category.id === paramID);
  if (index == -1) {
    throw new Error("Bad Request .... No ID match");
  }
  
  db.categories.results.splice(index, 1, updateData);
  res.status(202).json(db.categories);
}

function deleteOneCategory(req, res) {
  let paramID = req.params.id;
  let index = db.categories.results.findIndex(category => category.id === paramID);
  if (index == -1) {
    throw new Error("Bad Request .... No ID match");
  }

  db.categories.results.splice(index, 1);
  res.status(202).json(db.categories);
}

// ----------------------------------- products ----------------------------------- //
function postProducts(req, res) {
  // temporary template
  const postData = {
    "id": parseInt(db.products.results[db.products.results.length - 1].id) + 1,
    "category": req.body.category || 'N/A',
    "name": req.body.name || 'N/A',
    "display_name": req.body.display_name || 'N/A',
    "description": req.body.description || 'N/A'
  };

  db.products.results.push(postData);
  db.products.count = db.products.results.length;
  res.status(201).json(db.products);
}

function getProducts(req, res) {
  res.json(db.products);
}

function getOneProduct(req, res) {
  let paramID = req.params.id;
  let filtered = db.products.results.filter(result => result.id == paramID);
  if (filtered.length == 0) {
    throw new Error("Bad Request .... No ID match");
  }

  res.json(filtered);
}

function updateOneProduct(req, res) {
  let paramID = req.params.id;
  const updateData = {
    "id": paramID,
    "category": req.body.category || 'N/A',
    "name": req.body.name || 'N/A',
    "display_name": req.body.display_name || 'N/A',
    "description": req.body.description || 'N/A'
  };

  let index = db.products.results.findIndex(product => product.id === paramID);
  if (index == -1) {
    throw new Error("Bad Request .... No ID match");
  }

  db.products.results.splice(index, 1, updateData);
  res.status(202).json(db.products);
}

function deleteOneProduct(req, res) {
  let paramID = req.params.id;
  let index = db.products.results.findIndex(product => product.id === paramID);
  if (index == -1) {
    throw new Error("Bad Request .... No ID match");
  }

  db.products.results.splice(index, 1);
  res.status(202).json(db.products);}

module.exports = {
  server: app, 
  start: port => {
      let PORT = port || process.env.port || 3000;
      app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
  }
};