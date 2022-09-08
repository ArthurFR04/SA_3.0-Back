const { password } = require('pg/lib/defaults')
const db = require('../models')
const Usuario = db.usuarios

exports.findAll = async () => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'senha', 'foto_perfil', 'biografia', 'permissao']
        })

        return usuarios
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar os usuários. Erro: ${e.message}`)
    }
}

exports.findById = async (id) => {
    try {
        const usuario = await Usuario.findByPk(id)
        return usuario != null ? usuario : "Usuário não encontrado"
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar o usuário. Erro: ${e.message}`)
    }
}

exports.create = async (nome, sobrenome, email, senha, foto_perfil, biografia) => {
    try {
        const usuario = await Usuario.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            foto_perfil: foto_perfil,
            biografia: biografia,
            permissao: 3
        })
        return usuario
    } catch (e) {
        throw `Ocorreu um erro ao salvar o usuário. Erro: ${e.message}`
    }
}

exports.update = async (id, nome, sobrenome, email, senha, foto_perfil, biografia, permissao) => {
    try {
        await Usuario.update({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            foto_perfil: foto_perfil,
            biografia: biografia,
            permissao: permissao
        },
            { where: { id: id } }
        )
    } catch (e) {
        throw Error(`Ocorreu um erro ao buscar o usuário. Error: ${e.message}`)
    }
}

exports.delete = async (id) => {
    try {
        await Usuario.destroy({         // await Usuario.delete
            where: { id: id }
        })
    } catch (e) {
        throw Error(`Não foi possível excluir o usuário. Error: ${e.message}`)
    }
}



exports.findByEmailAndSenha = async (email, senha) => {
    try {
        const usuarios = await Usuario.findAll(
            {
                where: {
                    email: email,
                    senha: senha
                }
            },
            {
                attributes: ['id', 'nome', 'sobrenome', 'email', 'foto_perfil', 'biografia', 'permissao']
            },
            console.log('\n\n\nservice     ' + email),
        )

        if (usuarios.length === 0) {
            throw "Usuário ou senha não existem"
        }

        return usuarios

    } catch (e) {

        throw e
    }
}