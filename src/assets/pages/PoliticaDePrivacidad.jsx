import React, { useEffect } from "react";
export function PoliticaDePrivacidad() {
  useEffect(() => {
    document.title = "Pablo Gutierrez - Política de Privacidad";
  }, []);
  return (
    <section className="section section_pdp">
      <h2 className="title_section right">Política de Privacidad</h2>
      <div className="section_container contenedor_pdp">
        <div className="contenedor1">
          <h2>Información de usuarios</h2>
          <p>
            <strong>Datos personales:</strong> Cuando los visitantes se ponen en
            contacto a través de nuestro formulario, recopilamos su nombre,
            dirección de correo electrónico y el mensaje que envían.
          </p>

          <h2>Uso de la Información</h2>
          <p>
            Para mejorar nuestro sitio web y ofrecer una mejor experiencia de
            usuario.
          </p>
          <p>
            Para responder a sus consultas y proporcionar soporte al cliente.
          </p>

          <h2>Google AdSense</h2>
          <p>
            Utilizamos Google AdSense para mostrar anuncios en nuestro sitio
            web. Google AdSense puede utilizar cookies para personalizar los
            anuncios que ve de Google.
          </p>

          <h2>
            Cumplimiento con el Reglamento General de Protección de Datos (RGPD)
          </h2>
          <p>
            En conformidad con el Reglamento General de Protección de Datos
            (RGPD) de la Unión Europea, respetamos sus derechos de privacidad y
            nos comprometemos a proteger su información personal. La información
            que recopilamos se utiliza únicamente para los fines de comunicación
            y no se comparte con terceros.
          </p>

          <h2>Seguridad de la Información</h2>
          <p>
            Nos comprometemos a proteger la información personal que nos
            proporciona. Sin embargo, tenga en cuenta que ningún método de
            transmisión por Internet o método de almacenamiento es 100% seguro.
          </p>
        </div>
      </div>
    </section>
  );
}
