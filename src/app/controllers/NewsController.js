class NewsController{
    //(GET) /new
    index(req, res){
        res.render('news')
    }
    // [GET] /new/:slug
    show(req, res){
        res.send('Showmaker')
    }
}

module.exports = new NewsController
