import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          HolyHelp.IA
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <div className={open ? "bar bar1 open" : "bar bar1"}></div>
          <div className={open ? "bar bar2 open" : "bar bar2"}></div>
          <div className={open ? "bar bar3 open" : "bar bar3"}></div>
        </button>

        {/* NAV */}
        <nav className={`header-nav ${open ? "open" : ""}`}>
          <Link to="/" className="header-link" onClick={() => setOpen(false)}>
            Início
          </Link>

          <Link to="/login" className="header-link" onClick={() => setOpen(false)}>
            Entrar
          </Link>

          <Link
            to="/register"
            className="header-link nav-btn"
            onClick={() => setOpen(false)}
          >
            Criar Conta
          </Link>
        </nav>

      </div>
    </header>
  );
}
