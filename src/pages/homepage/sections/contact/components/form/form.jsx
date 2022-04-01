import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './form.scss';
import styled from 'styled-components';
import $ from 'jquery';

export default function Form() {
   const [userInput, setUserInput] = useState({
      name : "",
      surname : "",
      email : "",
      number : "",
  })

   useEffect(() => {
      $(".dummy_submit").on("click", (e) => {
         e.preventDefault();
         handleSubmit();
      })
   }, [])
  

   const handleChange = (event, fieldName) => {
   setUserInput({ [fieldName] : event.target.value });
   }

   const handleSubmit = () => {
      if(validateEmail()){
         console.log("all good");
         $("#form_submit").trigger("click");
      } else {
         console.log("errors in form");
         return;
      }
   }

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
      if(!userInput.number.match(numbers) || userInput.numero.length < 8){
          console.log("Number error");
          return false;
      }

      return true;
  }

  const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('portfolio_gmail', 'portfolio_template', e.target, 'user_xgR5BpfEuZVN6ICPPY2kP')
   .then((result) => {
       console.log(result.text);
       window.location.reload(false);
       alert("Gracias por contactarte");
   }, (error) => {
       console.log(error.text);
       alert("No se pudo enviar el mensaje");
   });
}

  return (
   <form id="contact-form" autoComplete="off" onSubmit={sendEmail}>
   {/* Nombre */}
   <Field className="form_nombre" >
       <label htmlFor="form_name">Nombre</label>
       <input 
       id="form_name" 
       type="text" 
       name="form_name" 
       pattern="[A-Za-z0-9]+" 
       maxLength="20"
       value={userInput.name}
       onChange={(event) => handleChange(event, "name")}
       />
   </Field>

   {/* Apellido */}
   <Field className="form_apellido" >
       <label htmlFor="form_surname">Apellido</label>
       <input 
       id="form_surname" 
       type="text" 
       name="form_surname" 
       pattern="[A-Za-z0-9]+" 
       maxLength="20"
       value={userInput.surname}
       onChange={(event) => handleChange(event, "surname")}
       />
   </Field>

   {/* Email */}
   <Field className="form_email">
      <label htmlFor="form_email">Email</label>
         <input 
         id="form_email" 
         type="email" 
         name="form_email"
         value={userInput.email}
         onChange={(event) => handleChange(event, "email")}
       />
   </Field>
 

   {/* Numero */}
   <Field className="form_numero">
       <label htmlFor="form_number">Teléfono</label>
       <input 
       id="form_number" 
       type="text" 
       name="form_number" 
       pattern="[0-9]+"
       value={userInput.number}
       onChange={(event) => handleChange(event, "number")}
       />
   </Field>

   {/* Mensaje */}
   <Field className="form_mensaje">
       <label htmlFor="message">Mensaje</label>
       <textarea name="message" maxLength="800"></textarea>
   </Field>

   {/* Captcha */}
   <div className="g-recaptcha" data-sitekey="6Lfno2kaAAAAAA0bQ8baSxANX6Fkt7pDT0bOI9RG"></div>

   {/* Form Submit */}
   <input id="form_submit" className="form_submit" type="submit" name="submit" value="Enviar"/>

   {/* Dummy Submit */}
   <a className="dummy_submit" href="#">Enviar</a>
</form>
  )
}

const Field = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`