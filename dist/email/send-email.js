"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nodemailer = require('nodemailer');
const { MailtrapTransport } = require('mailtrap');
const config_1 = __importDefault(require("../config/config"));
const TOKEN = config_1.default.mailTrap;
const transporter = Nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config_1.default.googleEmail,
        pass: config_1.default.googleApp,
    },
});
const sender = {
    address: config_1.default.googleEmail,
    name: 'Grupo 92 dos Escoteiros de Portugal - Funchal',
};
const recipients = [config_1.default.scout92];
// const recipients = ['brunofrancco@gmail.com', 'frasan.bruno@gmail.com'];
function sendEmail(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        try {
            const mensagemHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #eeeeee;
          border-radius: 5px;
        }
        .header {
          background-color: #003f7f;
          color: white;
          padding: 15px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
          background-color: #f9f9f9;
        }
        .section {
          background-color: white;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 5px;
          border-left: 4px solid #007e33;
        }
        h2 {
          color: #003f7f;
          border-bottom: 1px solid #eeeeee;
          padding-bottom: 10px;
          margin-top: 0;
        }
        .data-row {
          margin-bottom: 8px;
        }
        .label {
          font-weight: bold;
          color: #555555;
        }
        .value {
          color: #000000;
        }
        .important {
          font-weight: bold;
        }
        .footer {
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #777777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📝 Nova Pré-Inscrição!</h1>
        </div>
        
        <div class="content">
          <p>Olá Equipa do Grupo 92 dos Escoteiros!</p>
          
          <p>Foi recebida uma nova pré-inscrição através do site. Seguem abaixo os detalhes:</p>
          
          <div class="section">
            <h2>🧒 Dados do Futuro Escoteiro</h2>
            
            <div class="data-row">
              <span class="label">Nome:</span> 
              <span class="value important">${((_a = formData.nome) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Não informado'}</span>
            </div>
            
            <div class="data-row">
              <span class="label">Idade:</span> 
              <span class="value">${formData.idade || 'Não informada'}</span>
            </div>
            
            <div class="data-row">
              <span class="label">Email:</span> 
              <span class="value">${formData.email || 'Não informado'}</span>
            </div>
            
            <div class="data-row">
              <span class="label">Telemóvel:</span> 
              <span class="value">${formData.celular || 'Não informado'}</span>
            </div>
          </div>
          
          <div class="section">
            <h2>👨‍👩‍👧‍👦 Dados do Encarregado de Educação</h2>
            
            <div class="data-row">
              <span class="label">Nome:</span> 
              <span class="value important">${((_b = formData.nomeEncEduc) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || 'Não informado'}</span>
            </div>
            
            <div class="data-row">
              <span class="label">Email:</span> 
              <span class="value">${formData.emailEncEduc || 'Não informado'}</span>
            </div>
            
            <div class="data-row">
              <span class="label">Telemóvel:</span> 
              <span class="value">${formData.celularEncEduc || 'Não informado'}</span>
            </div>
          </div>
          
          <p>Lembrem-se de entrar em contacto com esta família o mais breve possível para marcar uma visita!</p>
          
          <p>Sempre Alerta!</p>
        </div>
        
        <div class="footer">
          <p>Este email foi enviado automaticamente pelo sistema do Grupo 92 dos Escoteiros de Portugal - Funchal.</p>
        </div>
      </div>
    </body>
    </html>
    `;
            const mensagem = `
    NOVA PRÉ-INSCRIÇÃO - GRUPO 92 DOS ESCOTEIROS
    ===========================================
    
    Olá Equipa do Grupo 92!
    
    Foi recebida uma nova pré-inscrição através do site. Seguem abaixo os detalhes:
    
    DADOS DO FUTURO ESCOTEIRO:
    --------------------------
    Nome: ${((_c = formData.nome) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || 'Não informado'}
    Idade: ${formData.idade || 'Não informada'}
    Email: ${formData.email || 'Não informado'}
    Telemóvel: ${formData.celular || 'Não informado'}
    
    DADOS DO ENCARREGADO DE EDUCAÇÃO:
    --------------------------------
    Nome: ${((_d = formData.nomeEncEduc) === null || _d === void 0 ? void 0 : _d.toUpperCase()) || 'Não informado'}
    Email: ${formData.emailEncEduc || 'Não informado'}
    Telemóvel: ${formData.celularEncEduc || 'Não informado'}
    
    Lembrem-se de entrar em contacto com esta família o mais breve possível para marcar uma visita!
    
    Sempre Alerta!
    
    --
    Este email foi enviado automaticamente pelo sistema do Grupo 92 dos Escoteiros de Portugal - Funchal.
    `;
            return yield transporter.sendMail({
                from: sender,
                to: recipients,
                subject: `Nova Pré-Inscrição: ${formData.nome || 'Novo Interessado'} | Grupo 92`,
                text: mensagem,
                html: mensagemHTML,
                category: 'Integration Test',
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
module.exports = sendEmail;
//# sourceMappingURL=send-email.js.map