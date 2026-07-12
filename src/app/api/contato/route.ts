// src/app/api/contato/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, modalidade, mensagem } = body;

    // Validação básica
    if (!nome || !email || !telefone || !modalidade) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 },
      );
    }

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'Ânima Virtus <onboarding@resend.dev>', // Email verificado do Resend
      to: [process.env.EMAIL_TO || 'contato@animavirtus.com.br'],
      replyTo: email, // Para responder direto ao cliente
      subject: `Novo contato: ${nome} - ${modalidade}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background-color: #1F2A44;
                color: white;
                padding: 20px;
                text-align: center;
              }
              .content {
                background-color: white;
                padding: 30px;
                margin-top: 20px;
                border-radius: 8px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #F97A5D;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
              }
              .value {
                margin-top: 5px;
                color: #1F2A44;
              }
              .message-box {
                background-color: #FBF1F2;
                padding: 15px;
                border-left: 4px solid #F97A5D;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Novo Contato</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nome Completo</div>
                  <div class="value">${nome}</div>
                </div>

                <div class="field">
                  <div class="label">E-mail</div>
                  <div class="value">${email}</div>
                </div>

                <div class="field">
                  <div class="label">Telefone</div>
                  <div class="value">${telefone}</div>
                </div>

                <div class="field">
                  <div class="label">Modalidade de Interesse</div>
                  <div class="value">${modalidade}</div>
                </div>

                <div class="field">
                  <div class="label">Mensagem</div>
                  <div class="message-box">${mensagem}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 },
    );
  }
}
