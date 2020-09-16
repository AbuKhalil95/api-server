'use strict';

// requirements constants
const express = require('express');
const app = express();
const { requestTime } = require('./middleware/timestamp');
const logger = require('./middleware/logger.js');
const notFoundHandler = require('./middleware/404');
const serverErrorHandler = require('./middleware/500');

// Global MiddleWare where you could call it anywhere and has a global scope
app.use(express.json());
app.use(requestTime);
app.use(logger);
app.use(serverErrorHandler);

// custom routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/product');
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', productRoutes);

// annoying favicon request
app.get('/favicon.ico', (req, res) => res.status(204));

// mock error route
app.get('/bad', (req, res) => {throw new Error('bad Request .... ');});
// error routes
app.use('*', notFoundHandler);

module.exports = {
  server: app, 
  start: port => {
    let PORT = port || process.env.port || 3000;
    app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));
  },
};