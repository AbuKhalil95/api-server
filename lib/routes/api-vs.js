'use strict';

const express = require('express');
const router = express.Router();

const getModel = require('../middleware/model-finder');

// routes as MiddleWare
// generic model
router.post('/:model', postItem);
router.get('/:model', getItem);
router.get('/:model/:id', getItem);
router.put('/:model/:id', updateOneItem);
router.patch('/:model/:id', updateOneItem);
router.delete('/:model/:id', deleteOneItem);

// get model
router.param('model', getModel);

// ----------------------------------- functions categories ----------------------------------- //
function postItem(req, res, next) {
  req.model.create(req.body).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function getItem(req, res, next) {
  let paramID = req.params.id;
  req.model.get(paramID).then(data => {

    let output = {
      count: 0,
      results: [],
    };
    output.count = data.length;
    output.results = data;

    res.status(200).json(output);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function updateOneItem(req, res, next) {
  let paramID = req.params.id;
  req.model.update(paramID, req.body).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

function deleteOneItem(req, res, next) {
  let paramID = req.params.id;
  req.model.delete(paramID).then(data=>{
    res.status(201).json(data);
  }).catch(err=> {
    console.log(err);
    next(err);
  });
}

module.exports = router;