import theme from "resources/theme";
import styled from "styled-components";
import Button from "pages/homepage/styled-components/Button";
import Container from "pages/homepage/styled-components/Container";
import WexdevLogo from "pages/homepage/components/WexdevLogo";

export default function Hero() {
  return (
    <Container backgroundColor={theme.hero_bg}>
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
    </Container>
  )
}

const HeroContainer = styled.div`
   height: calc(100vh - 80px);
   width: 100%;
   background-color: ${theme.hero_bg};
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const WexdevLogoHero = styled(WexdevLogo)`
   height: 500px;
`

const HeroContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
   padding-top: 20px;
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

const ButtonsContainer = styled.div`
   display: flex;
   align-items: flex-end;
`