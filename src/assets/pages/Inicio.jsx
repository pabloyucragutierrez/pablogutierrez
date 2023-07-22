import React, { useEffect } from "react";
export function Inicio() {
  useEffect(() => {
    document.title = 'Pablo Gutierrez - Inicio'
  }, [])
  
  return (
    <section className="section section_inicio">
      <h2 className="title_section right">Hola 👋🏻</h2>
      <div className="section_container contenedor_inicio">
        <div className="contenedor1">
          <article>
            <p>Bienvenido a mi página web, soy Desarrollador Frontend.</p>
            <p>Mi objetivo es crear soluciones web elegantes y funcionales que hagan que los usuarios se enamoren de la experiencia en línea. Con una base sólida en HTML, CSS y JavaScript, siempre estoy buscando aprender y dominar las últimas tendencias y tecnologías para ofrecer resultados excepcionales.</p>
            <p>En la sección de Proyectos, podrás encontrar algunos de mis trabajos más recientes y notables. Desde landing page hasta tiendas online.</p>
          </article>
          <article>
            <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" alt="Desarrollo frontend" />
          </article>
        </div>
      </div>
    </section>
  );
}
