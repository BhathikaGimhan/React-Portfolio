import React from 'react'

const Resume = () => {
  return (
    <div>
        <div className="resume-right">
            <div className="heading">
                <h1>Education & <span className='main-color'>Experience</span></h1>
            </div>
            <div className="resume-container">
                <div className="resume">
                    <div className="resume-header dark-main">
                        <h2>Experience</h2>
                    </div>
                    <div className="resume-body">
                        <div className="list">
                            <h4 className='date'>2022 - Present</h4>
                            <h3>Web Designer & Developer</h3>
                            <code>CygnusoneSL</code>
                        </div>
                        <div className="list">
                            <h4 className='date'>2019 - 2022</h4>
                            <h3>Software Engineer</h3>
                            <code>Freelancer</code><br />
                            <h3>Web Designer & Developer</h3>
                            <code>Freelancer</code>
                        </div>
                    </div>
                </div>
                <div className="resume">
                    <div className="resume-header dark-main">
                        <h2>Education</h2>
                    </div>
                    <div className="resume-body">
                        <h3>Bachelor of Information Technology</h3>
                        <code>University of Moratuwa</code><br />
                        <h3>Bachelor of Science in Business Management</h3>
                        <code>Eastern University of Trincomalee Campus</code>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume