const Post =  require('../models/Post')

module.exports = {

    async create(req,res)
    {
        const like = await Post.findById(req.params.id)
        like.likes += 1
        await like.save()

        // Emit msg to frontend
        req.io.emit('like', like)

        return res.json(like)
    }

}