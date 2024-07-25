import React from "react";
import { Helmet } from "react-helmet";
import react from "/images/icono-react.png";
import reactrouter from "/images/icono-react-router.png";
import laravel from "/images/icono-laravel.png";
import bootstrap from "/images/icono-bootstrap.png";
import git from "/images/icono-git.svg";
import github from "/images/icono-github.svg";
import aws from "/images/icono-aws.png";
import sass from "/images/icono-sass.png";
import html from "/images/icono-html.png";
import css from "/images/icono-css.png";
import javascript from "/images/icono-javascript.png";
import angular from "/images/icono-angular.png";
import astro from "/images/icono-astro.png";
import pg from "/foto-home.png"


export function Cv() {
  return (
    <>
      <Helmet>
       <title>Pablo Gutierrez - Sobre mí</title>
        <meta name="description" content="Descubre más sobre mi trayectoria profesional y mi enfoque en el desarrollo frontend. En esta sección, comparto mi historia y lo que me motiva en el mundo de la tecnología." />
        <meta name="keywords" content="Inicio, Pablo Gutierrez, Desarrollo Frontend, React, Desarrollo Web, Angular, Astro, Laravel, Proyectos" />
        <link rel="canonical" href="https://pablogutierrez.xyz/sobre-mi" />
        <meta property="og:title" content="Pablo Gutierrez - Sobre mí" />
        <meta property="og:description" content="Descubre más sobre mi trayectoria profesional y mi enfoque en el desarrollo frontend. En esta sección, comparto mi historia y lo que me motiva en el mundo de la tecnología." />
        <meta property="og:url" content="https://pablogutierrez.xyz/sobre-mi" />
        <meta property="og:image" content={pg}/>
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="section section_cv">
        <h2 className="title_section left">Sobre mí 🧑🏻</h2>
        <div className="section_container contenedor_cv">
          <div className="contenedor1">
            <article>
              <p>
                Disfruto desarrollar interfaces de usuario usando las tecnologías
                adecuadas, así como también la optimización y el SEO para el buen
                posicionamiento y la carga del sitio web. <br />
              </p>
              <p>
                Mi camino en el desarrollo web comenzó cuando, de adolescente, me
                encontré maravillado con la posibilidad de dar vida a ideas y
                conceptos a través del código. He trabajado en una variedad de
                proyectos, desde sitios web informativos hasta tiendas en línea,
                siempre desafiándome a mí mismo y creciendo en el proceso.
              </p>
              <br />
            </article>
          </div>
          <div className="hr_section"></div>
          <div className="contenedor2">
            <h2 className="title_section right">Yo soy</h2>
            <div className="contenedor_acerca">
              <article className="image">
                <img src="" alt="Foto de Pablo Gutierrez" />
              </article>
              <article className="text">
                <ul>
                  <li>Pablo Yucra Gutierrez</li>
                  <li>Nací en Cusco, Perú. 22 de Junio de 2003</li>
                  <li>Vivo en Cusco, Perú</li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1rfMitz3KeffETZqBc-CdEde8MpatvbE8/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CV
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="hr_section"></div>
          <div className="contenedor3">
            <h2 className="title_section left">Mis habilidades</h2>
            <div className="contenedor_habilidades">
              <button>
                <img src={angular} alt="Angular" />
                Angular
              </button>
              <button>
                <img src={react} alt="React js" />
                React js
              </button>
              <button>
                <img src={astro} alt="Astro" className="filter_img" />
                Astro
              </button>
              <button>
                <img src={laravel} alt="Laravel" />
                Laravel (Básico)
              </button>
              <button>
                <img src={bootstrap} alt="Bootstrap" />
                Bootstrap
              </button>
              <button>
                <img src={github} className="filter_img" alt="GitHub" />
                GitHub
              </button>
              <button>
                <img src={git} alt="Git" />
                Git
              </button>
              <button>
                <img src={aws} alt="AWS" />
                AWS (Básico)
              </button>
              <button>
                <img src={sass} alt="Sass" />
                Sass
              </button>
              <button>
                <img src={html} alt="HTML" />
                HTML
              </button>
              <button>
                <img src={css} alt="CSS" />
                CSS
              </button>
              <button>
                <img src={javascript} alt="JavaScript" />
                JavaScript
              </button>
            </div>
          </div>
          <div className="hr_section"></div>
          <div className="contenedor4">
            <h2 className="title_section right">Educación</h2>
            <div className="contenedor_educacion">
              <ol>
                <li>Eterno Autodidacta</li>
                <li>
                  Introducción al Desarrollo Web en{" "}
                  <a
                    href="https://learndigital.withgoogle.com/link/1nur091p2ww"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Actívate
                  </a>{" "}
                  (ID del certificado: T3B YY6 RJ2)
                </li>
                <li>
                  Desarrollo de Sistemas de Información en{" "}
                  <a
                    href="https://khipu.edu.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Khipu
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
