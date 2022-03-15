import styled from "styled-components";
import WexdevLogo from "../../components/WexdevLogo";

export default function Hero() {
  return (
    <div className="hero">
    <div className="hero_title">
      <h2>Augusto P.</h2>
      <p>Desarrollador Web</p>
      <div className="pair_of_buttons">
        <button className="button btn_primary contact_btn">Contacto</button>
        <button className="button btn_secondary services_btn">Servicios</button>
      </div>
    </div>

      <WexdevLogoHero />
      
    </div>
  )
}

const WexdevLogoHero = styled(WexdevLogo)`
   height: 70vh;
   position: absolute;
`