module.exports = (sequelize, Sequelize) => {
    const Comentario = sequelize.define('comentarios', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // id_usuario:{
        //     type: Sequelize.INTEGER,
        //     primaryKey: true
        // },
        // id_postagem:{
        //     type: Sequelize.INTEGER,
        //     primaryKey: true
        // },
        // id_comen_respon:{
        //     type: Sequelize.INTEGER,
        //     primaryKey: true
        // },
        dt_comentario:{
            type: Sequelize.DATE
        },
        conteudo:{
            type: Sequelize.TEXT(500),
            notNull: true,
            unique: true
        }
        
    },{
        timestamps: false
    })

    return Comentario
}