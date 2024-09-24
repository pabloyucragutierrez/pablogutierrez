import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Error404() {
  useEffect(() => {
    document.title = "No se encontró la página";
  }, []);
  const location = useLocation();
  return (
    <section className="section section_error">
      <h2 className="error_ruta">
        La ruta <span style={{ textTransform: "uppercase" }}>{location.pathname} </span> no
        existe
      </h2>
      <h2 className="ruta_404">Error 404</h2>
      <p>Intenta con algunas de la rutas que están arriba </p>
    </section>
  );
}
