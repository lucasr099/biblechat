📖 HelpHoly.IA – API de Aconselhamento Cristão com IA


HelpHoly.IA é uma API de chat cristã desenvolvida com FastAPI, integrada a IA generativa (Groq / LLaMA), cujo objetivo é oferecer acolhimento espiritual, direção prática e cuidado emocional, sempre com base cristã equilibrada, respeitando o contexto espiritual individual de cada usuário.

O sistema adapta a resposta da IA conforme o spiritual_status do usuário, garantindo abordagens distintas para pessoas convertidas, não convertidas ou afastadas da fé.

✨ Funcionalidades Principais

Autenticação de usuários (JWT)

Chat com IA cristã contextualizada

Detecção de crise (suicídio e violência)

Respostas de segurança prioritárias

Personalização do tom espiritual da IA

Integração com Groq API (LLaMA)

CORS configurado para produção

Logs claros para auditoria e debug

🧠 Contexto Espiritual Dinâmico

Cada usuário possui um campo spiritual_status no banco de dados:

CONVERTIDO

NAO_CONVERTIDO

AFASTADO

Esse valor é:

Recuperado via autenticação

Processado no backend

Injetado no System Prompt

Enviado ao modelo de IA antes da geração da resposta

Exemplo de log no servidor:

DEBUG | spiritual_status recebido: NAO_CONVERTIDO


Isso garante que a IA sempre responde de acordo com o perfil espiritual do usuário.

🏗️ Arquitetura do Projeto
app/
├── auth.py              # Autenticação e JWT
├── chat.py              # Rota /chat
├── crisis_detector.py   # Detecção de risco
├── crisis_responses.py  # Respostas de emergência
├── database.py          # SQLAlchemy engine
├── models.py            # Models (User, Message)
├── prompt_builder.py    # Prompt espiritual dinâmico
├── groq_service.py      # Integração com Groq API
main.py                  # Inicialização da aplicação

🔐 Modelo de Usuário
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    password = Column(String)
    name = Column(String)
    spiritual_status = Column(String)

💬 Endpoint de Chat
POST /chat

Headers

Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json


Body

{
  "message": "Quem foi Jesus?"
}


Resposta

{
  "reply": "Resposta gerada pela IA conforme o contexto espiritual"
}

🛡️ Segurança e Proteção à Vida

O sistema possui um detector automático de crises:

Pensamentos suicidas

Violência

Risco à vida

Quando detectado:

A IA interrompe a conversa normal

Retorna uma mensagem segura

Incentiva ajuda humana imediata

Não continua o diálogo comum

🤖 Prompt Base da IA

A IA segue princípios rígidos:

Deus, Jesus e Espírito Santo como centro

Tom adulto, calmo e acolhedor

Sem fanatismo

Sem julgamento

Nunca substitui pastor ou psicólogo

Proteção da vida acima de tudo

O prompt espiritual específico do usuário é acoplado dinamicamente ao prompt base.

🌐 CORS e Produção

CORS configurado para:

allow_origins = [
  "https://helpholyia.squareweb.app",
  "https://iacristao.squareweb.app",
  "http://localhost:5173"
]


Compatível com frontend SPA em produção.

🚀 Como Executar Localmente
git clone https://github.com/seu-usuario/helpholy-ia
cd helpholy-ia
pip install -r requirements.txt
uvicorn main:app --reload


Crie um .env com:

GROQ_API_KEY=seu_token_aqui

📌 Status do Projeto

✅ Backend funcional

✅ IA contextualizada

✅ Produção ativa

🔄 Evolução contínua

⚠️ Aviso Importante

Este projeto não substitui:

Psicólogos

Psiquiatras

Pastores

Aconselhamento profissional

Ele atua como apoio espiritual inicial, com responsabilidade e limites claros.

🙏 Visão

Ajudar pessoas a:

Organizar emoções

Encontrar direção

Se aproximar de Deus

Proteger a própria vida

Buscar apoio humano e espiritual saudável
