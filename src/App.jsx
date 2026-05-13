import './App.css'
import AboutMe from './component/AboutMe'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Project from './component/Project'
import Resume from './component/Resume'
import Social from './component/Social'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero/>
      <Social/>
      <Resume/>
      <AboutMe/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App
