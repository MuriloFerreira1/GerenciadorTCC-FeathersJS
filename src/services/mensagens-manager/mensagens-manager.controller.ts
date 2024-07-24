import { Paginated, ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Mensagens } from "../mensagens/mensagens.class";
import errors from "@feathersjs/errors"
import app from "../../app";

interface Data {
    acao: string;
    email: string;
    token: string;
    info: string;
}

export const mensagensManagerController = async (data: Data, app : Application) =>{
    const mensagens = app.service('mensagens');
    const usuarios = app.service('usuarios');
    const usuario = await usuarios.find({query:{email:data.email}});
    if((<Paginated<any>>usuario).total==0){
        throw new errors.BadRequest("Usuário não cadastrado");
    }
    console.log(data.email)
    switch (data.acao){
        case "recuperarSenha":
            return criaEmailRecuperarSenha(data.email, mensagens);
        case "alterarSenha":
            return criaEmailAlteraSenha(data.email, mensagens);
        default:
            throw new errors.BadRequest("Ação não suportada");
   }


    function criaEmailRecuperarSenha(email: string, service: Mensagens & ServiceAddons<any>) {
        const data = {
            from: '"Gerenciador de TCC" <envioTeste@teste.email>',
            to: email,
            subject: 'Recuperação de senha',
            html: '<h1>Este é um email de recuperação</h1>\n<button>Este é um botão</button>'
        };
        return mensagens.create(data);
    }
    function criaEmailAlteraSenha(email: string, service: Mensagens & ServiceAddons<any>) {
        const data = {
            from: '"Gerenciador de TCC" <envioTeste@teste.email>',
            to: email,
            subject: 'Alteração de senha',
            html: 'Este é um email de alteração de senha'
        };
        return mensagens.create(data);
    }
}

