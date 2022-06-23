const router = require('express-promise-router')()
const comentarioController = require('../controllers/comentario.controller')

router.get('/comentario', comentarioController.findAll)
router.get('/comentario/:id', comentarioController.findById)

router.post('/comentario', comentarioController.create)


router.put('/comentario/:id', comentarioController.update)

router.delete('/comentario/:id', comentarioController.delete) 

module.exports = router

// como fazer o not found ?? - 404

// comandos pro Heroku

// heroku addons:create heroku-postgresql:hobby-dev
// heroku logs --tail
// heroku git:remote -a sa-3-back
