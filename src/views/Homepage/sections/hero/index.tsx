import theme from "resources/theme";
import styled from "styled-components";
import Button from "views/Homepage/components/Button";
import WexdevLogo from "../../components/WexdevLogo";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContentContainer>
         <h2>Augusto P.</h2>
         <p>Desarrollador Web</p>
         <ButtonsContainer>
            <Button type="primary">Contacto</Button>
            <Button type="transparent">Servicios</Button>
         </ButtonsContainer>
      </HeroContentContainer>
      <WexdevLogoHero />
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
   height: 100vh;
   width: 100vw;
   background-color: ${theme.hero_bg};
   display: flex;
   justify-content: space-between;
   padding: 70px 10% 50px 12%;
`

const WexdevLogoHero = styled(WexdevLogo)`
   height: 70vh;
   position: absolute;
`

const ButtonsContainer = styled.div`
   display: flex;
   align-items: flex-end;
`

const HeroContentContainer = styled.div`
       display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding-top: 70px;
    h2{
        font-size: 4.2rem;
        color: $title;
    }
    p{
        font-size: 1.5rem;
        color: $subtitle;
        margin-top: 5px;
        margin-bottom: 70px;
    }
`