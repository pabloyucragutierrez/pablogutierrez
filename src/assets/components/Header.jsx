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
        <a href="https://www.instagram.com/pabloyucragutierrez/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram" alt="Instagram"></ion-icon>
        </a>
        <a href="https://github.com/pabloyucragutierrez" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-github" alt="GitHub"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/pabloyucragutierrez/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-linkedin" alt="LinkedIn"></ion-icon>
        </a>
        <button className="contenedor_icon" aria-label={theme ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}>
          {theme ? (
            <ion-icon
              name="sunny-outline"
              className="theme_light"
              onClick={()=>ThemeLight(setTheme)}
              alt="Tema claro"
            ></ion-icon>
          ) : (
            <ion-icon
              name="moon-outline"
              className="theme_dark"
              onClick={()=>ThemeDark(setTheme)}
              alt="Tema oscuro"
            ></ion-icon>
          )}
        </button>
      </div>
    </header>
  );
}
