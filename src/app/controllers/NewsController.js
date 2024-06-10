class NewsController {
    //(GET) /new
    index(req, res) {
        res.render('news');
    }
    // [GET] /new/:slug
    show(req, res) {
        res.render('player/create');
    }
}

module.exports = new NewsController();
