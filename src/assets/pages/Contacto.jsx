import React, { useEffect } from "react";
import { Formulario } from "../../Formulario";

export function Contacto() {
  useEffect(() => {
    document.title = 'Pablo Gutierrez - Contacto';
  }, []);
  return (
    <section className="section section_contacto">
      <h2 className="title_section left">Contáctame</h2>
      <div className="section_container contenedor_contacto">
        <div className="contenedor1">
          <article>
            <p>Puedes ecribirme a 📨 <a href="mailto:pabloyucragutierrez@gmail.com">pabloyucragutierrez@gmail.com</a> </p>
            <p>También puedes mandarme un mensaje directo por <a href="https://www.linkedin.com/in/pabloyucragutierrez/" target="_blank" rel="noopener noreferrer" title='Pablo Gutierrez en LinkedIn'>LinkedIn</a>. ¡Gracias!</p>
          </article>
          <form action="" className="form" onSubmit={(e)=>Formulario(e)}>
            <div>
              <label htmlFor="nombres_y_apellidos">Nombres <span className="error error_nombre">(Ingresa tu nombre)</span></label>
              <input type="text" name='nombres' id="nombres_y_apellidos" placeholder="Ingresa tu nombre..." autoComplete="on"/>
            </div>
            <div>
              <label htmlFor="nombres_y_apellidos">Correo electrónico <span className="error error_email">(Ingresa tu correo)</span></label>
              <input type="email" name='email' id="nombres_y_apellidos" placeholder="Ingresa tu correo" autoComplete="on"/>
            </div>
            <div>
              <label htmlFor="nombres_y_apellidos">Mensaje </label>
              <textarea name="mensaje" id="" autoComplete="on" placeholder="Mensaje (opcional)"></textarea>
            </div>
            <div style={{gap:".5rem"}}>
            <input type="submit" value="Enviar formulario" />
            <span className="loader"></span>
            <p className="text-exito"></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
