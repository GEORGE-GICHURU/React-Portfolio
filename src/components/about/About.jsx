import React from 'react'
import './about.css'
// import { Button, Title } from './components'
import Button from '../shared/Button'
import Title from '../shared/Title'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'


const About = () => {
    return (
        <section id="about">
            <Title text="Get To Know" title="About Me" />
            <div className="about-content">
                <div className='about-image'>
                    <img src={require("../../assets/letter-g-blue-fire-flames-black-isolated-background-realistic-fire-effect-sparks-part-alphabet-set-letter-g-blue-fire-157763002.jpg")} alt="George Gichuru" />
                </div>
                <div className='about-container'>
                    <div className='content-container'>
                        <div className='content-box'>

                            <FaAward />
                            <h3>Experience</h3>
                            <p>
                                2+ years of experience in web development.
                            </p>
                        </div>

                        <div className='content-box'>
                            <FiUsers />
                            <h3>Clients</h3>
                            <p>
                                100+ clients
                            </p>
                        </div>

                        <div className='content-box'>
                            <AiOutlineProject/>
                            <h3>Projects</h3>
                            <p>
                                50+ projects
                            </p>
                        </div>
                    </div>

                    <p className='text'>
                    Talented web development experienced with wide range of programming languages and design tools.Skilled at producing clean, secure codes based on individual client's need.
                    </p>

                    <p className='text'>
                    Focused on delighting customers with innovative user-friendly designs
                    </p>

                    <Button text="Let's Talk" position="left" />
                </div>
            </div>
        </section>
    )
}

export default About