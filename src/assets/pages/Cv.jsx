import React from "react";
import { Helmet } from "react-helmet";
import react from "/images/icono-react.png";
import laravel from "/images/icono-laravel.png";
import bootstrap from "/images/icono-bootstrap.png";
import git from "/images/icono-git.svg";
import github from "/images/icono-github.svg";
import aws from "/images/icono-aws.png";
import sass from "/images/icono-sass.png";
import html from "/images/icono-html.png";
import css from "/images/icono-css.png";
import javascript from "/images/icono-javascript.png";
import angular from "/images/icono-angular.png";
import astro from "/images/icono-astro.png";
import tailwind from "/images/icono-tailwind.png";
import nextjs from "/images/icono-nextjs.png";
import pg from "/foto-home.png";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function Cv() {
  const { language } = useLanguage();
  const t = language === "es" ? translations.cv : translationsEn.cv;

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://pablogutierrez.xyz/sobre-mi" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta property="og:url" content="https://pablogutierrez.xyz/sobre-mi" />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="section section_cv">
        <h2 className="title_section left">{t.about_me}</h2>
        <div className="section_container contenedor_cv">
          <div className="contenedor1">
            <article>
              <p>{t.description1}</p>
              <p>{t.description2}</p>
              <br />
            </article>
          </div>
          <div className="hr_section"></div>
          <div className="contenedor2">
            <h2 className="title_section right">{t.i_am}</h2>
            <div className="contenedor_acerca">
              <article className="image">
                <img src="" alt="Pablo Gutierrez" />
              </article>
              <article className="text">
                <ul>
                  <li>{t.name}</li>
                  <li>{t.born}</li>
                  <li>{t.live}</li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1o7BPZbRzBm02TfD0EG8cm9R5BbBlB2eE/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.cv_link}
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="hr_section"></div>
          <div className="contenedor3">
            <h2 className="title_section left">{t.skills}</h2>
            <div className="contenedor_habilidades">
              <button>
                <img src={angular} alt="Angular" />
                Angular
              </button>
              <button>
                <img src={react} alt="React js" />
                React js
              </button>
              <button>
                <img src={nextjs} alt="Next.js" className="filter_img2" />
                Next.js
              </button>
              <button>
                <img src={astro} alt="Astro" className="filter_img" />
                Astro
              </button>
              <button>
                <img src={laravel} alt="Laravel" />
                Laravel {language === "es" ? "(Básico)" : "(Basic)"}
              </button>
              <button>
                <img src={bootstrap} alt="Bootstrap" />
                Bootstrap
              </button>
              <button>
                <img src={tailwind} alt="Tailwind CSS" />
                Tailwind CSS
              </button>
              <button>
                <img src={github} className="filter_img" alt="GitHub" />
                GitHub
              </button>
              <button>
                <img src={git} alt="Git" />
                Git
              </button>
              <button>
                <img src={aws} alt="AWS" />
                AWS {language === "es" ? "(Básico)" : "(Basic)"}
              </button>
              <button>
                <img src={sass} alt="Sass" />
                Sass
              </button>
              <button>
                <img src={html} alt="HTML" />
                HTML
              </button>
              <button>
                <img src={css} alt="CSS" />
                CSS
              </button>
              <button>
                <img src={javascript} alt="JavaScript" />
                JavaScript
              </button>
            </div>
          </div>
          <div className="hr_section"></div>
          <div className="contenedor4">
            <h2 className="title_section right">{t.education}</h2>
            <div className="contenedor_educacion">
              <ol>
                <li>{t.education_items[0]}</li>
                <li>
                  {language === "es" ? "Introducción al Desarrollo Web en " : "Introduction to Web Development at "}
                  <a
                    href="https://learndigital.withgoogle.com/link/1nur091p2ww"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Actívate
                  </a>{" "}
                  (ID del certificado: T3B YY6 RJ2)
                </li>
                <li>
                  {language === "es" ? "Desarrollo de Sistemas de Información en " : "Information Systems Development at "}
                  <a
                    href="https://khipu.edu.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Khipu
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}