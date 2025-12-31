from dotenv import load_dotenv
load_dotenv()

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request, Response

from app.database import Base, engine
from app.auth import router as auth_router
from app.chat import router as chat_router

app = FastAPI(title="BibliaChat API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://helpholyia.squareweb.app",
        "https://iacristao.squareweb.app",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.options("/{path:path}")
async def options_handler(path: str, request: Request):
    origin = request.headers.get("origin")

    return Response(
        status_code=200,
        headers={
            "Access-Control-Allow-Origin": origin or "*",
            "Accessys-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Authorization,Content-Type",
            "Access-Control-Allow-Credentials": "true",
        },
    )

@app.get("/ping")
def ping():
    return {"status": "pong"}

Base.metadata.create_all(bind=engine)

app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(chat_router, tags=["Chat"])

@app.get("/")
def root():
    return {"status": "API online"}
