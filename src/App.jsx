import './App.css'
import AboutMe from './component/AboutMe'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Resume from './component/Resume'
import Social from './component/Social'
import App_project from './component/App_Project'
import Web_project from './component/Web_project'
import Manage_Website from './component/Manage_Website'

function App() {
  

  return (
    <>
      <Navbar />

     <section id = "">
       <Hero/>
     </section>

      <section id = "social">
        <Social/>
      </section>

      <section id = "resume">
        <Resume/>
      </section>

        <section id = "skills">
          <AboutMe/>
        </section>

       <section id = "project">
          <App_project/>
       </section>


        <section id = "project">
          <Web_project/>
       </section>


       <section id = "footer">
        <Manage_Website/>
       </section>

      <Footer/>
    </>
  )
}

export default App
