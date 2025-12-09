# app/models.py
from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    name = Column(String)
    spiritual_status = Column(String)

    messages = relationship("Message", back_populates="user")


class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True)
    content = Column(Text, nullable=False)
    role = Column(String, nullable=False)  # user | assistant
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    created_at = Column(
        DateTime,
        nullable=False,
        default=datetime.utcnow
    )

    user = relationship("User", back_populates="messages")
