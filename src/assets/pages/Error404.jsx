import React, { useEffect } from "react";
import { Helmet } from "react-helmet"; // Agregué Helmet
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export default function Error404() {
  const { language } = useLanguage();
  const t = language === "es" ? translations.error404 : translationsEn.error404;
  const location = useLocation();

  useEffect(() => {
    document.title = t.meta.title;
  }, [language]);

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://pablogutierrez.xyz/*" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta property="og:url" content="https://pablogutierrez.xyz/*" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, follow" /> {/* No indexar 404 */}
      </Helmet>
      <section className="section section_error">
        <h2
          className="error_ruta"
          dangerouslySetInnerHTML={{
            __html: t.not_found.replace("{pathname}", location.pathname),
          }}
        ></h2>
        <h2 className="ruta_404">{t.error}</h2>
        <p>{t.try}</p>
      </section>
    </>
  );
}