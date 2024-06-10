const newRouter = require('./new');
const meRouter = require('./me');
const PersonRouter = require('./person');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/person', PersonRouter);
    app.use('/', siteRouter);
}

module.exports = route;
