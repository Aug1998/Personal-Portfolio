import styled from "styled-components"
import theme from "resources/theme"
import { useState } from "react";
import Container from "../styled-components/Container";

export default function Navbar() {
  const [activeOption, setActiveOption] = useState("home");

   return (
      <NavbarWrapper backgroundColor="transparent">
         <NavbarContainer>
         <h1>A.</h1>
         <Nav>
            <NavOption isActive={activeOption === 'home'}>Inicio</NavOption>
            <NavOption isActive={activeOption === 'services'}>Servicios</NavOption>
            <NavOption isActive={activeOption === 'portfolio'}>Portfolio</NavOption>
            <NavOption isActive={activeOption === 'about'}>Sobre mí</NavOption>
            <NavOption isActive={activeOption === 'contact'}>Contacto</NavOption>
         </Nav>
         </NavbarContainer>
      </NavbarWrapper>
   )
}



const NavbarWrapper = styled(Container)`
   position: fixed;
   top: 0;
   left: 0;
`

const NavbarContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  z-index: 3;
  transition: 0.4s;
  h1{
      cursor: pointer;
      font-size: 3rem;
      height: max-content;
      color: ${theme.primary};
      margin: 0;
      transition: 0.3s;
      &:hover{
          color: ${theme.black};
      }
  }
`
const NavOption = styled.button<{ isActive?: boolean }>`
    background: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    text-transform: uppercase;
    transition: color 0.3s;
    color: ${props => props.isActive ? theme.primary : theme.black};
    position: relative;
    padding-bottom: 5px;
    &::before{
        content: "";
        position: absolute;
        height: 100%; width: 55%;
        left: ${props => props.isActive ? '0' : '-100%'};
        bottom: 0;
        border-bottom: solid 2px ${theme.primary};
        transition: 0.3s;
    }
    &:hover{
        cursor: pointer;
        color: ${theme.primary};
        &::before{
            left: 0;
        }
    }
    &:not(:last-of-type){
        margin-right: 35px;
    }
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;    
  align-items: center;
  margin-top: 2px;
`
