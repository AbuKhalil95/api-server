const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('404 Not found test', ()=> {

  it('should respond with 404 for not found routes', ()=>{
    return mockRequest.get('/category').then(result=>{
      expect(result.status).toBe(404);
    });
  });
});