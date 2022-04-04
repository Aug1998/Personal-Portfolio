import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./form.scss";
import styled from "styled-components";
import $ from "jquery";
import theme from "resources/theme";

export default function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    $(".dummy_submit").on("click", (e) => {
      e.preventDefault();
      handleSubmit();
    });
  }, []);

  const handleChange = (event, fieldName) => {
    setUserInput({ [fieldName]: event.target.value });
  };

  const handleSubmit = () => {
    if (validateEmail()) {
      console.log("all good");
      $("#form_submit").trigger("click");
    } else {
      console.log("errors in form");
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
      <Field className="for}m_nombre">
        <label htmlFor="form_name">Nombre</label>
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
      <Field className="form_apellido">
        <label htmlFor="form_surname">Apellido</label>
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
      <Field className="form_email">
        <label htmlFor="form_email">Email</label>
        <FormInput
          id="form_email"
          type="email"
          name="form_email"
          value={userInput.email}
          onChange={(event) => handleChange(event, "email")}
        />
      </Field>
      <Field className="form_numero">
        <label htmlFor="form_number">Teléfono</label>
        <FormInput
          id="form_number"
          type="text"
          name="form_number"
          pattern="[0-9]+"
          value={userInput.number}
          onChange={(event) => handleChange(event, "number")}
        />
      </Field>
      <Field className="form_mensaje">
        <label htmlFor="message">Mensaje</label>
        <FormTextarea name="message" maxLength="800"></FormTextarea>
      </Field>
      <div
        className="g-recaptcha"
        data-sitekey="6Lfno2kaAAAAAA0bQ8baSxANX6Fkt7pDT0bOI9RG"
      ></div>
      <input
        id="form_submit"
        className="form_submit"
        type="submit"
        name="submit"
        value="Enviar"
      />
      <button className="dummy_submit">Enviar</button>
    </Form>
  );
}

const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr auto 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 20px;
  grid-template-areas:
    " nombre apellido mensaje mensaje"
    " email numero mensaje mensaje"
    " . . captcha enviar";
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
