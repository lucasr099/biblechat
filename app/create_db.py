from sqlalchemy import create_engine
from models import Base

engine = create_engine("sqlite:///chat.db")

Base.metadata.create_all(engine)

print("✅ Banco criado com sucesso")
