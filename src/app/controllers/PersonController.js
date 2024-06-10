const person = require('./models/Course');

class PersonController {
    //(GET) /new
    // [GET] /search

    show(req, res, next) {
        // req.param.slug
        person.findOne({slug: req.params.slug}).lean()
            .then(pl => 
                res.render('player/show', {pl})
        )
            .catch(next)
        //res.send('Player ' + req.params.slug);
    }
    // [GET] /player/create
    create(req, res, next) {
        res.render('player/create')
    }

    // [POST] /player/store
    store(req, res, next) {
        // res.send('player/store')
        // res.json(req.body)
        const fromData = req.body
        FormData.img = `https://th.bing.com/th/id/${fromData.videoId}?rs=1&pid=ImgDetMain`
        const player = new person(fromData)
        player.save()
            .then(() => res.redirect('/me/stored/myIdol'))
            .catch(next)
    }
    // [GET] /player/:id/edit
    edit(req, res, next) {
        person.findById(req.params.id).lean()
            .then(player => res.render('player/edit', {player}))
            .catch(next)
        //res.render('player/edit')
    }
    //[PUT] /player/:id
    update(req, res, next) {
        person.updateOne({_id: req.params.id}, req.body)
            .then(() =>res.redirect('../me/stored/myIdol'))
            .catch(next)
    }
    // [DELETE] /player/:id
    destroy(req, res, next){
        person.delete({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }
    // [PATCH] /player/:id/restore
    restore(req, res, next){
        person.restore({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }
    // [DELETE] /player/:id/force
    force(req, res, next){
        person.deleteOne({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }

    // [POST] /player/hand-form-actions
    handleFormActions(req,  res, next){
        switch(req.body.action){
            case 'delete':
                person.delete({_id: {$in: req.body.videoId}})
                    .then(()=>res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json({message: 'Action not invalid'})
        }
    }

        

    
}

module.exports = new PersonController();
