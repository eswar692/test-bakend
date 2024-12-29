const post  = require('./controller')
const express= require('express')
const router = express.Router()

router.post('/post',post.citizenPost)
router.get('/get',post.get)


module.exports = router;
