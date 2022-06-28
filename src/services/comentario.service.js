const { password } = require('pg/lib/defaults')
const db = require('../models')
const Comentario = db.comentarios

exports.findAll = async () => {
    try {
        const comentarios = await Comentario.findAll({
            attributes: ['id', 'id_usuario', 'id_postagem', 'id_comen_respon', 'dt_comentario', 'conteudo']
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

exports.create = async (id_usuario, id_postagem, id_comen_respon, dt_comentario, conteudo) => {
    try {
        const comentario = await Comentario.create({
            id_usuario: id_usuario,
            id_postagem: id_postagem,
            id_comen_respon: id_comen_respon,
            dt_comentario: dt_comentario,
            conteudo: conteudo
        })
        return comentario
    } catch (e) {
        throw Error(`Ocorreu um erro ao salvar. Erro: ${e.message}`)
    }
}

exports.update = async (id, id_usuario, id_postagem, id_comen_respon, dt_comentario, conteudo) => {
    try {
        await Comentario.update({
            id_usuario: id_usuario,
            id_postagem: id_postagem,
            id_comen_respon: id_comen_respon,
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


