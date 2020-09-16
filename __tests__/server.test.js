const { server }  = require('../lib/server.js');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('web server tests on all routes', ()=> {

  it('should respond equality of posted and returned object', async ()=>{
    const category = {name: 'apple', display_name : 'APPLLEE', description: 'FRUIT'};
    const data = await mockRequest.post('/api/v1/categories').send(category);
    const record = data.body;
    Object.keys(category).forEach(key=> {
      expect(record[key]).toEqual(category[key]);
   });
  });

  it('should respond with 200 GET /api/v1/categories/:id for valid id', ()=>{
    return mockRequest.get('/api/v1/categories').then(result=>{
      expect(result.status).toBe(200);
    });
  });

  it('should respond with 500 PUT /api/v1/categories/:id for invalid id', ()=>{
    return mockRequest.put('/api/v1/categories/10').then(result=>{
      expect(result.status).toBe(500);
    });
  });

  it('should respond with 500 DELETE /api/v1/categories/:id for invalid id', ()=>{
    return mockRequest.delete('/api/v1/categories/10').then(result=>{
      expect(result.status).toBe(500);
    });
  });
});