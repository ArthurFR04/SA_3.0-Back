const { request, response } = require('../app')
const postagemService = require('../services/postagem.service')

exports.findAll = async (request, response) => {
    console.log('\n\n\n\ncontroller\n\n\n\n');
    try{
        const postagens = await postagemService.findAll()
        console.log('\n\n\n'+postagens);
        return response.status(200).json({
            status: 200,
            data: postagens,
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
        const postagem = await postagemService.findById(id)
        response.status(200).json({
            status: 200,
            data: postagem,
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
        const {titulo, descricao, foto, dt_postagem} = request.body
        const postagem = await postagemService.create(titulo, descricao, foto, dt_postagem)
        response.status(200).send({
            message: 'Postagem cadastrada com sucesso',
            body:{
                postagem: postagem
            }
        })
    } catch(e) {
        response.send(400).json({
            status: 400,
            message: `Erro ao cadastrar a postagem. Erro: ${e}`
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const {titulo, descricao, foto, dt_postagem} = request.body

        await postagemService.uptade(id, titulo, descricao, foto, dt_postagem)
        response.status(200).send({
            message:'Postagem alterada com sucesso!',
            body:{
                titulo : titulo,
                descricao : descricao,
                foto : foto,
                dt_postagem : dt_postagem
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

        await postagemService.delete(id)
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


// titulo       descricao       foto        dt_postagem