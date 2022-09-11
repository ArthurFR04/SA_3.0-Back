module.exports = (sequelize, Sequelize) => {
    const Comentario = sequelize.define('comentarios', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dt_comentario:{
            type: Sequelize.DATE
        },
        conteudo:{
            type: Sequelize.TEXT(500),
            notNull: true,
            unique: true
        },
        postagenId:{
            type: Sequelize.INTEGER
        }
        
    },{
        timestamps: false
    })

    return Comentario
}