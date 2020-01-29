module.exports = {
    addFav: (req, res) => {
        if(!req.session.favorited){
            req.session.favorited = []
            req.session.favorited.push(req.body)
            res.status(200).send(req.session.favorited)
        } else {
            const index = req.session.favorited.findIndex(meme => meme.id === req.body.id);
            if(index === -1){
                req.session.favorited.push(req.body)
            }
            res.status(200).send(req.session.favorited)
        }
    },
    deleteFav: (req, res) => {
        const {favorited} = req.session
        const {id} = req.params
        const index = favorited.findIndex(meme => meme.id === +id)
        favorited.splice(index, 1)
        res.status(200).send(favorited)
    }
}