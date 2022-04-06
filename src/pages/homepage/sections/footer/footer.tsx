import Container from 'pages/homepage/styled-components/Container'
import theme from 'resources/theme'
import styled from 'styled-components'

export default function Footer() {
return (
   <Container backgroundColor={theme.black}>
      <FooterContainer>
         <h2 className="home_btn">A.</h2>
         <ToTopButton>
            <svg width="100%" height="100%" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path>
            <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path>
            </svg>
         </ToTopButton>
      </FooterContainer>
   </Container>
)
}


const FooterContainer = styled.footer`
   width: 100%;
   height: 90px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   h2{
      font-size: 3.5rem;
      color: ${theme.primary};
      cursor: pointer;
      transition: 0.3s;
      &:hover{
         color: #fafafa;
      }
   }
`

const ToTopButton = styled.div`
   background-color: ${theme.primary};
   width: 46px;
   height: 46px;
   padding: 8px;
   overflow: hidden;
   cursor: pointer;
   transition: 0.2s;
   svg{
      fill: #fafafa;
      transform: rotateZ(-90deg);
      transition: 0.3s;
   }
   &:hover{
      background-color: #fafafa;
   svg{
      fill: ${theme.primary};
   }
   }
`