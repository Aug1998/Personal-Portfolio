import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './form.scss';
import $ from 'jquery';

class Form extends Component {
    state = {
        name : "",
        surname : "",
        email : "",
        number : "",
    }


    handleChange = (event, fieldName) => {
        this.setState({ [fieldName] : event.target.value });
    }

    handleSubmit = () => {
        if(this.validateEmail()){
            console.log("all good");
            $("#form_submit").trigger("click");
        } else {
            console.log("errors in form");
            return;
        }
    }

    validateEmail = () => {
        // Nombre
        if (this.state.name.length < 3) {
            console.log(this.state.nombre);
            console.log("Name error");
            return false;
        }

        // Apellido
        if (this.state.surname.length < 3) {
            console.log("Surname error");
            return false;
        }

        // Mail
        if (this.state.email.length < 10) {
            console.log("Mail error");
            return false;
        }

        // Numero
        var numbers = /^[0-9]+$/;
        if(!this.state.number.match(numbers) || this.state.numero.length < 8){
            console.log("Number error");
            return false;
        }

        return true;
    }

    sendEmail = (e) => {
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

    componentDidMount() {
        $(".dummy_submit").on("click", (e) => {
            e.preventDefault();
            this.handleSubmit();
        })
    }

    render(){
        return (
            <form id="contact-form" autoComplete="off" onSubmit={this.sendEmail}>
                {/* Nombre */}
                <div className="field form_nombre" >
                    <label htmlFor="form_name">Nombre</label>
                    <input 
                    id="form_name" 
                    type="text" 
                    name="form_name" 
                    pattern="[A-Za-z0-9]+" 
                    maxLength="20"
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event, "name")}
                    />
                </div>

                {/* Apellido */}
                <div className="field form_apellido" >
                    <label htmlFor="form_surname">Apellido</label>
                    <input 
                    id="form_surname" 
                    type="text" 
                    name="form_surname" 
                    pattern="[A-Za-z0-9]+" 
                    maxLength="20"
                    value={this.state.surname}
                    onChange={(event) => this.handleChange(event, "surname")}
                    />
                </div>

                {/* Email */}
                <div className="field form_email">
                    <label htmlFor="form_email">Email</label>
                    <input 
                    id="form_email" 
                    type="email" 
                    name="form_email"
                    value={this.state.email}
                    onChange={(event) => this.handleChange(event, "email")}
                    />
                </div>

                {/* Numero */}
                <div className="field form_numero">
                    <label htmlFor="form_number">Teléfono</label>
                    <input 
                    id="form_number" 
                    type="text" 
                    name="form_number" 
                    pattern="[0-9]+"
                    value={this.state.number}
                    onChange={(event) => this.handleChange(event, "number")}
                    />
                </div>
            
                {/* Mensaje */}
                <div className="field form_mensaje">
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" maxLength="800"></textarea>
                </div>

                {/* Captcha */}
                <div className="g-recaptcha" data-sitekey="6Lfno2kaAAAAAA0bQ8baSxANX6Fkt7pDT0bOI9RG"></div>

                {/* Form Submit */}
                <input id="form_submit" className="form_submit" type="submit" name="submit" value="Enviar"/>

                {/* Dummy Submit */}
                <a className="dummy_submit" href="#">Enviar</a>
            </form>
        );
    }
}


export default Form;