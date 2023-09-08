import Navigation from "../Components/Layouts/Navigation"
import "./PageStyle.css";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import React from 'react'
import Resume from "./Resume";


const LandingPage = () => {
  //gsap
  return (
    <div>
        <Navigation />
        <div className="container">
          <Home />
          <About />
          <Resume />
          <Contact />
        </div>
        
    </div>
  )
}

export default LandingPage