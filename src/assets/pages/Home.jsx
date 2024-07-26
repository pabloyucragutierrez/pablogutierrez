import React, { useEffect } from 'react'
import pg from "/foto-home.png"
export function Home() {
  useEffect(() => {
    document.title = "Pablo Gutierrez";
  }, []);
  return (
    <>
      <Helmet>
        <title>Pablo Gutierrez</title>
        <meta name="description" content="Desarrollador frontend apasionado y creativo con experiencia en Tecnologías de parte del frontend. Comprometido con la creación de interfaces intuitivas, atractivas y centradas en el usuario." />
        <meta name="keywords" content="Pablo Gutierrez, Desarrollador frontend, Desarrollador web, Desarrollo Frontend, React, Desarrollo Web, Angular, Astro, Laravel, Código" />
        <link rel="canonical" href="https://pablogutierrez.xyz" />
        <meta property="og:title" content="Pablo Gutierrez" />
        <meta property="og:description" content="Desarrollador frontend apasionado y creativo con experiencia en Tecnologías de parte del frontend. Comprometido con la creación de interfaces intuitivas, atractivas y centradas en el usuario." />
        <meta property="og:url" content="https://pablogutierrez.xyz" />
        <meta property="og:image" content={pg}/>
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet> 
    <section className='section_home'>
        <div className='contenedor_home'>
            <article className='text'>
                <h2>Pablo Gutierrez, <br /> creativo y dedicado... <br /> <span>Desarrollador web</span> </h2>
            </article>
            <article className='image'>
                <img src={pg} alt='foto de Pablo Gutierrez'/>
            </article>
        </div>
    </section>
    </>
  )
}
