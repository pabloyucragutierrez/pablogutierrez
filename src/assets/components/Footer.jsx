import React from "react";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations/es.json";
import translationsEn from "../../translations/en.json";

export function Footer() {
  const { language } = useLanguage();
  const t = language === "es" ? translations.footer : translationsEn.footer;

  return (
    <footer className="footer">
      <p>
        {t.developed_by}{" "}
        <a
          href="https://www.linkedin.com/in/pabloyucragutierrez/"
          target="_blank"
          rel="noopener noreferrer"
          title="Pablo Gutierrez on LinkedIn"
        >
          {t.name}
        </a>{" "}
        {t.year}
      </p>
    </footer>
  );
}