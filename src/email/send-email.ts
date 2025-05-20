const Nodemailer = require('nodemailer');
const { MailtrapTransport } = require('mailtrap');
import config from '../config/config';

const TOKEN = config.mailTrap;

const transporter = Nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: config.googleEmail,
    pass: config.googleApp,
  },
});
interface FormData {
  nome?: string;
  email?: string;
  idade?: string;
  celular?: string;
  nomeEncEduc?: string;
  emailEncEduc?: string;
  celularEncEduc?: string;

  [key: string]: any;
}
const sender = {
  address: config.googleEmail,
  name: 'Grupo 92 dos Escoteiros de Portugal - Funchal',
};
const recipients = [config.scout92];
// const recipients = ['brunofrancco@gmail.com', 'frasan.bruno@gmail.com'];

async function sendEmail(formData: FormData) {
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
              <span class="value important">${
                formData.nome?.toUpperCase() || 'Não informado'
              }</span>
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
              <span class="value important">${
                formData.nomeEncEduc?.toUpperCase() || 'Não informado'
              }</span>
            </div>
            
            <div class="data-row">
              <span class="label">Email:</span> 
              <span class="value">${
                formData.emailEncEduc || 'Não informado'
              }</span>
            </div>
            
            <div class="data-row">
              <span class="label">Telemóvel:</span> 
              <span class="value">${
                formData.celularEncEduc || 'Não informado'
              }</span>
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
    Nome: ${formData.nome?.toUpperCase() || 'Não informado'}
    Idade: ${formData.idade || 'Não informada'}
    Email: ${formData.email || 'Não informado'}
    Telemóvel: ${formData.celular || 'Não informado'}
    
    DADOS DO ENCARREGADO DE EDUCAÇÃO:
    --------------------------------
    Nome: ${formData.nomeEncEduc?.toUpperCase() || 'Não informado'}
    Email: ${formData.emailEncEduc || 'Não informado'}
    Telemóvel: ${formData.celularEncEduc || 'Não informado'}
    
    Lembrem-se de entrar em contacto com esta família o mais breve possível para marcar uma visita!
    
    Sempre Alerta!
    
    --
    Este email foi enviado automaticamente pelo sistema do Grupo 92 dos Escoteiros de Portugal - Funchal.
    `;

    return await transporter.sendMail({
      from: sender,
      to: recipients,
      subject: `Nova Pré-Inscrição: ${
        formData.nome || 'Novo Interessado'
      } | Grupo 92`,
      text: mensagem,
      html: mensagemHTML,
      category: 'Integration Test',
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendEmail;
