/**
 * delivers the time stamp as a request object req.requestTime
 */
module.exports = {requestTime: (req, res, next) => {
  var currentDate = new Date();
  req.requestTime = ' ------> Timestamp: ' + 
      currentDate.getHours() + ':' + currentDate.getMinutes() + ':' +  currentDate.getSeconds() + '-----' +
      currentDate.getDate() + '-' +(currentDate.getMonth() + 1) + '-' + currentDate.getFullYear();
  next();
},
};