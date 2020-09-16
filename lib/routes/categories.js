'use strict';

const express = require('express');
const router = express.Router();
const category = require('../models/categories/categories-model');

// routes as MiddleWare
// categories
router.post('/categories', postCategories);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategories);
router.put('/categories/:id', updateOneCategory);
router.patch('/categories/:id', updateOneCategory);
router.delete('/categories/:id', deleteOneCategory);

// ----------------------------------- functions categories ----------------------------------- //
function postCategories(req, res, next) {
  category.create(req.body).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function getCategories(req, res, next) {
  let paramID = req.params.id;
  category.get(paramID).then(data => {
    res.status(200).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function updateOneCategory(req, res, next) {
  let paramID = req.params.id;
  category.update(paramID, req.body).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function deleteOneCategory(req, res, next) {
  let paramID = req.params.id;
  category.delete(paramID).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

module.exports = router;