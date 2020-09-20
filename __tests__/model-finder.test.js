const { server }  = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
// const getModel = require('../lib/middleware/model-finder');


// const express = require('express');
// const router = express.Router();
// mockRequest.param('model', getModel);

xdescribe ('Category Model', ()=> {
  it('should respond with the correct model', async ()=>{
    await mockRequest.get('/api/v1/categories').then((req, res, next) => {
      expect(req.model).toEqual('categories');
    });
  });

  it('should respond with the correct model', async ()=>{
    await mockRequest.get('/api/v1/products').then((req, res, next) => {
      expect(req.model).toEqual('products');
    });
  });

  it('should respond with a list of available models', async ()=>{
    await mockRequest.get('/api/v1/categories').then((req, res, next) => {
      expect(req.model).toEqual('Available Models/Routes are: \n\n\
      1- categories \n\
      2- products');
    });
  });
});