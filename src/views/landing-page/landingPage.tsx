import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import NavBar from './components/navBar'
import Portfolio from './components/portfolio'
import Services from './components/services'

export default function LandingPage() {
  return (
      <body>
        {/* Navbar Component */}
        <NavBar/>

        {/* Hero Component */}
        <Hero/>

        {/* Services Component */}
        <Services/>

        {/* My work Component */}
        <Portfolio/>

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
