import Container from "pages/homepage/styled-components/Container"
import Title from "pages/homepage/styled-components/Title"
import theme from "resources/theme"
import Form from "./components/contactForm/ContactForm"
import styled from "styled-components"

export default function Contact() {
   return (
      <Container verticalPadding="80px" direction="column" backgroundColor={theme.hero_bg}>
            <Title>Contacto</Title>
            <ContactText>
               ¿Tu <span>emprendimiento</span>, <span>empresa</span> u <span>organización</span> todavía no cuenta con presencia digital? 
               ¿Tenés un <span>producto</span> y querés <span>vender</span> o potenciar tus ventas por el canal digital? 
               Sea lo que sea, no dudes en <span>dejar tu consulta</span>:
            </ContactText>
            <Form/>
      </Container>
   )
}

const ContactText = styled.p`
   letter-spacing: 0.3px;
   font-weight: 400;
   font-size: 0.95rem;
   margin: 15px 0;
   line-height: 28px;
   max-width: 66vw;
   text-align: center;
   color: ${theme.text};
   span{
      text-decoration: underline;
   }
`