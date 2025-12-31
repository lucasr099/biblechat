import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      
      {/* HEADER PRÓPRIO DO ROM */}
      <header className="rom-header">
        <div className="rom-logo">HolyHelp.IA</div>

        <nav className={`rom-nav ${menuOpen ? "open" : ""}`}>
          <a 
            href="https://www.linkedin.com/in/lucasdesenbackend/" 
            target="_blank" 
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link to="/SobreNos">Sobre nós</Link>
          <Link to="/login">Entrar</Link>
          <Link to="/register" className="rom-btn">Criar conta</Link>
        </nav>

        <div 
          className="rom-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </header>

      {/* HERO ORIGINAL (NÃO ALTERADO) */}
      <main className="home-hero">
        <div className="hero-content">
          <h1>Acolhimento emocional inspirado nos valores do Evangelho</h1>

          <p className="hero-sub">
             O <strong>HolyHelp.IA</strong> foi criado para oferecer um espaço seguro de reflexão,
            conforto emocional e orientação fundamentada em princípios cristãos.
            Aqui, você encontra uma experiência que une acolhimento, sabedoria bíblica
            e ferramentas práticas para fortalecer sua fé e suas emoções.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-btn">Começar agora</Link>
            <Link to="/login" className="secondary-btn">Já tenho conta</Link>
          </div>

          <p className="disclaimer">
            Aviso: Este sistema é experimental e pode cometer erros.
            Não substitui aconselhamento profissional. Verifique informações importantes.
          </p>
        </div>
      </main>
    </div>
  );
}
