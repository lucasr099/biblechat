import { useEffect, useState, useRef } from "react";
import api from "../services/Api";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // 🔐 Proteção de rota
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  // 🔄 Scroll automático
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 📱 Correção teclado iOS
  useEffect(() => {
    const handleFocus = () => {
      if (bodyRef.current) {
        bodyRef.current.style.paddingBottom = "220px";
      }
      setTimeout(scrollToBottom, 300);
    };

    const handleBlur = () => {
      if (bodyRef.current) {
        bodyRef.current.style.paddingBottom = "180px";
      }
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    }

    return () => {
      if (input) {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  // ⬇️ Scroll suave
  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  // 📤 Enviar mensagem
  async function handleSend() {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    setInput("");

    try {
      const res = await api.post("/chat", { message: userMessage });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Erro ao enviar mensagem. Tente novamente.",
        },
      ]);
    }

    // 📱 Mantém foco no iOS
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  }

  // ⌨️ Enter envia
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      {/* HEADER */}
      <header className="chat-header">
        <span className="chat-title">HelpHoly.IA</span>
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </header>

      {/* MENSAGENS */}
      <div className="chat-body" ref={bodyRef}>
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.role}`}>
            {m.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="input-container">
        <div className="chat-input-wrapper">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
            autoComplete="off"
            autoCorrect="off"
            spellCheck="true"
          />
          <button onClick={handleSend}>Enviar</button>
        </div>

        <p className="chat-disclaimer">
          Aviso: Esta IA é experimental e pode cometer erros.
          <br />
          Não substitui aconselhamento profissional.
        </p>
      </div>
    </div>
  );
}
