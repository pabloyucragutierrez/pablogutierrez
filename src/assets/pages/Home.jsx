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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pablo Yucra Gutierrez",
    alternateName: ["Pablo Gutierrez", "Pablo Gutiérrez"],
    jobTitle: "Web Developer",
    url: "https://pablogutierrezz.com/",
    image: "https://pablogutierrezz.com/foto-home.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cusco",
      addressCountry: "PE",
    },
    knowsAbout: [
      "React",
      "Angular",
      "NestJS",
      "MariaDB",
      "Astro",
      "Laravel",
      "SEO",
    ],
    sameAs: ["https://www.linkedin.com/in/pabloyucragutierrez/"],
  };

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
        <meta property="og:site_name" content="Pablo Gutierrez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.og_title} />
        <meta name="twitter:description" content={t.meta.og_description} />
        <meta name="twitter:image" content={pg} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
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
