/**
 * prints the a log including req.method, req.path and timestamp
 */
module.exports = (req, res, next) => {
  console.log('__REQUEST__: ', req.method, req.path, req.requestTime);
  next();
};