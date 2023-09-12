
function route(app) {

    //get
    app.get('/', (req, res) => {
        res.render('home');
    });
    app.get('/news', (req, res) => {
        res.render('news');
    });
    app.get('/search', (req, res) => {
        res.render('search');
    });

    //post
    app.post('/search', (req, res) => {
        res.send('');
    });

}

module.exports = route;
