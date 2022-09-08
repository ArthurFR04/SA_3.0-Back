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
        const {nome, sobrenome, email, senha, foto_perfil, biografia, permissao} = request.body
        const usuario = await usuarioService.create(nome, sobrenome, email, senha, foto_perfil, biografia, permissao)
        response.status(200).send({
            status: 200,
            message: 'Usuário cadastrado com sucesso',
            body:{
                usuario: usuario
            }
        })
    }catch(e) {

        response.status(400).json({
            message: `Mensagem de Erro: ${e}`,
            status: 400           
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const {nome, sobrenome, email, senha, foto_perfil, biografia, permissao} = request.body

        await usuarioService.update(id, nome, sobrenome, email, senha, foto_perfil, biografia, permissao)
        response.status(200).send({
            message:'Usuário alterado com sucesso!',
            body:{
                nome : nome,
                sobrenome : sobrenome,
                email : email,
                senha : senha,
                foto_perfil : foto_perfil,
                biografia : biografia,
                permissao : permissao
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



exports.login = async (request, response) => {
    try{
        const { email, senha } = request.body
        const usuario = await usuarioService.findByEmailAndSenha(email, senha)
        response.status(200).send({
            status: 200,
            data: usuario,
            message: 'Operação realizada com sucesso!'

        })
    }catch(e) {

        response.status(400).json({
            message: `Mensagem de Erro: ${e}`,
            status: 400           
        })
    }
}