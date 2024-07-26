import React from "react";
import { Helmet } from "react-helmet";
import code from "/code-home.jpg";
import pg from "/foto-home.png"


export function Inicio() {
  return (
    <>
      <Helmet>
        <title>Pablo Gutierrez - Inicio</title>
        <meta name="description" content="Soy desarrollador frontend con experiencia en React, Angular, Laravel y Astro. Explora mi sitio para ver cómo puedo ayudarte a construir interfaces web modernas y eficientes con las últimas tecnologías." />
        <meta name="keywords" content="Inicio, Pablo Gutierrez, Desarrollador frontend, Desarrollador web, Desarrollo Frontend, React, Desarrollo Web, Angular, Astro, Laravel, Código" />
        <link rel="canonical" href="https://pablogutierrez.xyz/inicio" />
        <meta property="og:title" content="Pablo Gutierrez - Inicio" />
        <meta property="og:description" content="Soy desarrollador frontend con experiencia en React, Angular, Laravel y Astro. Explora mi sitio para ver cómo puedo ayudarte a construir interfaces web modernas y eficientes con las últimas tecnologías." />
        <meta property="og:url" content="https://pablogutierrez.xyz/inicio" />
        <meta property="og:image" content={pg}/>
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet> 
      <section className="section section_inicio">
        <h2 className="title_section right">Hola 👋🏻</h2>
        <div className="section_container contenedor_inicio">
          <div className="contenedor1">
            <article>
              <p>¡Hola! Bienvenido a mi sitio web. 😀</p>
              <p>
                Transformo diseños en código usando HTML, CSS y JavaScript, y
                tengo experiencia en frameworks como React, Astro, Angular y
                Laravel. Con capacidad para consumir APIs, he desarrollado
                aplicaciones web interactivas y responsivas. Siempre estoy en
                búsqueda de oportunidades para aprender y aplicar las últimas
                tendencias en tecnología frontend, con el objetivo de crear
                interfaces intuitivas y modernas.
              </p>
              <p>
                En la sección de Proyectos, podrás encontrar algunos proyectos en
                los que pude participar como desarrollador frontend.
              </p>
            </article>
            <article>
              <img src={code} alt="Desarrollo frontend" />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
