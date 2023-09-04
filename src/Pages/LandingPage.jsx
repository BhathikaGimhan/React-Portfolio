import Navigation from "../Components/Layouts/Navigation"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import React from 'react'
import { Power3, gsap } from "gsap";
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin'; // Register MotionPathPlugin for the 'y' property

// Register the necessary plugins
// gsap.registerPlugin(Power3, MotionPathPlugin);
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(Power3, MotionPathPlugin);

const LandingPage = () => {
  //gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <div>
        <Navigation  timeline={tl} ease={ease} />
        <Home timeline={tl}/>
        <About />
        <Contact />
    </div>
  )
}

export default LandingPage