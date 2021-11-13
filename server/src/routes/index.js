const siteRouter = require('./site');
const farmRouter = require('./farm')

function route(app) {
  app.use('/farms', farmRouter);
  app.use('/', siteRouter);
}

module.exports = route;