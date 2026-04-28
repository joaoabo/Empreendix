# 🚀 Empreendix  
Swagger - https://empreendix.onrender.com/api-docs
Postman - https://empreendix.onrender.com

**Empreendix** é uma API RESTful desenvolvida com foco em estudos de backend moderno utilizando tecnologias como **Node.js**, **Express**, **Prisma**, **Zod** e autenticação com **JWT**. O projeto tem como objetivo proporcionar uma base sólida e escalável para aplicações web, ao mesmo tempo que serve como laboratório de aprendizado contínuo.

---

## 📚 Sobre o Projeto

Este projeto é um **estudo prático**, criado para explorar boas práticas de desenvolvimento backend, como:

- Arquitetura organizada em camadas (routes, controllers, services)
- Validação de dados com Zod
- ORM com Prisma e banco de dados **SQL Server**
- Autenticação segura usando JWT
- Padrões RESTful

Apesar de ser voltado para estudos, o Empreendix foi desenvolvido com cuidado para manter um código limpo e legível.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [JWT (jsonwebtoken)](https://jwt.io/)
- [Microsoft SQL Server](https://www.microsoft.com/sql-server)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## 🔧 Instalação e Execução

Clone o repositório e instale as dependências:

```bash
npm install

npx prisma generate

```
Depois, rode o projeto em modo desenvolvimento:

```bash
npm run dev
```
Certifique-se de configurar o arquivo .env com base no .env.example.

## 📁 Estrutura do Projeto
empreendix/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   └── server.ts
├── .env.example
├── package.json
└── README.md

## 🤝 Contribuição

Este é um projeto **open source** e qualquer contribuição é bem-vinda!

Se quiser contribuir:

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feature/sua-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona nova feature'`
4. Push na sua branch: `git push origin feature/sua-feature`
5. Abra um Pull Request

## 🧑‍💻 Autor

Desenvolvido por [João Abo](https://github.com/joaoabo) com 💙, dedicação e muito café ☕.
