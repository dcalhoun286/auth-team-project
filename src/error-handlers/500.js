'use strict';

module.exports = (err, req, res, next) => {
let error = { error: err.status || err };
res.statusCode = err.status || 500;
res.statusMessage = err.statusMessage || 'Server Error';
res.setHeader('Content-Type', 'application/json');
res.write(JSON.stringify(error));
res.end();
};