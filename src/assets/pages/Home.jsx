import React from 'react'
import pg from "/foto-home.png"
export function Home() {
  return (
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
  )
}
