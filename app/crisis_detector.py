def is_crisis(text: str) -> bool:
    keywords = ["quero morrer", "me matar", "acabar com tudo"]
    return any(k in text.lower() for k in keywords)
