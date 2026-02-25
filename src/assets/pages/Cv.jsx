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
import mariadb from "/images/icono-mariadb.png";
import nestjs from "/images/icono-nestjs.webp";
import astro from "/images/icono-astro.png";
import tailwind from "/images/icono-tailwind.png";
import nextjs from "/images/icono-nextjs.png";
import pg from "/foto-home.png";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";
import { Header } from "../components/Header";

export function Cv() {
  const { language } = useLanguage();
  const t = language === "es" ? translations.cv : translationsEn.cv;

  // Mapa de imágenes para las habilidades
  const skillImages = {
    Angular: angular,
    "React.js": react,
    "Next.js": nextjs,
    Astro: astro,
    Laravel: laravel,
    Bootstrap: bootstrap,
    "Tailwind CSS": tailwind,
    GitHub: github,
    Git: git,
    AWS: aws,
    Sass: sass,
    HTML: html,
    CSS: css,
    JavaScript: javascript,
    MariaDB: mariadb,
    NestJS: nestjs,
  };

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://pablogutierrezz.com/sobre-mi" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta
          property="og:url"
          content="https://pablogutierrezz.com/sobre-mi"
        />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
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
                      href={t.cv_url}
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
              {t.skills_list.map((skill, index) => (
                <button key={index}>
                  <img
                    src={skillImages[skill.name]}
                    alt={skill.name}
                    className={
                      skill.name === "Next.js" || skill.name === "MariaDB"
                        ? "filter_img2"
                        : skill.name === "Astro" || skill.name === "GitHub"
                        ? "filter_img"
                        : ""
                    }
                  />
                  {skill.name} {skill.level}
                </button>
              ))}
            </div>
          </div>
          <div className="hr_section"></div>
          <div className="contenedor4">
            <h2 className="title_section right">{t.education}</h2>
            <div className="contenedor_educacion">
              <ol>
                {t.education_items.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}