import About from './sections/about'
import Contact from './sections/contact/contact'
import Footer from './sections/footer/footer'
import Hero from './sections/hero'
import Navbar from './components/Navbar'
import MySkills from './sections/mySkills'
import GlobalStyle from './styled-components/GlobalStyle'

export default function Homepage() {
   return (
      <body>
         <GlobalStyle/>
         {/* Navbar Component */}
         <Navbar/>

         {/* Hero Component */}
         <Hero/>

         {/* Services Component */}
         <MySkills/>

         {/* About-me Component */}
         <About/>

         {/* Contact-me Component */}
         <Contact/>

         {/* Footer Component */}
         <Footer/>

         <script src="scripts.js"></script>
         <script src="services_mobile.js"></script>
      </body>
   )
}
