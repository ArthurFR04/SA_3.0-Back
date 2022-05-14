const { request, response } = require('../app')
const usuarioService = require('../services/usuario.service')

exports.findAll = async (request, response) => {
    try{
        const usuarios = await usuarioService.findAll()
        return response.status(200).json({
            status: 200,
            data: usuarios,
            message: 'Operação realizada com sucesso!'

        })
    }catch(e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const usuario = await usuarioService.findById(id)
        response.status(200).json({
            status: 200,
            data: usuario,
            message: 'Consulta realizada com sucesso'
        })
    } catch(e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const {username, email, password} = request.body
        const usuario = await usuarioService.create(username, email, password)
        response.status(200).send({
            message: 'Usuário cadastrado com sucesso',
            body:{
                usuario: usuario
            }
        })
    } catch(e) {
        response.send(400).json({
            status: 400,
            message: `Erro ao cadastrar o usuário. Erro: ${e}`
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const {username, email, password} = request.body

        await usuarioService.uptade(id, username, email, password)
        response.status(200).send({
            message:'Usuário alterado com sucesso!',
            body:{
                username: username,
                email: email
            }
        })
    } catch(e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)

        await usuarioService.delete(id)
        response.status(200).send({
            message:'Usuário deletado com sucesso!'
        })
    } catch(e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}
