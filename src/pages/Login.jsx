import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/Api";
import Header from "./components/Header"; 
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorGeneral, setErrorGeneral] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // limpa erros anteriores
    setErrorEmail("");
    setErrorPassword("");
    setErrorGeneral("");

    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.access_token);
      window.location.href = "/chat";
    } catch (err) {
      // Exemplo de respostas da API
      const msg = err.response?.data?.message?.toLowerCase() || "";

      if (msg.includes("email")) {
        setErrorEmail("E-mail não encontrado.");
      } else if (msg.includes("senha")) {
        setErrorPassword("Senha incorreta.");
      } else {
        setErrorGeneral("Não foi possível entrar. Verifique seus dados.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
    
      <div className="login-page">
        <div className="login-card">
          <h1>📖 HolyHelp.IA</h1>
          <p>Entre para continuar</p>

          <form onSubmit={handleSubmit}>
            
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            {errorEmail && <p className="input-error">{errorEmail}</p>}

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {errorPassword && <p className="input-error">{errorPassword}</p>}

            <button disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>

            {errorGeneral && (
              <p className="input-error general-error">{errorGeneral}</p>
            )}
          </form>

          <span>
            Não tem conta? <Link to="/Register">Cadastre-se</Link>
          </span>

        </div>
      </div>
    </>
  );
}
