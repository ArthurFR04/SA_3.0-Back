const router = require('express-promise-router')()
const postagemController = require('../controllers/postagem.controller')

router.get('/postagem', postagemController.findAll)
router.get('/postagem/:id', postagemController.findById)

router.post('/postagem', postagemController.create)


router.put('/postagem/:id', postagemController.update)

router.delete('/postagem/:id', postagemController.delete) 

module.exports = router

// como fazer o not found ?? - 404

// comandos pro Heroku

// heroku addons:create heroku-postgresql:hobby-dev
// heroku logs --tail
// heroku git:remote -a sa-3-back
