const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
  // get
  // app.get('/news', (req, res) => {
  //     res.render('news');
  // });
  // //post
  // app.post('/search', (req, res) => {
  //     res.send('');
  // });
}

module.exports = route;
