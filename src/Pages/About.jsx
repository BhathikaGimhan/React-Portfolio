import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let rightSide = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-container-lg",
        opacity: 0,
        pin: true,
        start: "top center",
        end: "+=1500",
        scrub: 1,
      }
    });
  
    tl.from(".exp-lg, .project-lg", {scale: 1, x:-500, opacity: 0, duration: 0.1, pin:true, })
    .to(rightSide,  {scale: 2, opacity: 0, duration: 0.5, pin:true, delay:1, })
    .to(rightSide, {scale:1})
  }, []);
  return (
    <div className='about' id='About'>
      <div className="about-container-lg max-lg:hidden"  ref={el => rightSide = el}>
        <div className='about-left-side-lg' >
          <div className="exp-lg bg">
            <h1 className='main-color'>3+</h1>
            <p>YEAR OF<br />EXPERIENCE</p>
          </div>
          <div className="project-lg bg">
            <h1 className='main-color justify-center items-center'>23+</h1>
            <p>
              PROJECTS HAVE<br />BEEN DONE
            </p>
          </div>
        </div>
        <div className="about-right-side-lg absolute" ref={el => rightSide = el}>
            <h1 className="title">Every great design begin with an even <span className='main-color'>better story</span> </h1>
          <div className="about-me">
            <p>Since beginning my journey as a freelance designer nearly 3 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
          </div>
        </div>
        <div className="bakground-text">
          ABOUT
        </div>
      </div>
        
      <div className="about-container-sm lg:hidden">
        <div className='about-left-side'>
          <div className="exp bg">
            <h1 className='main-color'>3+</h1>
            <p>YEAR OF<br />EXPERIENCE</p>
          </div>
          <div className="project bg">
            <h1 className='main-color justify-center items-center'>23+</h1>
            <p>
              PROJECTS HAVE<br />BEEN DONE
            </p>
          </div>
        </div>
        <div className="about-right-side">
            <h1 className="title">Every great design begin with an even <span className='main-color'>better story</span> </h1>
          <div className="about-me">
            <p>Since beginning my journey as a freelance designer nearly 3 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About