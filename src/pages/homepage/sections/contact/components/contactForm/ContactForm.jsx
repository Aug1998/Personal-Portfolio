import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import theme from "resources/theme";

export default function ContactForm() {

   const formSubmitRef = useRef(null)

  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
  });

  const handleChange = (event, fieldName) => {
    setUserInput({ [fieldName]: event.target.value });
  };

  const handleSubmit = () => {
    if (validateEmail()) {
      formSubmitRef.current.click();
    } else {
      console.log("Errors in form");
      return;
    }
  };

  const validateEmail = () => {
    // Nombre
    if (userInput.name.length < 3) {
      console.log(userInput.nombre);
      console.log("Name error");
      return false;
    }

    // Apellido
    if (userInput.surname.length < 3) {
      console.log("Surname error");
      return false;
    }

    // Mail
    if (userInput.email.length < 10) {
      console.log("Mail error");
      return false;
    }

    // Numero
    var numbers = /^[0-9]+$/;
    if (!userInput.number.match(numbers) || userInput.numero.length < 8) {
      console.log("Number error");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_gmail",
        "portfolio_template",
        e.target,
        "user_xgR5BpfEuZVN6ICPPY2kP"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload(false);
          alert("Gracias por contactarte");
        },
        (error) => {
          console.log(error.text);
          alert("No se pudo enviar el mensaje");
        }
      );
  };

  return (
    <Form id="contact-form" autoComplete="off" onSubmit={sendEmail}>
      <Field gridArea={"nombre"}>
        <FormLabel htmlFor="form_name">Nombre</FormLabel>
        <FormInput
          id="form_name"
          type="text"
          name="form_name"
          pattern="[A-Za-z0-9]+"
          maxLength="20"
          value={userInput.name}
          onChange={(event) => handleChange(event, "name")}
        />
      </Field>
      <Field gridArea={"apellido"}>
        <FormLabel htmlFor="form_surname">Apellido</FormLabel>
        <FormInput
          id="form_surname"
          type="text"
          name="form_surname"
          pattern="[A-Za-z0-9]+"
          maxLength="20"
          value={userInput.surname}
          onChange={(event) => handleChange(event, "surname")}
        />
      </Field>
      <Field gridArea={"email"}>
        <FormLabel htmlFor="form_email">Email</FormLabel>
        <FormInput
          id="form_email"
          type="email"
          name="form_email"
          value={userInput.email}
          onChange={(event) => handleChange(event, "email")}
        />
      </Field>
      <Field gridArea={"numero"}>
        <FormLabel htmlFor="form_number">Teléfono</FormLabel>
        <FormInput
          id="form_number"
          type="text"
          name="form_number"
          pattern="[0-9]+"
          value={userInput.number}
          onChange={(event) => handleChange(event, "number")}
        />
      </Field>
      <Field className="form_mensaje" gridArea={"mensaje"}>
        <FormLabel htmlFor="message">Mensaje</FormLabel>
        <FormTextarea name="message" maxLength="800"></FormTextarea>
      </Field>
      <CaptchaContainer
        gridArea="captcha"
        className="g-recaptcha"
        data-sitekey="6Lfno2kaAAAAAA0bQ8baSxANX6Fkt7pDT0bOI9RG"
      ></CaptchaContainer>
      <input
         ref={formSubmitRef} 
        id="form_submit"
        className="form_submit"
        type="submit"
        name="submit"
        value="Enviar"
      />
      <DummySubmitButton gridArea={"enviar"} onClick={handleSubmit} >Enviar</DummySubmitButton>
    </Form>
  );
}

const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: ${props => props.gridArea};
`;

const Form = styled.form`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 20px;
  grid-template-areas:
    " nombre apellido mensaje mensaje"
    " email numero mensaje mensaje"
    " . . captcha enviar";
   & input[type="submit"]{
      display: none;
   }
   @media screen and (max-width: 768px){
      padding: 0 8%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 2fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        grid-template-areas: 
            "nombre nombre apellido apellido"
            "email email numero numero"
            "mensaje mensaje mensaje mensaje"
            "captcha captcha captcha captcha"
            ". enviar enviar ."
        ;
   }
`;

const FormInput = styled.input`
  width: 100%;
  color: ${theme.primary};
  font-size: 0.9rem;
  padding: 5px 10px;
  border: solid 1px ${theme.blackTranslucent};
  border-left: solid 4px ${theme.blackTranslucent};
  background-color: white;
  height: 35px;
  &:focus {
    border-color: ${theme.primary};
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  color: ${theme.primary};
  font-size: 0.9rem;
  padding: 5px 10px;
  border: solid 1px ${theme.blackTranslucent};
  border-left: solid 4px ${theme.blackTranslucent};
  background-color: white;
  height: 35px;
  &:focus {
    border-color: ${theme.primary};
    outline: none;
  }
  resize: none;
  cursor: text;
  height: 134px;
`;

const FormLabel = styled.label`
   width: max-content;
   font-weight: 500;
   font-size: 0.9rem;
   color: ${theme.theme};
   margin-bottom: 8px;
   position: relative;
`;

const CaptchaContainer = styled.div`
   grid-area: ${props => props.gridArea};
   div{
      overflow: hidden;
   }
`;

const DummySubmitButton = styled.button`
   grid-area: ${props => props.gridArea};
   font-family: "Poppins";
   width: 100%;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: 0.2s;
   z-index: 1;
   font-size: 1.2rem;
   align-items: center;
   outline: none;
   cursor: pointer;
   background-color: ${theme.primary};
   border: solid 2px ${theme.primary};
   color: ${theme.white};
   &:hover{
      background-color: transparent;
      color: ${theme.primary};
   }
`;