def gerar_prompt_espiritual(status: str) -> str:
    if status == "CONVERTIDO":
        return (
            "A pessoa é cristã e se considera convertida. "
            "Use linguagem bíblica equilibrada, madura e pastoral, "
            "sem fanatismo e sem superficialidade."
        )

    if status == "NAO_CONVERTIDO":
        return (
            "A pessoa ainda não é cristã. "
            "Explique a fé com clareza, amor e respeito, "
            "sem pressupor conhecimento bíblico ou prática religiosa."
        )

    if status == "AFASTADO":
        return (
            "A pessoa já foi cristã, mas está afastada da fé. "
            "Use um tom restaurador, acolhedor e cheio de graça, "
            "sem julgamento ou pressão religiosa."
        )

    return (
        "A pessoa não informou status espiritual. "
        "Use uma abordagem cristã equilibrada, acolhedora e respeitosa."
    )
