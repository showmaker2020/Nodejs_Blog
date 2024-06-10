const player = require('./models/Course');

class SiteController {
    //(GET) /new
    async index(req, res, next) {
        // try {
        //     const data = await player.find({});
        //     res.json(data);
        // }  catch (err) {
        //     res.status(400).json({error: err});

        // }
        player.find({}).lean()
            .then(pl => res.render('home', {pl}))
            .catch(next)
        //res.render('home');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
