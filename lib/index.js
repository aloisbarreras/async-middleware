const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch((err) => {
        res.status(err.status || 500);
        res.send(err);
      });
  };

module.exports = asyncMiddleware;
