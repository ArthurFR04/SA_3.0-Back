module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: Sequelize.STRING(40),
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/,
            unique: true
        },
        email:{
            type: Sequelize.STRING(100),
            notNull: true,
            unique: true
        },
        password:{
            type: Sequelize.STRING(50),
            notNull: true
        }
    },{
        timestamps: false
    })

    return Usuario
}