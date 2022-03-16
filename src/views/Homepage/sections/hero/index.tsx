import styled from "styled-components";
import Button from "views/Homepage/components/Button";
import WexdevLogo from "../../components/WexdevLogo";

export default function Hero() {
  return (
    <div className="hero">
    <div className="hero_title">
      <h2>Augusto P.</h2>
      <p>Desarrollador Web</p>
      <div className="pair_of_buttons">
         <Button type="primary">Contacto</Button>
         <Button type="transparent">Servicios</Button>
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