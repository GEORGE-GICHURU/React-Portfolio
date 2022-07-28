import React from 'react'
import './header.css'
import { BsLinkedin, BsGithub, BsFileText } from 'react-icons/bs'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { Button } from 'components'
import {ButtonOutline} from 'components/shared/Button'
// import ME from 'assets/letter-g-blue-fire-flames-black-isolated-background-realistic-fire-effect-sparks-part-alphabet-set-letter-g-blue-fire-157763002.jpg'

const Header = () => {
    return (
        <header className='header' id="home">
            <div className='header-header'>
                <div className='header-title'>
                    <h5>Hello I'm</h5>
                    <h1>George Gichuru</h1>
                    <small>FullStack Developer</small>
                </div>
                <div className='header-buttons'>
                    <ButtonOutline text="Download CV"/>
                    <Button text="Let's Talk"/>
                </div>
            </div>

            <div className='header-footer'>
                <div className='header-socials'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin/>
                    </a>

                    <a href="https://github.com/GEORGE-GICHURU/" target="_blank" rel="noopener noreferrer">
                        <BsGithub/>
                    </a>

                    <a href="#!" target="_blank" rel="noopener noreferrer">
                        <BsFileText/>
                    </a>
                </div>

                <div className='image-area'>
                    <img src="{ME}" alt="George Gichuru" />
                </div>
                <a href="#!" className='scroll-down'>
                    <span>Scroll Down</span>
                    <HiChevronDoubleDown/>
                </a>
            </div>
        </header>
    )
}

export default Header