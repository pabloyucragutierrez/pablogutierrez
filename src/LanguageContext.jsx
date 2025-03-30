import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "es";
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("theme", theme ? "dark" : "light");
    if (theme) {
      document.documentElement.style.setProperty("--color-theme", "#fff");
      document.documentElement.style.setProperty("--color-btn", "#455776");
      document.documentElement.style.setProperty("--filter-img", "invert(0)");
      document.documentElement.style.setProperty("--filter-img2", "invert(1)");
      document.querySelector("body").style.backgroundColor = "#0b0e2d";
      document.querySelector(".header").style.backgroundColor = "#0b0e2d";
    } else {
      document.documentElement.style.setProperty("--color-theme", "#0b0e2d");
      document.documentElement.style.setProperty("--color-btn", "#e5e8ed");
      document.documentElement.style.setProperty("--filter-img", "invert(1)");
      document.documentElement.style.setProperty("--filter-img2", "invert(0)");
      document.querySelector("body").style.backgroundColor = "#fff";
      document.querySelector(".header").style.backgroundColor = "#fff";
    }
  }, [theme]);

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, theme, changeTheme }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
