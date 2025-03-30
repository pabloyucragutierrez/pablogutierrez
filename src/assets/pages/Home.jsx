import React, { useEffect } from "react";
import pg from "/foto-home.png";
import { Helmet } from "react-helmet";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function Home() {
  const { language } = useLanguage() || { language: "es" };
  const t = language === "es" ? translations.home : translationsEn.home;

  useEffect(() => {
    document.title = t.meta.title;
  }, [language]);

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://pablogutierrez.xyz" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta property="og:url" content="https://pablogutierrez.xyz" />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="section_home">
        <div className="contenedor_home">
          <article className="text">
            <h2 dangerouslySetInnerHTML={{ __html: t.title }}></h2>
          </article>
          <article className="image">
            <img src={pg} alt="Pablo Gutierrez" />
          </article>
        </div>
      </section>
    </>
  );
}