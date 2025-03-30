import React from "react";
import { Helmet } from "react-helmet";
import code from "/code-home.jpg";
import pg from "/foto-home.png";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function Inicio() {
  const { language } = useLanguage() || { language: "es" };
  const t = language === "es" ? translations.inicio : translationsEn.inicio;

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://pablogutierrez.xyz/inicio" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta property="og:url" content="https://pablogutierrez.xyz/inicio" />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="section section_inicio">
        <h2 className="title_section right">{t.greeting}</h2>
        <div className="section_container contenedor_inicio">
          <div className="contenedor1">
            <article>
              <p>{t.welcome}</p>
              <p>{t.description}</p>
              <p>{t.projects_info}</p>
            </article>
            <article className="imgs__inicio">
              <img src={code} alt="Desarrollo frontend" />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}