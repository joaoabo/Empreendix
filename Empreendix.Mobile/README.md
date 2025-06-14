# 📱 Empreendix – App de Gestão Local para Pequenos Negócios

**Empreendix** é um aplicativo mobile criado com foco em **estudo e aprendizado prático**, com o objetivo de simular um sistema de gestão de clientes, pedidos e produtos para pequenos empreendedores.

---

## 🚀 Objetivo

Este app foi desenvolvido com fins **educacionais**, com a proposta de explorar conceitos como:

- Armazenamento de dados **localmente** (offline-first)
- Separação entre **versão gratuita e premium**
- Sincronização de dados com **backend na nuvem**
- Uso de **banco de dados local**
- Boas práticas de arquitetura e organização de projeto mobile

---

## 🧩 Tecnologias Utilizadas

- **React Native** (com ou sem Expo)
- **SQLite** ou **PouchDB** (armazenamento local)
- **Context API / Zustand** (estado global)
- **TypeScript** (segurança de tipos)
- **React Navigation** (navegação entre telas)
- **Axios** (para requisições à API quando premium)
- **JWT** (autenticação na versão premium)

---

## 📦 Funcionalidades

### 🆓 Versão Grátis (Offline)
- Cadastro de clientes, produtos e pedidos
- Armazenamento local de todos os dados
- App totalmente funcional **sem internet**

### 💎 Versão Premium (Com Sincronização)
- Login do usuário com conta própria
- Sincronização dos dados locais com a nuvem
- Possibilidade de backup e restauração
- Banco local é “limpo” após sincronização, mantendo o app leve

---

## 📁 Estrutura Básica

```bash
EmpreendixApp/
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   ├── storage/
│   ├── context/
│   ├── navigation/
│   └── App.tsx
