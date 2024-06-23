import React from "react";
import pg from "/foto-home.png";
export function Home() {
  return (
    <section className="section_home">
      <div className="contenedor_home">
        <article className="text">
          <h2>
            Pablo Gutierrez, <br /> creativo y dedicado... <br />{" "}
            <span>Desarrollador web</span>{" "}
          </h2>
        </article>
        <article className="image">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4956377527110765"
            crossorigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4956377527110765"
            data-ad-slot="8673384015"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          <img src={pg} alt="foto de Pablo Gutierrez" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4956377527110765"
            crossorigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4956377527110765"
            data-ad-slot="8673384015"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </article>
      </div>
    </section>
  );
}
