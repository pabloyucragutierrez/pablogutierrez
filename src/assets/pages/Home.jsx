import React, { useEffect } from "react";
import pg from "/foto-home.png";
import { Helmet } from "react-helmet";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";
import { Header } from "../components/Header";
import { HeaderMovil } from "../components/HeaderMovil";

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
        <link rel="canonical" href="https://pablogutierrezz.com" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta property="og:url" content="https://pablogutierrezz.com" />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="show_desktop">
        <Header />
      </div>
      <section className="section_home">
        <div className="contenedor_home desktop">
          <article className="text">
            <h2 dangerouslySetInnerHTML={{ __html: t.title }}></h2>
          </article>
          <article className="image">
            <img src={pg} alt="Pablo Gutierrez" />
          </article>
        </div>
        <div className="contenedor_home movil">
          <article className="image">
            <img src={pg} alt="Pablo Gutierrez" />
          </article>
          <article className="text">
            <h2 dangerouslySetInnerHTML={{ __html: t.title }}></h2>
          </article>
          <div className="show_movil">
            <HeaderMovil />
          </div>
        </div>
      </section>
    </>
  );
}
