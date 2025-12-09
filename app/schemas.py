# app/schemas.py
from pydantic import BaseModel
from typing import Optional, List

class UserCreate(BaseModel):
    email: str
    password: str
    name: Optional[str]
    spiritual_status: Optional[str]

class UserLogin(BaseModel):
    email: str
    password: str

class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
