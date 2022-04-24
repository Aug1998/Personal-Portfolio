import theme from "resources/theme";
import styled from "styled-components";
import Button from "pages/homepage/styled-components/Button";
import Container from "pages/homepage/styled-components/Container";
import WexdevLogo from "pages/homepage/components/WexdevLogo";
import GithubIcon from "pages/homepage/components/githubIcon";
import LinkedinIcon from "pages/homepage/components/linkedinIcon";

export default function Hero() {
  return (
    <Container backgroundColor={theme.hero_bg}>
      <HeroContainer>
         <HeroContentContainer>
            <h2>Augusto P.</h2>
            <p>Desarrollador Web</p>
            <SocialIconsContainer>
               <GithubIcon/>
               <LinkedinIcon/>
            </SocialIconsContainer>
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
   height: 100vh;
   width: 100%;
   background-color: ${theme.hero_bg};
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-right: 60px;
`

const WexdevLogoHero = styled(WexdevLogo)`
   height: 400px;
`

const HeroContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
   padding-top: 20px;
   h2{
      font-size: 4.2rem;
      color: ${theme.black};
   }
   p{
      font-size: 1.5rem;
      color: ${theme.black};
      margin-top: 5px;
      margin-bottom: 20px;
   }
`

const ButtonsContainer = styled.div`
   display: flex;
   align-items: flex-end;
   margin-bottom: 40px;
`

const SocialIconsContainer = styled.div`
   display: flex;
   align-items: flex-end;
   & svg:first-child{
      margin-right: 10px;
   }
   margin-bottom: 50px;
`