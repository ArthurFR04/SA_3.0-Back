const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.usuarios = require('../models/usuario.model')(db.sequelize, db.Sequelize)
db.postagens = require('../models/postagem.model')(db.sequelize, db.Sequelize)
db.comentarios = require('../models/comentario.model')(db.sequelize, db.Sequelize)

db.usuarios.hasMany(db.postagens, { as: "postagens"})
db.usuarios.hasMany(db.comentarios, { as: "comentarios"})
db.postagens.hasMany(db.comentarios, { as: "comentarios"})
db.comentarios.hasMany(db.comentarios, { as: "comentarios"})
db.postagens.belongsTo(db.usuarios && db.postagens, {
    foreignKey: "usuarioId",
    as: "usuario",
    foreignKey: "postagenId",
    as: "postagen"
})

// const run = async() =>{
// }

// db.sequelize.sync({force: true}).then(() => {
//     console.log("Updating");
//     run()
// })

module.exports = db