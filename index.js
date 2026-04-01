const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FastBite - Delivery Saudável</title>
        <style>
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #1f2937;
            background: linear-gradient(135deg, #f0fdfa, #d8f3dc);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .card {
            width: min(90vw, 720px);
            background: white;
            border-radius: 16px;
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.2);
            padding: 32px;
            text-align: center;
          }

          h1 {
            margin: 0 0 12px;
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            color: #0f766e;
          }

          p {
            margin: 8px 0 18px;
            color: #334155;
            line-height: 1.6;
          }

          .tag {
            display: inline-block;
            padding: 8px 14px;
            border-radius: 999px;
            color: #065f46;
            background: #d1fae5;
            border: 1px solid #6ee7b7;
            font-weight: 600;
            margin-top: 12px;
          }

          .cta {
            margin-top: 20px;
            display: inline-block;
            text-decoration: none;
            background: #0f766e;
            color: white;
            padding: 12px 22px;
            border-radius: 10px;
            font-weight: 600;
          }

          .cta:hover {
            background: #115e59;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>FastBite</h1>
          <p>Bem-vindo ao site containerizado de entrega saudável. 🚀</p>
          <p>Node.js + Express no back-end, Nginx como reverse proxy na porta 80.</p>
          <span class="tag">Produção pronta para escalar</span>
          <div>
            <a class="cta" href="#">Peça Seu Almoço Saudável</a>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`FastBite app rodando em http://localhost:${PORT}`);
});
