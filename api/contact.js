import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método não permitido.",
    });
  }

  try {
    const { nome, email, telefone, assunto, mensagem } = req.body;

    if (!nome || !email || !telefone || !assunto || !mensagem) {
      return res.status(400).json({
        success: false,
        message: "Preencha todos os campos obrigatórios.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Marcenaria Oriental" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 Novo contato - ${nome}`,
      html: `
        <div style="font-family:Arial, sans-serif; padding:20px; color:#333;">
          <h2 style="color:#6b4f3b;">Novo contato pelo site</h2>

          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Assunto:</strong> ${assunto}</p>

          <hr style="margin:20px 0;" />

          <p><strong>Mensagem:</strong></p>

          <div style="
            background:#f5f5f5;
            padding:15px;
            border-radius:8px;
            line-height:1.6;
          ">
            ${mensagem}
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Marcenaria Oriental" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Recebemos sua mensagem ✔",
      html: `
        <div style="font-family:Arial, sans-serif; padding:20px; color:#333;">
          <h2 style="color:#6b4f3b;">Olá ${nome}, tudo bem?</h2>

          <p>Recebemos sua mensagem com sucesso.</p>

          <p>Nossa equipe retornará o mais breve possível.</p>

          <p style="margin-top:25px;">
            <strong>Marcenaria Oriental</strong><br/>
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.log("ERRO AO ENVIAR EMAIL:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Erro ao enviar email.",
    });
  }
}