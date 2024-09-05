import React from "react";
import { Formulario } from "../../Formulario";
import { Helmet } from "react-helmet";
import pg from "/foto-home.png"

export function Contacto() {
  return (
    <>
        <Helmet>
       <title>Pablo Gutierrez - Contacto</title>
        <meta name="description" content="Puedes ponerte en contacto conmigo enviando un correo a pabloyucragutierrez@gmail.com o rellenando el formulario de esta página para ayudarte con lo que necesites." />
        <meta name="keywords" content="Contacto, Pablo Gutierrez, Desarrollador frontend, Desarrollador web, Desarrollo Frontend, React, Desarrollo Web, Angular, Astro, Laravel, Código" />
        <link rel="canonical" href="https://pablogutierrez.xyz/contacto" />
        <meta property="og:title" content="Pablo Gutierrez - Contacto" />
        <meta property="og:description" content="Puedes ponerte en contacto conmigo enviando un correo a pabloyucragutierrez@gmail.com o rellenando el formulario de esta página para ayudarte con lo que necesites." />
        <meta property="og:url" content="https://pablogutierrez.xyz/contacto" />
        <meta property="og:image" content={pg}/>
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <section className="section section_contacto">
      <h2 className="title_section left">Contáctame</h2>
      <div className="section_container contenedor_contacto">
        <div className="contenedor1">
          <article>
          <p>📧 ¿Tienes algo que decirme o una propuesta? Mándame un correo a <a href="mailto:pabloyucragutierrez@gmail.com">pabloyucragutierrez@gmail.com</a> o usa el formulario de contacto en esta página. ¡No dudes en escribirme!</p>

          <p>También puedes encontrarme en <a href="https://www.linkedin.com/in/pabloyucragutierrez/" target="_blank" rel="noopener noreferrer" title="Pablo Gutiérrez en LinkedIn">LinkedIn</a>.</p>

          </article>
          <form action="" className="form" onSubmit={(e)=>Formulario(e)}>
            <div>
              <label htmlFor="nombres">Nombres <span className="error error_nombre">(Ingresa tu nombre)</span></label>
              <input type="text" name='nombres' id="nombres" placeholder="Ingresa tu nombre..." autoComplete="on"/>
            </div>
            <div>
              <label htmlFor="email">Correo electrónico <span className="error error_email">(Ingresa tu correo)</span></label>
              <input type="email" name='email' id="email" placeholder="Ingresa tu correo" autoComplete="on"/>
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje <span className="error error_mensaje">(Ingresa tu mensaje)</span></label>
              <textarea name="mensaje" id="mensaje" autoComplete="on" placeholder="Mensaje"></textarea>
            </div>
            <div style={{gap:".5rem"}}>
            <input className="btnSubmit" type="submit" value="Enviar formulario" />
            <span className="loader"></span>
            <p className="text-exito"></p>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
