
class NeWController {

    // [GET] method
    index(req, res) {
        res.render('news');
    }

}

module.exports = new NeWController;