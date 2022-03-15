import About from './components/about'
import Contact from './components/contact/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import Services from './components/services'
import MyWork from './components/myWork/myWork'

export default function Homepage() {
  return (
      <body>
        {/* Navbar Component */}
        <Navbar/>

        {/* Hero Component */}
        <Hero/>

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
