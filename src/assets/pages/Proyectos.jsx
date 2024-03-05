import React, { useEffect } from "react";
export function Proyectos() {
  useEffect(() => {
    document.title = 'Pablo Gutierrez - Proyectos'
  }, [])
  
  return (
    <section className="section section_proyectos">
      <h2 className="title_section right">Mis proyectos</h2>
      <div className="section_container contenedor_proyectos">
        <div className="contenedor1">
          <a href="https://www.rabimport.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/rabImport/header/logo-rab.jpg" alt="RAB Import" />
              <div className="text">
                <p><b>RAB Import</b> (2023)</p>
                <p>Desarrollé sliders, secciones, formularios, etc. Mejoré el SEO, optimicé el código</p>
              </div>
            </article>
          </a>
          <a href="https://qeswatravel.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://assets-apapachame.s3.amazonaws.com/qeswa-travel/footer/logo-q.png" alt="Qeswa travel" />
              <div className="text">
                <p><b>Qeswa travel</b> (2022)</p>
                <p>Desarrollador frontend en equipo web. Usé Laravel para conectar la interfaz con el backend. usando (HTML, CSS, JS). Colaboré con desarrolladores backend. Optimicé rendimiento y experiencia del usuario.</p>
              </div>
            </article>
          </a>
          <a href="https://exporab.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/expoRab/logo.jpg" alt="Expo Rab" />
              <div className="text">
                <p><b>Expo Rab</b> (2022)</p>
                <p>Experiencia como desarrollador frontend en equipo web. usando el framework Laravel para enlazar frontend y backend. Codificación con HTML, Bootstrap, CSS, JS. Colaboración con desarrolladores y backend.</p>
              </div>
            </article>
          </a>
          <a href="https://kaizen.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/kaizen/logos/logokaizen.jpg" alt="Kaizen" />
              <div className="text">
                <p><b>Kaizen</b> (2023)</p>
                <p>Trabajé como desarrollador frontend en equipo web. Conexión frontend y backend mediante Laravel. Utilicé HTML, CSS, JS para la interfaz. Colaboración con diseñadores y backend.</p>
              </div>
            </article>
          </a>
          <a href="https://rabpartes.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/repuestera/logo/logo.jpg" alt="La repuestera" />
              <div className="text">
                <p><b>La repuestera</b> (2023)</p>
                <p>Desarrollé la página completa usando Laravel como backend. </p>
              </div>
            </article>
          </a>
          <a href="https://rikea.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://assets-apapachame.s3.amazonaws.com/rab-import/Rikea/header/logo.jpg" alt="Rikea" />
              <div className="text">
                <p><b>Rikea</b> (2023)</p>
                <p>Desarrollador frontend en equipo web. Utilicé Laravel para integrar frontend y backend. Codificación con HTML, CSS, JS. Colaboración con diseñadores y backend. Enfoque en optimización del rendimiento y experiencia del usuario.</p>
              </div>
            </article>
          </a>
          <a href="https://tecnibordados.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/tecniRapido/logo/logo-tecniRapido.jpg" alt="TecniRapido y TecniBordado" />
              <div className="text">
                <p><b>TecniRapido y TecniBordado</b> (2023)</p>
                <p>TecniRapido y TecniBordado son 2 páginas en 1. Usé HTML, CSS, Bootstrap y Javascript para poder realizar el diseño y la funcionalidad de la página</p>
              </div>
            </article>
          </a>
          <a href="https://bianchi.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://assets-apapachame.s3.amazonaws.com/rab-import/bianchi/header/logo.jpg" alt="Bianchi" />
              <div className="text">
                <p><b>Bianchi</b> (2023)</p>
                <p>Desarrollo frontend (HTML, CSS, JavaScript, Laravel, Responsive)</p>
              </div>
            </article>
          </a>
          <a href="https://www.sudamericanaperu.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/sudamericana-coser/logos/1.jpg" alt="Sudamericana" />
              <div className="text">
                <p><b>Sudamericana</b> (2023)</p>
                <p>Desarrollo de la web completa usando HTML, CSS, Javascript y Laravel para el backend.</p>
              </div>
            </article>
          </a>
          <a href="https://calzado.sudamericanaperu.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/sudamericana-cueros/logos/1.jpg" alt="Sudamericana maquinaria de cuero y calzado" />
              <div className="text">
                <p><b>Sudamericana maquinaria de cuero y calzado</b> (2023)</p>
                <p>Desarrollo de la web completa usando HTML, CSS, Javascript y Laravel para el backend.</p>
              </div>
            </article>
          <a href="https://tecfordata.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://tecfordata.com/assets/logo.png" alt="Tecfordata" />
              <div className="text">
                <p><b>Tecfordata</b> (2023)</p>
                <p>Desarrollo de la web usando Angular. </p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
}
