import React from 'react'
import TechSlider from './techSlider/techSlider'

export default function About() {
  return (
      <div className="about">
        <a id="anchor_about_btn" href="#"></a>
        <div className="about_top">
            <div className="about_title">
            <h2 className="title">Sobre mí</h2>
            </div>
            <div className="about_text">
            <p>Hola! Me llamo Augusto Pruvost y soy programador desde 2018. Empecé en un curso de POO(Programación Orientada a Objetos) en Java dictado en la UTN de Rosario. </p>
            <p>En 2019 empecé a estudiar las tecnologías de la web, después de conseguir mi primer trabajo como soporte técnico en un e-commerce.</p>
            <p>Actualmente me dedico exclusivamente al desarrollo web de manera free-lance.</p>
            <p>Me gusta desarrollar páginas estéticas y limpias. Me esmero por siempre dejar conformes a mis clientes, utilizando mi amplio abanico de herramientas.</p>
            <div className="pair_of_buttons">
                <button className="button btn_primary services_btn">Mis Servicios</button>
                <button className="button btn_secondary linkedin_btn">LinkedIn</button>
            </div>
            </div>
        </div>

        <div className="techs">
            <TechSlider/>
        </div>
    </div>
  )
}
