import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeLight } from "../../ThemeLight";
import { ThemeDark } from "../../ThemeDark";

export function Header() {
  const [theme, setTheme] = useState(true);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" aria-label="Ir a la página de inicio de Pablo Gutierrez">
          Pablo Gutierrez
        </Link>
      </div>
      <nav className="menu_header" role="navigation">
        <ul>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre mí</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <div className="social_media">
        <a
          href="https://www.instagram.com/pabloyucragutierrez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://github.com/pabloyucragutierrez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pabloyucragutierrez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
        <button
          className="contenedor_icon"
          aria-label={theme ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
        >
          {theme ? (
            <i
              className="bx bx-sun theme_light"
              onClick={() => ThemeLight(setTheme)}
              alt="Tema claro"
            ></i>
          ) : (
            <i
              className="bx bx-moon theme_dark"
              onClick={() => ThemeDark(setTheme)}
              alt="Tema oscuro"
            ></i>
          )}
        </button>
      </div>
    </header>
  );
}
