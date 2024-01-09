import React from 'react'
import "./EndPage.css"

const EndPage = () => {
  return (
    <div>
        <div className='upper-footer'>
            <div style={{marginLeft: "150px"}}>
                <img src='handimage.png' alt='' id='hand-image' height={"600px"}/>
            </div>
            <div className='upper-footer-content'>
                <h1>Join our community</h1>
                <div className='buttons-container'>
                    <button id='discord-button'>Join discord</button>
                    <button id='twitter-button'>Follow Twitter</button>
                </div>
                <a href='www.google.com'>Read our whitepaper</a>
            </div>
        </div>
        <div className='lower-footer'>
            <span className='logo-name'>
                <img src='logo.png' alt='' id='logo'/>
                <h1>NFD</h1>
            </span>
            <p style={{marginLeft: "3%", marginRight: "5%", color: "gray"}}>© 2023 NFD, INC. ALL RIGHTS RESERVED.</p>
            <div style={{width: "20%"}}>
                <a href='www.google.com' style={{color: "black", marginRight: "5%"}}>Privacy</a>
                <a href='www.google.com' style={{color: "black"}}>Terms of use</a>
            </div>
            <div style={{display: "flex", alignItems: "center", width: "30%"}}>
                <a href='www.google.com'>contact@nfd.gg</a>
                <button id='try-app' style={{marginLeft: "10%"}}>Try App</button>
            </div>
        </div>
    </div>
  )
}

export default EndPage