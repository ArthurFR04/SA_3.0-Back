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
db.postagens.belongsTo(db.usuarios, {
    foreignKey: "usuarioId",
    as: "usuario"
})

db.usuarios.hasMany(db.comentarios, { as: "comentarios"})
db.comentarios.belongsTo(db.usuarios, {
    foreignKey: "id_usuario",
    as: "usuario"
})

db.postagens.hasMany(db.comentarios, { as: "comentarios"})
db.comentarios.belongsTo(db.postagens, {
    foreignKey: "id_postagem",
    as: "postagem"
})

db.comentarios.hasMany(db.comentarios, { as: "comentarios"})
db.comentarios.belongsTo(db.comentarios, {
    foreignKey: "id_comen_respon",
    as: "comentario"
})


const run = async() =>{
}

db.sequelize.sync({force: true}).then(() => {
    console.log("Updating");
    run()
})
module.exports = db