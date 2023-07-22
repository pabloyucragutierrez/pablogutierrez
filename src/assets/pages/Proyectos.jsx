import React, { useEffect } from "react";
export function Proyectos() {
  useEffect(() => {
    document.title = 'Pablo Gutierrez - Proyectos'
  }, [])
  
  return (
    <section className="section section_proyectos">
      <h2 className="title_section left">Mis proyectos</h2>
      <div className="section_container contenedor_proyectos">
        <div className="contenedor1">
          <a href="https://www.rabimport.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/rabImport/header/logo-rab.jpg" alt="RAB Import" />
              <div className="text">
                <p><b>RAB Import</b> (2023)</p>
                <p>Rab Import es una empresa peruana con más de 40 años de experiencia en la importación, distribución y comercialización de máquinas de coser industriales de última tecnología para la industria textil, confecciones y calzado del Perú.</p>
              </div>
            </article>
          </a>
          <a href="https://qeswatravel.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://assets-apapachame.s3.amazonaws.com/qeswa-travel/footer/logo-q.png" alt="Qeswa travel" />
              <div className="text">
                <p><b>Qeswa travel</b> (2022)</p>
                <p>Es una agencia de viajes con una amplia experiencia en el ámbito del turismo. Tienen un grupo profesional cualificado con servicios de alta calidad y se mantiene para que su estancia en nuestro país sea su completa satisfacción y felicidad.</p>
              </div>
            </article>
          </a>
          <a href="https://exporab.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/expoRab/logo.jpg" alt="Expo Rab" />
              <div className="text">
                <p><b>Expo Rab</b> (2022)</p>
                <p>Expo Rab es una página de exhibición y demostración, los últimos avances tecnológicos en la industrial textil - confecciones y calzado en el Perú.</p>
              </div>
            </article>
          </a>
          <a href="https://exporab.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/kaizen/logos/logokaizen.jpg" alt="Kaizen" />
              <div className="text">
                <p><b>Kaizen</b> (2023)</p>
                <p>Kaizen se especializa en máquinas especiales, proporcionando soluciones adaptadas a las necesidades específicas de cada industria. En Kaizen, marcando la diferencia, elevando el estándar y construyendo juntos un futuro exitoso.</p>
              </div>
            </article>
          </a>
          <a href="https://rabpartes.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/repuestera/logo/logo.jpg" alt="La repuestera" />
              <div className="text">
                <p><b>La repuestera</b> (2023)</p>
                <p>Es una tienda líder en la importación y venta de repuestos y accesorios para la industria textil, cuentan con más de 30 años de experiencia en el rubro comercializando productos de alta calidad, originales y con garantía.</p>
              </div>
            </article>
          </a>
          <a href="https://rikea.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://assets-apapachame.s3.amazonaws.com/rab-import/Rikea/header/logo.jpg" alt="Rikea" />
              <div className="text">
                <p><b>Rikea</b> (2023)</p>
                <p>RIKEA lleva más de 15 años ofreciendo soluciones eficientes para la industria de los sectores de la confección textil, bordados y confección de cuero, calzado y afines.</p>
              </div>
            </article>
          </a>
          <a href="https://tecnibordados.com/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/tecniRapido/logo/logo-tecniRapido.jpg" alt="TecniRapido y TecniBordado" />
              <div className="text">
                <p><b>TecniRapido y TecniBordado</b> (2023)</p>
                <p>TecniRapido y TecniBordado son 2 páginas en 1. Brindan soporte técnico para máquinas industriales de costura y calzado.</p>
              </div>
            </article>
          </a>
          <a href="https://bianchi.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://assets-apapachame.s3.amazonaws.com/rab-import/bianchi/header/logo.jpg" alt="Bianchi" />
              <div className="text">
                <p><b>Bianchi</b> (2023)</p>
                <p>Bianchi es una empresa peruana importadora y comercializadora de productos de la industria textil y máquinas de coser con 37 años de experiencia impulsando el crecimiento textil del Perú, con equipos y maquinaria con tecnología de punta.</p>
              </div>
            </article>
          </a>
          <a href="https://www.sudamericanaperu.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/sudamericana-coser/logos/1.jpg" alt="Sudamericana" />
              <div className="text">
                <p><b>Sudamericana</b> (2023)</p>
                <p>Con 17 años en el mercado, Sudamericana ofrece novedades y soluciones para propósitos especiales en la industria</p>
              </div>
            </article>
          </a>
          <a href="https://calzado.sudamericanaperu.com.pe/" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="https://rab-import-assets.s3.amazonaws.com/sudamericana-cueros/logos/1.jpg" alt="Sudamericana maquinaria de cuero y calzado" />
              <div className="text">
                <p><b>Sudamericana maquinaria de cuero y calzado</b> (2023)</p>
                <p>Con cerca de 8 años en el mercado, Sudamericana Cuero y Calzado ofrece novedades y soluciones para propósitos especiales en la industria de maquinaria de cuero y calzado.</p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
}
