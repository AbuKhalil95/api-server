'use strict';

const express = require('express');
const router = express.Router();
const product = require('../models/products/products-model');

// routes as MiddleWare
// products
router.post('/products', postProducts);
router.get('/products', getProducts);
router.get('/products/:id', getProducts);
router.put('/products/:id', updateOneProduct);
router.patch('/products/:id', updateOneProduct);
router.delete('/products/:id', deleteOneProduct);

// ----------------------------------- functions products ----------------------------------- //
function postProducts(req, res, next) {
  product.create(req.body).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function getProducts(req, res, next) {
  let paramID = req.params.id;
  product.get(paramID).then(data => {
    res.status(200).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function updateOneProduct(req, res, next) {
  let paramID = req.params.id;
  product.update(paramID, req.body).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function deleteOneProduct(req, res, next) {
  let paramID = req.params.id;
  product.delete(paramID).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

module.exports = router;