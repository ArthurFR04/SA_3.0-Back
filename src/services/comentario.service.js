const { password } = require('pg/lib/defaults')
const db = require('../models')
const Comentario = db.comentarios

exports.findAll = async () => {
    try {
        const comentarios = await Comentario.findAll({
            attributes: ['id', 'dt_comentario', 'conteudo', 'usuarioId', 'postagenId', 'comentarioId' ]
        })

        return comentarios
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar os comentarios. Erro: ${e.message}`)
    }
}

exports.findById = async (id) => {
    try {
        const comentario = await Comentario.findByPk(id)
        return comentario != null ? comentario : "comentario não encontrado"
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar o comentario. Erro: ${e.message}`)
    }
}

exports.create = async (usuarioId, postagenId, comentarioId, dt_comentario, conteudo) => {
    try {
        const comentario = await Comentario.create({
            usuarioId: usuarioId,
            postagenId: postagenId,
            comentarioId: comentarioId,
            dt_comentario: dt_comentario,
            conteudo: conteudo
        })
        return comentario
    } catch (e) {
        throw Error(`Ocorreu um erro ao salvar. Erro: ${e.message}`)
    }
}

exports.update = async (id, usuarioId, postagenId, comentarioId, dt_comentario, conteudo) => {
    try {
        await Comentario.update({
            usuarioId: usuarioId,
            postagenId: postagenId,
            comentarioId: comentarioId,
            dt_comentario: dt_comentario,
            conteudo: conteudo
        },
            { where: { id: id } }
        )
    } catch (e) {
        throw Error(`Ocorreu um erro ao buscar o comentario. Error: ${e.message}`)
    }
}

exports.delete = async (id) => {
    try {
        await Comentario.destroy({         // await comentario.delete
            where: { id: id }
        })
    } catch (e) {
        throw Error(`Não foi possível excluir o comentario. Error: ${e.message}`)
    }
}


