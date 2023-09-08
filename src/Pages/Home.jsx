import React, { useEffect, useRef } from 'react'
import "./PageStyle.css";
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin'; // Import TextPlugin
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin); 

const role = ["Software Developer", "Web Developer", "Freelancer", "UI/UX Designer"];
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true)

const Home = () => {
  useEffect(() => {
    gsap.to(".curser-point", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "none" });
    let tlMaster = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    role.forEach((item) => {
      let duration = item.length / 10;
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: duration});
      tl.to("#animete-text", { duration: duration, delay:0.2, text: { value: item, delimiter: "" } }); // Use TextPlugin
      tlMaster.add(tl);
    });
  }, []);

  let text =useRef(null);
  let plate =useRef(null);
  let p =useRef(null);

  useEffect(() => {
    gsap.from([plate], 1.2, {
      y: -700,
      ease: "bounce.out",
      scale: 2.5,
      opacity: 0,
    });
    
  },[]);
  const newtimeline = gsap.timeline();
  useEffect(() => {
    newtimeline.from([text,p], 1,{
      autoAlpha: 0,
      x: "300",
      skewY: 10,
      stagger: {
        amount: 0.4,
      }
    });
  });
  
  

  return (
    <div className='home w-full h-[120vh]' id='Home'>
        <div className="image-area lg:hidden">
            <div className="plate" ref={el => plate = el}>
                <div className="image">
                
                </div>
            </div>
        </div>
        <div className="image-area-lg max-lg:hidden">
            <div className="plate fixed" ref={el => plate = el}>
                <div className="image">
                {/* <h1>asdfasd</h1> */}
                </div>
            </div>
        </div>
        <div className="text-area">
            <div className="text">
              <div className="text-1">
                <h1 ref={el => text = el}>Say Hi <span className='animate-emoji'>👋</span> from <br /><span className='main-color'>Bhathika Gimhan</span>,<br /> <span id="animete-text"></span><span className='curser-point'>_</span></h1>
              </div>
                <br />
                <p ref={el => p = el}>Highly motivated and experienced software engineer with 3 years of experience in developing and maintaining software applications, seeking a challenging role in a dynamic organization where I can utilize my technical skills and experience to contribute to the development and success of the company</p>
            </div>
        </div>
    </div>
  )
}

export default Home;
