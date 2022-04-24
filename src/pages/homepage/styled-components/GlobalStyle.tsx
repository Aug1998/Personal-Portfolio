import theme from 'resources/theme';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
   ::-webkit-scrollbar {
      width: 14px;
      display: none;
   }

   ::-webkit-scrollbar-track {
      background-color: #F1F1F1;
   }

   ::-webkit-scrollbar-thumb {
      background-color: ${theme.primary_trans};
   }

   *{
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      padding: 0; margin: 0;
      overflow-x: hidden;
   }

   h1, h2, h3, h4, h5, label{
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
   }

   h5{
      font-size: 0.92rem;
   }
   h4{
      font-size: 1.1rem;
   }
   h3{
      font-size: 1.3rem;
   }
   h2{
      font-size: 1.5rem;
   }
   h1{
      font-size: 1.7rem;
   }

   p, a{
      font-size: 0.88rem;
   }

   .loading_screen{
      display: flex;
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background-color: $white;
      align-items: center;
      justify-content: center;
      z-index: 99;
      padding-bottom: 20px;
   }
`

export default GlobalStyle;