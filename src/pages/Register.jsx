import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/Api";
import Header from "./components/Header";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("NAO_CONVERTIDO");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setEmailError("");
    setLoading(true);

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
        spiritual_status: status,
      });

     
      window.location.href = "/login";

    } catch (error) {
     
      if (error.response?.status === 409) {
        setEmailError("Este e-mail já está cadastrado.");
      } else {
        setEmailError("Este e-mail já está cadastrado.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <div className="register-page">
        <div className="register-card">
          <h1>📖 HolyHelp.IA</h1>
          <p>Crie sua conta</p>

          <form onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nome"
              required
            />

            <input
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setEmailError(""); // limpa enquanto digita
              }}
              placeholder="E-mail"
              type="email"
              required
            />

            {/* Mensagem de erro abaixo do e-mail */}
            {emailError && (
              <span className="error-msg">{emailError}</span>
            )}

            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />

            <div className="status-wrapper">
              <label>Status espiritual</label>
              <select
                value={status}
                onChange={e => setStatus(e.target.value)}
              >
                <option value="NAO_CONVERTIDO">Não convertido</option>
                <option value="AFASTADO">Afastado</option>
                <option value="CONVERTIDO">Convertido</option>
              </select>
            </div>

            <button disabled={loading}>
              {loading ? "Criando conta..." : "Criar conta"}
            </button>
          </form>

          <span style={{ textAlign: "center" }}>
            Já tem conta? <Link to="/login">Entrar</Link>
          </span>
        </div>
      </div>
    </>
  );
}
