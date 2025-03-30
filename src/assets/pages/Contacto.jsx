import React from "react";
import { Formulario } from "../../Formulario";
import { Helmet } from "react-helmet";
import pg from "/foto-home.png";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function Contacto() {
  const { language } = useLanguage();
  const t = language === "es" ? translations.contacto : translationsEn.contacto;

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <link rel="canonical" href="https://pablogutierrez.xyz/contacto" />
        <meta property="og:title" content={t.meta.og_title} />
        <meta property="og:description" content={t.meta.og_description} />
        <meta property="og:url" content="https://pablogutierrez.xyz/contacto" />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="section section_contacto">
        <h2 className="title_section left">{t.title}</h2>
        <div className="section_container contenedor_contacto">
          <div className="contenedor1">
            <article>
              <p dangerouslySetInnerHTML={{ __html: t.email_text }}></p>
              <p dangerouslySetInnerHTML={{ __html: t.linkedin_text }}></p>
            </article>
            <form
              action=""
              className="form"
              onSubmit={(e) => Formulario(e, language)}
            >
              <div>
                <label htmlFor="nombres">
                  {t.form.name_label}{" "}
                  <span className="error error_nombre">{t.form.name_error}</span>
                </label>
                <input
                  type="text"
                  name="nombres"
                  id="nombres"
                  placeholder={
                    language === "es"
                      ? "Ingresa tu nombre..."
                      : "Enter your name..."
                  }
                  autoComplete="on"
                />
              </div>
              <div>
                <label htmlFor="email">
                  {t.form.email_label}{" "}
                  <span className="error error_email">{t.form.email_error}</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={
                    language === "es"
                      ? "Ingresa tu correo..."
                      : "Enter your email..."
                  }
                  autoComplete="on"
                />
              </div>
              <div>
                <label htmlFor="mensaje">
                  {t.form.message_label}{" "}
                  <span className="error error_mensaje">
                    {t.form.message_error}
                  </span>
                </label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  autoComplete="on"
                  placeholder={language === "es" ? "Mensaje" : "Message"}
                ></textarea>
              </div>
              <div style={{ gap: ".5rem" }}>
                <input
                  className="btnSubmit"
                  type="submit"
                  value={t.form.submit}
                />
                <span className="loader"></span>
                <p className="text-exito"></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}