import React, { useEffect } from "react";
import code from "/code-home.jpg";
export function Inicio() {
  useEffect(() => {
    document.title = "Pablo Gutierrez - Inicio";
  }, []);

  return (
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
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4956377527110765"
              crossorigin="anonymous"
            ></script>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-4956377527110765"
              data-ad-slot="8673384015"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            <img src={code} alt="Desarrollo frontend" />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4956377527110765"
              crossorigin="anonymous"
            ></script>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-4956377527110765"
              data-ad-slot="8673384015"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </article>
        </div>
      </div>
    </section>
  );
}
