const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routers/index')
const usuarioRouters = require('./routers/usuario.routers')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', usuarioRouters)

module.exports = app