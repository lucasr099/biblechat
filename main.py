from dotenv import load_dotenv
load_dotenv()

from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
from app.auth import router as auth_router
from app.chat import router as chat_router  # ✅ IMPORTAÇÃO CORRETA
from app.database import Base, engine

app = FastAPI(title="BibliaChat API")


@app.get("/ping")
def ping():
    return {"status": "pong"}

# cria tabelas
Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # frontend
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# rotas
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(chat_router, tags=["Chat"])

@app.get("/")
def root():
    return {"status": "API online"}
