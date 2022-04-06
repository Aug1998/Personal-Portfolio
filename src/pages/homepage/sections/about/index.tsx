import Button from "pages/homepage/styled-components/Button"
import Container from "pages/homepage/styled-components/Container"
import Title from "pages/homepage/styled-components/Title"
import theme from "resources/theme"
import styled from "styled-components"
import WordSlider from "./components/wordSlider"

export default function About() {
   return (
      <>
         <WordSlider/>
         <Container verticalPadding="80px" direction="column">
            <AboutContainer>
                  <AboutTitleContainer>
                     <Title>Sobre mí</Title>
                  </AboutTitleContainer>
                  <AboutText>
                     <p>Hola! Mi nombre es Augusto Pruvost. Comencé mi carrera en la programación en el año 2018, con un curso de Programación Orientada a Objetos en Java dictado en la Universidad Tecnológica Nacional de Rosario.</p>
                     <p>En 2019 comencé a estudiar las tecnologías de la web, después de conseguir mi primer trabajo como soporte técnico en un e-commerce.</p>
                     <p>Desde 2020, durante 2 años, me dediqué exclusivamente al desarrollo web de manera free-lance.</p>
                     <p>Actualmente trabajo full-time en una empresa estadounidense como React Developer</p>
                     <ButtonsContainer>
                        <Button type="primary">Mis servicios</Button>
                        <Button type="transparent">LinkedIn</Button>
                     </ButtonsContainer>
                  </AboutText>
            </AboutContainer>
         </Container>
         <DummyWordSlider/>
      </>
   )
}

const DummyWordSlider = styled.div`
   width: 100%;
   background-color: red;
   height: 100px;
`

const AboutContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 9fr 10fr;
`

const AboutTitleContainer = styled.div`
   width: 100%;
   background-image: url(../img/about_bg.png);
   background-repeat: no-repeat;
   background-position-y: 20%;
   background-position-x: 30%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 40px 0 0 50px;
`

const AboutText = styled.p`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   p{
      color: ${theme.text};
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 20px;
   }
`

const ButtonsContainer = styled.div`
   display: flex;
   align-items: flex-end;
`