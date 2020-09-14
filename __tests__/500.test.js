const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('500 bad logic test', ()=> {

  it('should respond with 500 for bad input/logic', ()=>{
    return mockRequest.get('/bad').then(result=>{
      expect(result.status).toBe(500);
    });
  });
});