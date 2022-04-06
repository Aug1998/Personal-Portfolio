import Button from "pages/homepage/styled-components/Button"
import Container from "pages/homepage/styled-components/Container"
import Title from "pages/homepage/styled-components/Title"
import theme from "resources/theme"
import styled from "styled-components"
import Carousel from "./Carousel/techsCarousel"

export default function About() {
   return (
      <Container verticalPadding="80px" direction="column">
         <div className="about_top">
            <div className="about_title">
               <Title>Sobre mí</Title>
            </div>
            <AboutText>
               <p>Hola! Me llamo Augusto Pruvost y soy programador desde 2018. Empecé en un curso de POO(Programación Orientada a Objetos) en Java dictado en la UTN de Rosario. </p>
               <p>En 2019 empecé a estudiar las tecnologías de la web, después de conseguir mi primer trabajo como soporte técnico en un e-commerce.</p>
               <p>Actualmente me dedico exclusivamente al desarrollo web de manera free-lance.</p>
               <p>Me gusta desarrollar páginas estéticas y limpias. Me esmero por siempre dejar conformes a mis clientes, utilizando mi amplio abanico de herramientas.</p>
               <div className="pair_of_buttons">
                  <Button type="primary">Mis servicios</Button>
                  <Button type="transparent">LinkedIn</Button>
               </div>
            </AboutText>
         </div>

         <Carousel/>
      </Container>
   )
}

const AboutText = styled.p`
   width: 56%;
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