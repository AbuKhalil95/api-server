'use strict';

// requirements constants
const express = require('express');
const app = express();
const cors = require('cors');

const { requestTime } = require('./middleware/timestamp');
const logger = require('./middleware/logger.js');
const notFoundHandler = require('./middleware/404');
const serverErrorHandler = require('./middleware/500');

// Global MiddleWare where you could call it anywhere and has a global scope
app.use(express.json());
app.use(cors());

app.use(requestTime);
app.use(logger);
app.use(serverErrorHandler);

// custom all containing route
const v1Router = require('./routes/api-vs');
app.use('/api/v1', v1Router);

// mock error route
app.get('/bad', (req, res) => {throw new Error('bad Request .... ');});

// error routes
app.use('*', notFoundHandler);

module.exports = {
  server: app, 
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));
  },
};