const express =  require('express')
const multer = require('multer')
const config =  require('../src/config/upload')
const PostController = require('../src/controllers/PostController')
const LikeController = require('../src/controllers/LikeController')

const routes = new express.Router()
const upload = multer(config)

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.create )
routes.post('/posts/:id/like', LikeController.create )

module.exports = routes
