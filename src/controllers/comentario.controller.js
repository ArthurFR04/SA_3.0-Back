const { request, response } = require('../app')
const comentarioService = require('../services/comentario.service')

exports.findAll = async (request, response) => {
    console.log('\n\n\n\ncontroller\n\n\n\n');
    try {
        const comentarios = await comentarioService.findAll()
        console.log('\n\n\n' + comentarios);
        return response.status(200).json({
            status: 200,
            data: comentarios,
            message: 'Operação realizada com sucesso!'

        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const comentario = await comentarioService.findById(id)
        response.status(200).json({
            status: 200,
            data: comentario,
            message: 'Consulta realizada com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const { usuarioId, postagenId, comentarioId, dt_comentario, conteudo } = request.body
        const comentario = await comentarioService.create(usuarioId, postagenId, comentarioId, dt_comentario, conteudo)
        response.status(200).send({
            message: 'Comentario cadastrada com sucesso',
            body: {
                comentario: comentario
            }
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: `Erro ao cadastrar a comentario. Erro: ${e}`
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { usuarioId, postagenId, comentarioId, dt_comentario, conteudo } = request.body

        await comentarioService.update(id, usuarioId, postagenId, comentarioId, dt_comentario, conteudo)
        response.status(200).send({
            message: 'Comentario alterada com sucesso!',
            body: {
                usuarioId: usuarioId,
                postagenId: postagenId,
                comentarioId: comentarioId,
                dt_comentario: dt_comentario,
                conteudo: conteudo
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)

        await comentarioService.delete(id)
        response.status(200).send({
            message: 'Comentario deletado com sucesso!'
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

// usuarioId, postagenId, comentarioId, dt_comentario, conteudo