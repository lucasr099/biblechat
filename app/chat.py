from fastapi import APIRouter, Depends
from pydantic import BaseModel

from app.groq_service import ask_groq
from app.crisis_detector import is_crisis
from app.auth import get_current_user

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(req: ChatRequest, user=Depends(get_current_user)):
    text = req.message.strip()

    if is_crisis(text):
        return {
            "reply": (
                "Eu sinto muito que a dor esteja tão intensa agora. "
                "Mesmo assim, sua vida tem valor. "
                "Deus está perto de você neste momento. "
                "Eu estou aqui com você. "
                "Você não precisa enfrentar isso sozinho."
            )
        }

    messages = [{"role": "user", "content": text}]

    reply = ask_groq(messages)

    return {"reply": reply}
