import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Agregué Helmet
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function PoliticaDePrivacidad() {
  const { language } = useLanguage();
  const t = language === "es" ? translations.politica : translationsEn.politica;

  useEffect(() => {
    document.title = t.meta.title;
  }, [language]);

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link
          rel="canonical"
          href="https://pablogutierrez.xyz/politica-de-privacidad"
        />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta
          property="og:url"
          content="https://pablogutierrez.xyz/politica-de-privacidad"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="section section_pdp">
        <h2 className="title_section right">{t.title}</h2>
        <div className="section_container contenedor_pdp">
          <div className="contenedor1">
            <h2>{t.user_info}</h2>
            <p>{t.personal_data}</p>

            <h2>{t.usage}</h2>
            <p>{t.improve_site}</p>
            <p>{t.support}</p>

            <h2>{t.adsense}</h2>
            <p>{t.adsense_info}</p>

            <h2>{t.gdpr}</h2>
            <p>{t.gdpr_info}</p>

            <h2>{t.security}</h2>
            <p>{t.security_info}</p>
          </div>
        </div>
      </section>
    </>
  );
}