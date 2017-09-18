const debug = require('debug')('@aloisbarreras/async-middleware')

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch((err) => {
        debug(`Caught error...`);
        debug(`Error message: ${err.message}`);
        res.status(err.status || 500);
        res.send(err);
      });
  };

module.exports = asyncMiddleware;
