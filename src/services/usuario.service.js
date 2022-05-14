const { password } = require('pg/lib/defaults')
const db = require('../models')
const Usuario = db.usuarios

exports.findAll = async () => {
    try {
        console.log("service")
        
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'username', 'email']
        })
        console.log(usuarios);
        return usuarios
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar os usuários. Erro: ${e.message}`)
    }
}

exports.findById = async (id) => {
    try{
        const usuario = await Usuario.findByPk(id)
        return usuario != null ? usuario : "Usuário não encontrado"
    } catch(e) {
        throw Error(`Ocorreu um erro ao selecionar o usuário. Erro: ${e.message}`)
    }
}

exports.create = async (username, email, password) => {
    try {
        const usuario = await Usuario.create({
            username: username,
            email: email,
            password: password
        })
        return usuario
    } catch(e) {
        throw Error(`Ocorreu um erro ao salvar. Erro: ${e.message}`)
    }
}

exports.uptade = async (id, username, email, password) => {
    try {
        await Usuario.update(
            {username: username, email: email, password: password},
            {where: {id: id}}
        )
    } catch(e) {
        throw Error(`Ocorreu um erro ao buscar o usuário. Error: ${e.message}`)
    }
}

exports.delete = async (id) => {
    try {
        await Usuario.destroy({         // await Usuario.delete
            where: {id: id}
        })
    } catch(e) {
        throw Error(`Não foi possível excluir o usuário. Error: ${e.message}`)
    }
}