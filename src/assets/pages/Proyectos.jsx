import React from "react";
import { Helmet } from "react-helmet";
import pg from "/foto-home.png";
import nofoto from "/sinfoto.png";
import { SinFoto } from "./SinFoto";
export function Proyectos() {
  return (
    <>
      <Helmet>
        <title>Pablo Gutierrez - Proyectos</title>
        <meta
          name="description"
          content="Revisa algunos de los proyectos en los que he trabajado como desarrollador frontend."
        />
        <meta
          name="keywords"
          content="Inicio, Pablo Gutierrez, Desarrollador frontend, Desarrollador web, Desarrollo Frontend, React, Desarrollo Web, Angular, Astro, Laravel, Proyectos"
        />
        <link rel="canonical" href="https://pablogutierrez.xyz/proyectos" />
        <meta property="og:title" content="Pablo Gutierrez - Proyectos" />
        <meta
          property="og:description"
          content="Revisa algunos de los proyectos en los que he trabajado como desarrollador frontend."
        />
        <meta
          property="og:url"
          content="https://pablogutierrez.xyz/proyectos"
        />
        <meta property="og:image" content={pg} />
        <meta property="og:type" content="website" />  
      </Helmet>
      <section className="section section_proyectos">
        <h2 className="title_section right">Mis proyectos</h2>
        <div className="section_container contenedor_proyectos">
          <div className="contenedor1">
            <a
              href="https://cloudsen12plus.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://cloudsen12plus.github.io/assets/logo.webp"
                  alt="CloudSEN12"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>CloudSEN12</b> (2024)
                  </p>
                  <p>
                    Desarrollo de secciones adicionales e implementé Chart.js
                    para los gráficos usando Astro, cambios en rutas, enlaces y
                    colores. Mejoré la accesibilidad, SEO y rendimiento de la
                    página y mejoras en responsive design.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://kintiny.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://kintiny.pe/img/kintiny_azul.png"
                  alt="KINTINY"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>KINTINY</b> (2024)
                  </p>
                  <p>
                    Desarrollé cards, sliders y añadí una animación al botón de
                    WhatsApp para mejorar la experiencia de usuario.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://dbaexpress.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://dbaexpress.pe/_next/static/img/dbalogo.png"
                  alt="DBA Express"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>DBA Express</b> (2024)
                  </p>
                  <p>
                    Desarrollé secciones adicionales y mejoré los colores en
                    toda la página. Desarrollé todos los formularios e hice el
                    envío de datos.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://vivargo.com/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://vivargo.com/static/img/logo.png"
                  alt="Vivargo"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Vivargo</b> (2024)
                  </p>
                  <p>Desarrollo de modales y sliders con Angular.</p>
                </div>
              </article>
            </a>
            <a
              href="https://tecfordata.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://tecfordata.com/assets/logo_dark.png"
                  alt="Tecfordata"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Tecfordata</b> (2024)
                  </p>
                  <p>Desarrollo de la web usando Angular.</p>
                </div>
              </article>
            </a>
            <a
              href="https://www.rabimport.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://rab-import-assets.s3.amazonaws.com/rabImport/header/logo-rab.jpg"
                  alt="RAB Import"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>RAB Import</b> (2023)
                  </p>
                  <p>
                    Desarrollé sliders, secciones, formularios, etc. Mejoré el
                    SEO, optimicé el código.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://qeswatravel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://assets-apapachame.s3.amazonaws.com/qeswa-travel/footer/logo-q.png"
                  alt="Qeswa travel"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Qeswa travel</b> (2022)
                  </p>
                  <p>
                    Desarrollador frontend en equipo web. Usé Laravel para
                    conectar la interfaz con el backend (HTML, CSS, JS).
                    Colaboré con desarrolladores backend. Optimicé rendimiento y
                    experiencia del usuario.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://exporab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://rab-import-assets.s3.amazonaws.com/expoRab/logo.jpg"
                  alt="Expo Rab"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Expo Rab</b> (2022)
                  </p>
                  <p>
                    Experiencia como desarrollador frontend en equipo web,
                    usando el framework Laravel para enlazar frontend y backend.
                    Codificación con HTML, Bootstrap, CSS, JS. Colaboración con
                    desarrolladores backend.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://kaizen.com.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://rab-import-assets.s3.amazonaws.com/kaizen/logos/logokaizen.jpg"
                  alt="Kaizen"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Kaizen</b> (2023)
                  </p>
                  <p>
                    Trabajé como desarrollador frontend en equipo web. Conexión
                    frontend y backend mediante Laravel. Utilicé HTML, CSS, JS
                    para la interfaz. Colaboración con diseñadores y backend.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://rabpartes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://rab-import-assets.s3.amazonaws.com/repuestera/logo/logo.jpg"
                  alt="La repuestera"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>La repuestera</b> (2023)
                  </p>
                  <p>
                    Desarrollé el frontend de la página completa usando Laravel
                    como backend.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://rikea.com.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://assets-apapachame.s3.amazonaws.com/rab-import/Rikea/header/logo.jpg"
                  alt="Rikea"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Rikea</b> (2023)
                  </p>
                  <p>
                    Desarrollador frontend en equipo web. Utilicé Laravel para
                    integrar frontend y backend. Codificación con HTML, CSS, JS.
                    Colaboración con diseñadores y backend. Enfoque en
                    optimización del rendimiento y experiencia del usuario.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://tecnibordados.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://rab-import-assets.s3.amazonaws.com/tecniRapido/logo/logo-tecniRapido.jpg"
                  alt="TecniRapido y TecniBordado"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>TecniRapido y TecniBordado</b> (2023)
                  </p>
                  <p>
                    TecniRapido y TecniBordado son 2 páginas en 1. Usé HTML,
                    CSS, Bootstrap y Javascript para realizar el diseño y la
                    funcionalidad de la página.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://bianchi.com.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://assets-apapachame.s3.amazonaws.com/rab-import/bianchi/header/logo.jpg"
                  alt="Bianchi"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Bianchi</b> (2023)
                  </p>
                  <p>
                    Desarrollo frontend (HTML, CSS, JavaScript, Laravel,
                    Responsive)
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://www.sudamericanaperu.com.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://rab-import-assets.s3.amazonaws.com/sudamericana-coser/logos/1.jpg"
                  alt="Sudamericana"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Sudamericana</b> (2023)
                  </p>
                  <p>
                    Desarrollo de la web completa usando HTML, CSS, Javascript y
                    Laravel para el backend.
                  </p>
                </div>
              </article>
            </a>
            <a
              href="https://calzado.sudamericanaperu.com.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article>
                <SinFoto
                  src="https://rab-import-assets.s3.amazonaws.com/sudamericana-cueros/logos/1.jpg"
                  alt="Sudamericana maquinaria de cuero y calzado"
                  fallback={nofoto}
                />
                <div className="text">
                  <p>
                    <b>Sudamericana maquinaria de cuero y calzado</b> (2023)
                  </p>
                  <p>
                    Desarrollo de la web completa usando HTML, CSS, Javascript y
                    Laravel para el backend.
                  </p>
                </div>
              </article>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
