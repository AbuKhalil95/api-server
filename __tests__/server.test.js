const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server tests on all routes', ()=> {

  it('should respond with 201 POST /categories', ()=>{
    return mockRequest.post('/categories').then(result=>{
        expect(result.status).toBe(201);
    });
  });

  it('should respond with 200 GET /categories', ()=>{
      return mockRequest.get('/categories').then(result=>{
          expect(result.status).toBe(200);
      });
  });

  it('should respond with 200 GET /categories/:id for valid id', ()=>{
    return mockRequest.get('/categories/1').then(result=>{
        expect(result.status).toBe(200);
    });
  });

  it('should respond with 500 GET /categories/:id for invalid id', ()=>{
    return mockRequest.get('/categories/10').then(result=>{
        expect(result.status).toBe(500);
    });
  });

  it('should respond with 202 PUT /categories/:id for valid id', ()=>{
    return mockRequest.put('/categories/1').then(result=>{
        expect(result.status).toBe(202);
    });
  });

  it('should respond with 500 PUT /categories/:id for invalid id', ()=>{
    return mockRequest.put('/categories/10').then(result=>{
        expect(result.status).toBe(500);
    });
  });

  it('should respond with 202 DELETE /categories/:id for valid id', ()=>{
      return mockRequest.delete('/categories/1').then(result=>{
          expect(result.status).toBe(202);
      });
  });

  it('should respond with 500 DELETE /categories/:id for invalid id', ()=>{
    return mockRequest.delete('/categories/10').then(result=>{
        expect(result.status).toBe(500);
    });
  });
});