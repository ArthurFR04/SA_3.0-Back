const { password } = require('pg/lib/defaults')
const db = require('../models')
const Postagem = db.postagens

exports.findAll = async () => {
    try {
        const postagens = await Postagem.findAll({
            attributes: ['id', 'titulo', 'descricao', 'foto', 'dt_postagem', 'usuarioId']
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

exports.create = async (titulo, descricao, foto, dt_postagem, usuarioId) => {
    try {
        const postagem = await Postagem.create({
            titulo: titulo,
            descricao: descricao,
            foto: foto,
            dt_postagem: dt_postagem,
            usuarioId: usuarioId
        })
        return postagem
    } catch (e) {
        throw Error(`Ocorreu um erro ao salvar. Erro: ${e.message}`)
    }
}

exports.update = async (id, titulo, descricao, foto, dt_postagem) => {
    try {
        await Postagem.update({
            titulo: titulo,
            descricao: descricao,
            foto: foto,
            dt_postagem: dt_postagem
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


