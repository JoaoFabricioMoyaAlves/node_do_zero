# 🎬 Node do Zero – API de Vídeos com Node.js + Fastify + PostgresJS

Projeto desenvolvido com **Node.js** utilizando a plataforma **Fastify** para criar uma **API RESTful** simples e performática, com banco de dados **PostgreSQL** hospedado no **Neon** e gerenciamento via **PostgresJS**.

Esta API permite **armazenar, listar, atualizar e remover vídeos do YouTube**, funcionando como um sistema básico de CRUD.

---

## 🚀 Tecnologias Utilizadas

- 🟢 Node.js
- ⚡ Fastify
- 🐘 PostgreSQL (via [Neon](https://neon.tech/))
- 📦 PostgresJS
- 🌐 RESTful API

---

## 📁 Funcionalidades da API

- `GET /videos` – Listar todos os vídeos cadastrados
- `POST /videos` – Cadastrar um novo vídeo
- `PUT /videos/:id` – Atualizar informações de um vídeo
- `DELETE /videos/:id` – Remover um vídeo

---

## 🧪 Requisitos

- Node.js 18 ou superior
- Conta gratuita no [Neon](https://neon.tech/) para banco PostgreSQL
- Ferramenta como Insomnia ou Postman (opcional, para testes)

---

## 🛠️ Como Rodar Localmente

### 📦 Clonar o repositório

```bash
git clone https://github.com/seu-usuario/node-do-zero.git
cd node-do-zero
