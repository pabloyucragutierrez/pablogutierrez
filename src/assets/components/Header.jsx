import { Link } from "react-router-dom";
import { ThemeLight } from "../../ThemeLight";
import { ThemeDark } from "../../ThemeDark";
import spanish from "/spanish.svg";
import english from "/english.svg";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function Header() {
  const { language, changeLanguage, theme, changeTheme } = useLanguage();

  const t = language === "es" ? translations.header : translationsEn.header;

  const flagToShow = language === "es" ? english : spanish;
  const nextLanguage = language === "es" ? "en" : "es";

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
  };

  const handleThemeLight = () => {
    ThemeLight(changeTheme);
  };

  const handleThemeDark = () => {
    ThemeDark(changeTheme);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" aria-label={t.logo_aria_label}>
          Pablo Gutierrez
        </Link>
      </div>
      <nav className="menu_header" role="navigation">
        <ul>
          <li>
            <Link to="/inicio">{t.home}</Link>
          </li>
          <li>
            <Link to="/sobre-mi">{t.about}</Link>
          </li>
          <li>
            <Link to="/proyectos">{t.projects}</Link>
          </li>
          <li>
            <Link to="/contacto">{t.contact}</Link>
          </li>
        </ul>
      </nav>
      <div className="social_media">
        <div className="change_language">
          <button
            className="img_language"
            onClick={() => handleLanguageChange(nextLanguage)}
            aria-label={
              nextLanguage === "es" ? t.switch_to_spanish : t.switch_to_english
            }
          >
            <img
              src={flagToShow}
              alt={nextLanguage === "es" ? t.spanish_alt : t.english_alt}
              style={{ filter: "var(--filter-img2)" }}
            />
          </button>
        </div>
        <a
          href="https://www.instagram.com/pabloyucragutierrez/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === "es" ? "Instagram de Pablo Gutierrez" : "Pablo Gutierrez's Instagram"}
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://github.com/pabloyucragutierrez"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === "es" ? "GitHub de Pablo Gutierrez" : "Pablo Gutierrez's GitHub"}
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pabloyucragutierrez/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={language === "es" ? "LinkedIn de Pablo Gutierrez" : "Pablo Gutierrez's LinkedIn"}
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <button
          className="contenedor_icon"
          aria-label={theme ? t.switch_to_light_theme : t.switch_to_dark_theme}
        >
          {theme ? (
            <i
              className="bx bx-sun theme_light"
              onClick={handleThemeLight}
              alt={t.light_theme_alt}
            ></i>
          ) : (
            <i
              className="bx bx-moon theme_dark"
              onClick={handleThemeDark}
              alt={t.dark_theme_alt}
            ></i>
          )}
        </button>
      </div>
    </header>
  );
}