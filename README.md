# HelpholyIA

HelpholyIA é uma plataforma cristã de apoio emocional e espiritual baseada em Inteligência Artificial.
O sistema foi projetado para acolher pessoas em sofrimento, organizar emoções e apontar para Deus, Jesus Cristo e o Espírito Santo de forma equilibrada, responsável e segura.

A aplicação **não substitui pastores, líderes espirituais ou profissionais da saúde mental**, mas atua como um apoio inicial, respeitoso e humano.

---

## Visão Geral da Arquitetura

A aplicação é dividida em dois módulos principais:

* **Backend**: API responsável por autenticação, regras de segurança, contexto espiritual e comunicação com a IA.
* **Frontend**: Interface web desenvolvida em React para interação do usuário com a plataforma.

```
Frontend (React) ───▶ Backend (FastAPI) ───▶ Groq API (LLM)
```

---

## Estrutura do Repositório

```
helpholyia/
├── backend/
│   ├── app/
│   │   ├── auth.py
│   │   ├── chat.py
│   │   ├── models.py
│   │   ├── prompt_builder.py
│   │   ├── groq_service.py
│   │   └── crisis_detector.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── .gitignore
└── README.md
```

---

## Backend – FastAPI

### Funcionalidades principais

* Autenticação JWT (registro e login)
* Controle de acesso por usuário
* Armazenamento do `spiritual_status`
* Injeção de contexto espiritual no prompt da IA
* Detecção de crise (suicídio ou violência)
* Proteção de vida como prioridade máxima
* Integração com Groq API (LLM)

---

### Status espiritual do usuário

Durante o cadastro, o usuário informa seu status espiritual:

* `NAO_CONVERTIDO`
* `CONVERTIDO`
* `AFASTADO`

Esse valor é salvo no banco de dados e **injetado dinamicamente no prompt da IA**, alterando o tom, a profundidade e a linguagem da resposta.

Exemplo de uso interno:

```python
contexto_espiritual = gerar_prompt_espiritual(user.spiritual_status)
```

Logs de debug confirmam o recebimento correto do status em tempo real.

---

### Variáveis de ambiente

Crie um arquivo `.env` no backend com base no exemplo:

```env
GROQ_API_KEY=your_groq_api_key
JWT_SECRET=your_jwt_secret
DATABASE_URL=sqlite:///./db.sqlite3
```

Nunca versionar o `.env`.

---

### Rodar o backend localmente

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

A API ficará disponível em:

```
http://localhost:8000
```

---

## Frontend – React (Vite)

### Funcionalidades

* Cadastro de usuário
* Login com JWT
* Seleção de status espiritual
* Chat protegido por autenticação
* Comunicação segura com o backend
* Interface simples, limpa e acolhedora

---

### Configuração da API no frontend

No serviço de API do frontend, configure a URL do backend:

```js
const API_URL = "https://iacristao.squareweb.app";
```

Em desenvolvimento:

```js
const API_URL = "http://localhost:8000";
```

---

### Rodar o frontend localmente

```bash
cd frontend
npm install
npm run dev
```

Acesse:

```
http://localhost:5173
```

---

### Build para produção

```bash
npm run build
```

O conteúdo da pasta `dist/` deve ser enviado para hospedagem estática.

---

## Segurança e Responsabilidade

* Autenticação JWT obrigatória
* CORS configurado por domínio
* Detecção automática de mensagens sensíveis
* Respostas de crise interrompem o fluxo normal
* Incentivo explícito à busca de ajuda humana
* Linguagem cristã sem fanatismo
* Proteção da vida acima de qualquer resposta técnica

---

## Produção

* **Backend**: Square Cloud (FastAPI)
* **Frontend**: Square Cloud (Static Hosting)
* **Domínios**:

  * Frontend: `https://helpholyia.squareweb.app`
  * Backend: `https://iacristao.squareweb.app`

---

## Aviso Importante

Este projeto tem finalidade **espiritual e de apoio emocional**.
Ele **não substitui acompanhamento pastoral, psicológico ou psiquiátrico**.

Em situações de risco real, o sistema orienta explicitamente a busca de ajuda humana imediata.

---

## Licença

Projeto de uso livre para fins educacionais, ministeriais e experimentais.
Uso comercial ou redistribuição deve respeitar a responsabilidade ética do propósito.

---

