import React, { useState, useEffect, useRef } from "react";
import "./NavStyle.css";
import { Link } from "react-scroll";
import { gsap } from "gsap";

// Register the necessary plugins
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

const Navigation = () => {
  const logoRef = useRef(null);
  const [click, setClick] = useState(false);

  // Use a useEffect to animate the logo when the component first mounts
  useEffect(() => {
    const logoAnimation = gsap.timeline();
    logoAnimation.from(logoRef.current, {
      y: -200,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      onComplete: () => {
        // After the logo animation completes, set the click state to true
        setClick(true);
      },
    });
  }, []);

  const handleClick = () => {
    setClick(!click);
    animateSidebar();
  };

  const animateSidebar = () => {
    const sidebar = document.querySelector(".sideNavItems");
    const duration = 0.5;
    const sidebarX = click ? "100%" : "0";

    gsap.to(sidebar, {
      x: sidebarX,
      duration: duration,
      ease: "bounce.out",
    });
  };

  return (
    <div className="main-border">
      <div className="header" ref={logoRef}>
        <div className="logo">
          <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
            Bhathika Gimhan.
          </Link>
        </div>
        <div className="items">
          <div className="item">
            <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </div>
          <div className="item">
            <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
              About
            </Link>
          </div>
          <div className="item">
            <Link to="Contact" spy={true} smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <button className="burger z-50" onClick={handleClick}>
        {click ? (
          <svg className='bars h-6 w-6 fill-white z-50 text-white' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg className='closeBtn h-6 w-6 fill-blue-800 z-50 text-blue-300' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        )}
      </button>
      <div className="sideNavItems">
        <div className="sideNavItem">
          <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </div>
        <div className="sideNavItem">
          <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </div>
        <div className="sideNavItem">
          <Link to="Contact" spy={true} smooth={true} offset={50} duration={500}>
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
