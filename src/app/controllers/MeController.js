const me = require('./models/Course');

class MeController {
    // [GET] /me/stored/myIdol
    async storedMyIdol(req, res, next){
        Promise.all([me.find({}).lean(), me.countDocumentsDeleted() ])
            .then(([meIdol, deleteCount]) => res.render('me/stored-MyIdol', {
                deleteCount,
                meIdol}))
            .catch(next);
        // me.countDocumentsDeleted()
        //     .then((deleteCount) =>{

        //     })
        //     .catch(()=>{})
        // me.find({}).lean()
        //     .then(meIdol => res.render('me/stored-MyIdol', {meIdol}))
        //     .catch(next)
    }
    trashMyIdol(req, res, next){
        me.findWithDeleted({deleted:true}).lean()
            .then(meIdol => res.render('me/trash-MyIdol', {meIdol}))
            .catch(next)
    }
}   

module.exports = new MeController();
