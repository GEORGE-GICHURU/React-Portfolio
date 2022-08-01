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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dignissimos reiciendis similique inventore, eaque at praesentium molestias nihil modi, quam delectus corrupti laudantium. Reprehenderit fugiat ex maiores, nulla natus cumque voluptates non sit impedit minima quasi, architecto iure amet quas expedita.
                    </p>

                    <p className='text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dignissimos reiciendis similique inventore, eaque at praesentium molestias nihil modi, quam delectus corrupti laudantium. 
                    </p>

                    <Button text="Let's Talk" position="left" />
                </div>
            </div>
        </section>
    )
}

export default About