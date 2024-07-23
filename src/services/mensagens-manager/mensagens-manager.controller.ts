import { Paginated, Params, ServiceAddons } from "@feathersjs/feathers";
import app from "../../app";
import { Application } from "../../declarations";
import { Mensagens } from "../mensagens/mensagens.class";

interface Data {
    acao: string;
    email: string;
    token: string;
}

export const mensagensManagerController = async (data: Data, app : Application) =>{
    const mensagens = app.service('mensagens');
    const usuarios = app.service('usuarios');
    const usuario = await usuarios.find({query:{email:data.email}});
    if((<Paginated<any>>usuario).total){
        throw new Error("Usuário não encontrado");
    }
    console.log(data.email)
    switch (data.acao){
        case "recuperarSenha":
            criaEmailRecuperarSenha(data.email, mensagens);
            break;
        case "alterarSenha":
            criaEmailAlteraSenha(data.email, mensagens);
            break;
        default:
            throw new Error("Ação não suportada")
   }
}

function criaEmailRecuperarSenha(email: string, service: Mensagens & ServiceAddons<any>) {
    const data = {
        from: '"Gerenciador de TCC" <envioTeste@teste.email>',
        to: email,
        subject: 'Recuperação de senha',
        html: '<h1>Este é um email de recuperação</h1>\n<button>Este é um botão</button>'
    };
    service.create(data);
}
function criaEmailAlteraSenha(email: string, service: Mensagens & ServiceAddons<any>) {
    const data = {
        from: '"Gerenciador de TCC" <envioTeste@teste.email>',
        to: email,
        subject: 'Alteração de senha',
        html: 'Este é um email de alteração de senha'
    };
    service.create(data);
}

