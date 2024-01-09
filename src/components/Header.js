import React from 'react'
import { SocialIcon } from 'react-social-icons';
import "./Header.css"

const Header = () => {
  return (
    <div className='container'>
        <span className='logo-name'>
            <img src='logo.png' alt='' id='logo'/>
            <h1>NFD</h1>
        </span>
        <ul className='options'>
            <li>About</li>
            <li>Aggregator</li>
            <li>Features</li>
            <li>Roadmap</li>
            <li>Contact us</li>
        </ul>
        <span className='socials'>
            <SocialIcon url='https://discord.com/' bgColor='white' fgColor='rgb(81, 44, 246)'/>
            <SocialIcon url='https://twitter.com' bgColor='white' fgColor='rgb(81, 44, 246)'/>
        </span>
    </div>
  )
}

export default Header