import About from './sections/about'
import Contact from './sections/contact/contact'
import Footer from './sections/footer/footer'
import Hero from './sections/hero'
import Navbar from './components/Navbar'
import Services from './sections/services/services'
import MyWork from './sections/myWork/myWork'
import MySkills from './sections/mySkills'

export default function Homepage() {
  return (
      <body>
        {/* Navbar Component */}
        <Navbar/>

        {/* Hero Component */}
        <Hero/>

        {/* Services Component */}
        <MySkills/>

        {/* Services Component */}
        <Services/>

        {/* My work Component */}
        <MyWork/>

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
