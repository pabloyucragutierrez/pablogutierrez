import React, { useEffect } from "react";
import react from "/images/icono-react.png"
import reactrouter from "/images/icono-react-router.png"
import laravel from "/images/icono-laravel.png"
import bootstrap from "/images/icono-bootstrap.png"
import git from "/images/icono-git.svg"
import aws from "/images/icono-aws.png"
import sass from "/images/icono-sass.png"
import html from "/images/icono-html.png"
import css from "/images/icono-css.png"
import javascript from "/images/icono-javascript.png" 
import pg from "/pablogutierrez.jpg"
export function Cv() {
  useEffect(() => {
    document.title = 'Pablo Gutierrez - Sobre mí'
  }, [])
 
  return (
    <section className="section section_cv">
      <h2 className="title_section left">Sobre mí 🧑🏻</h2>
      <div className="section_container contenedor_cv">
        <div className="contenedor1">
          <article>
            <p>
              Disfruto desarrollar interfaces de usuario usando las tecnologías adecuadas, así como también la optimización y el SEO para el buen posicionamiento y la carga del sitio web. <br />
            </p>
            <p>Mi camino en el desarrollo web comenzó cuando, de adolescente, me encontré maravillado con la posibilidad de dar vida a ideas y conceptos a través del código. He trabajado en una variedad de proyectos, desde sitios web informativos hasta tiendas en linea, siempre desafiándome a mí mismo y creciendo en el proceso.</p>
            <br />
          </article>
        </div>
        <div className="hr_section"></div>
        <div className="contenedor2">
          <h2 className="title_section right">Yo soy</h2>
          <div className="contenedor_acerca">
            <article className="image">
              <img
                src=""
                alt="Foto de Pablo Gutierrez"
              />
            </article>
            <article className="text">
              <ul>
                <li>Pablo Yucra Gutierrez</li>
                <li>Nací en Cusco, Perú. 22 de Junio de 2003</li>
                <li>Vivo en Cusco, Perú</li>
                <li>
                  <a href="https://drive.google.com/file/d/1CHDwewTXt35OgiRsMsZYaBzl1RsAsnwo/view?usp=sharing" target="_blank">Cv</a>
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
              <img
                src={react}
                alt="React js"
              />
              React js
            </button>
            <button>
              <img
                src={reactrouter}
                alt="React Router"
              />
              React Router
            </button>
            <button>
              <img
                src={laravel}
                alt="Laravel "
              />
              Laravel (Básico)
            </button>
            <button>
              <img
                src={bootstrap}
                alt="Bootstrap"
              />
              Bootstrap
            </button>
            <button>
              <img
                src={git}
                alt="Git"
              />
              Git
            </button>

            <button>
              <img
                src={aws}
                alt="AWS"
              />
              AWS (Básico)
            </button>
            <button>
              <img
                src={sass}
                alt="Sass"
              />
              Sass
            </button>
            <button>
              <img
                src={html}
                alt="HTML"
              />
              HTML
            </button>

            <button>
              <img
                src={css}
                alt="CSS"
              />
              CSS
            </button>
            <button>
              <img
                src={javascript}
                alt="JavaScript"
              />
              JavaScript
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
