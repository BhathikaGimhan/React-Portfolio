import React from 'react'

const About = () => {
  return (
    <div className='about h-[120vh]' id='About'>
      <div className="about-container-lg">
        <div className='left-side'>
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
          <div className="right-side hidden">
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