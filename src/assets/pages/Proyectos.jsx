import React from "react";
import { Helmet } from "react-helmet";
import pg from "/foto-home.png";
import nofoto from "/sinfoto.png";
import { SinFoto } from "./SinFoto";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function Proyectos() {
  const { language } = useLanguage();
  const t = language === "es" ? translations.proyectos : translationsEn.proyectos;

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://pablogutierrez.xyz/proyectos" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta property="og:url" content="https://pablogutierrez.xyz/proyectos" />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="section section_proyectos">
        <h2 className="title_section right">{t.title}</h2>
        <div className="section_container contenedor_proyectos">
          <div className="contenedor1">
            {t.projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <article>
                  <SinFoto
                    src={project.logo}
                    alt={project.alt}
                    fallback={nofoto}
                  />
                  <div className="text">
                    <p>
                      <b>{project.name}</b> ({project.year})
                    </p>
                    <p>{project.description}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}