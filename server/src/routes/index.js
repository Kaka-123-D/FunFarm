const siteRouter = require('./site');
const farmRouter = require('./farm')

function route(app) {
  app.use('/farm', farmRouter);
  app.use('/', siteRouter);
}

module.exports = route;