const { password } = require('pg/lib/defaults')
const db = require('../models')
const Postagem = db.postagens

exports.findAll = async () => {
    try {
        const postagens = await Postagem.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'senha', 'foto_perfil', 'biografia', 'permissao']
        })

        return postagens
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar as postagens. Erro: ${e.message}`)
    }
}

exports.findById = async (id) => {
    try {
        const postagem = await Postagem.findByPk(id)
        return postagem != null ? postagem : "Postagem não encontrada"
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar o usuário. Erro: ${e.message}`)
    }
}

exports.create = async (nome, sobrenome, email, senha, foto_perfil, biografia) => {
    try {
        const postagem = await Postagem.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
            foto_perfil: foto_perfil,
            biografia: biografia,
            permissao: 3
        })
        return postagem
    } catch (e) {
        throw Error(`Ocorreu um erro ao salvar. Erro: ${e.message}`)
    }
}

exports.uptade = async (id, nome, sobrenome, email, senha, foto_perfil, biografia, permissao) => {
    try {
        await Postagem.update({
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
        throw Error(`Ocorreu um erro ao buscar a postagem. Error: ${e.message}`)
    }
}

exports.delete = async (id) => {
    try {
        await Postagem.destroy({         // await postagem.delete
            where: { id: id }
        })
    } catch (e) {
        throw Error(`Não foi possível excluir a postagem. Error: ${e.message}`)
    }
}


