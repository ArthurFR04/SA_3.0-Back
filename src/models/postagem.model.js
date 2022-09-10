module.exports = (sequelize, Sequelize) => {
    const Postagem = sequelize.define('postagens', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: Sequelize.STRING(100),
            notNull: true,
            unique: true
        },
        descricao:{
            type: Sequelize.TEXT,
            notNull: true,
            unique: true
        },
        foto:{
            type: Sequelize.STRING(255),
            notNull: true,
            unique: true
        },
        dt_postagem:{
            type: Sequelize.DATEONLY
        },

    },{
        timestamps: false
    })

    return Postagem
}