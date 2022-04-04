import Container from "pages/homepage/styled-components/Container"
import theme from "resources/theme"
import Form from "./components/contactForm/ContactForm"

export default function Contact() {
   return (
      <Container backgroundColor={theme.hero_bg}>
         <div className="contact_section">
            <h2 className="title centered">Contacto</h2>
            <p>
               ¿Tu <span>emprendimiento</span>, <span>empresa</span> u <span>organización</span> todavía no cuenta con presencia digital? 
               ¿Tenés un <span>producto</span> y querés <span>vender</span> o potenciar tus ventas por el canal digital? 
               Sea lo que sea, no dudes en <span>dejar tu consulta</span>:
            </p>

            <Form/>
         </div>  
      </Container>
   )
}
