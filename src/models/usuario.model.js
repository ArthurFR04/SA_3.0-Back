module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING(30),
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/,
        },
        sobrenome:{
            type: Sequelize.STRING(80),
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/,
        },
        email:{
            type: Sequelize.STRING(100),
            notNull: true,
            unique: true
        },
        login:{
            type: Sequelize.STRING(40),
            notNull: true,
            unique: true
        },
        senha:{
            type: Sequelize.STRING(50),
            notNull: true
        },
        foto_perfil:{
            type: Sequelize.STRING(100)
        },
        biografia:{
            type: Sequelize.STRING(1000)
        },
        permissao:{
            type: Sequelize.INTEGER
        },
    },{
        timestamps: false
    })

    return Usuario
}