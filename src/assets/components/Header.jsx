import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeLight } from "../../ThemeLight";
import { ThemeDark } from "../../ThemeDark";

export function Header() {
  const [theme, setTheme] = useState(true);
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Pablo Gutierrez</a>
      </div>
      <nav className="menu_header">
        <Link to="/inicio">Inicio</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav> 
      <div className="social_media">
        <a href="https://www.instagram.com/pabloyucragutierrez/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://github.com/pabloyucragutierrez" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/pabloyucragutierrez/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <button className="contenedor_icon">
          {theme ? (
            <ion-icon
              name="sunny-outline"
              className="theme_light"
              onClick={()=>ThemeLight(setTheme)}
            ></ion-icon>
          ) : (
            <ion-icon
              name="moon-outline"
              className="theme_dark"
              onClick={()=>ThemeDark(setTheme)}
            ></ion-icon>
          )}
        </button>
      </div>
    </header>
  );
}
