from fastapi import APIRouter, Depends
from pydantic import BaseModel

from app.groq_service import ask_groq
from app.crisis_detector import detect_state
from app.crisis_responses import SUICIDE_RESPONSE, VIOLENCE_RESPONSE
from app.auth import get_current_user
from app.prompt_builder import gerar_prompt_espiritual

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(req: ChatRequest, user=Depends(get_current_user)):
    print("DEBUG | spiritual_status recebido:", user.spiritual_status)

    text = req.message.strip()
    state = detect_state(text)

    if state == "SUICIDE":
        return {"reply": SUICIDE_RESPONSE}

    if state == "VIOLENCE":
        return {"reply": VIOLENCE_RESPONSE}

    contexto_espiritual = gerar_prompt_espiritual(user.spiritual_status)

    messages = [
        {
            "role": "system",
            "content": f"""
CONTEXTO DO USUÁRIO:
{contexto_espiritual}
Responda sempre respeitando esse contexto espiritual.
"""
        },
        {
            "role": "user",
            "content": text
        }
    ]

    reply = ask_groq(messages)
    return {"reply": reply}
