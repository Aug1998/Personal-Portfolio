import React from 'react'

export default function NavBarCompact() {
  return (
    <div>
        <div className="navbar nav_scroll">
        <a className="home_btn" href="#">
            <h1>A.</h1>
        </a>
        <div className="nav">
            <a className="home_btn active" href="#">Inicio</a>
            <a className="services_btn" href="#">Servicios</a>
            <a className="portfolio_btn" href="#">Portfolio</a>
            <a className="about_btn" href="#">Sobre mí</a>
            <a className="contact_btn" href="#">Contacto</a>
            <div className="menu_btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="100%" height="100%">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </div>
        </div>
        </div>
    </div>
  )
}
