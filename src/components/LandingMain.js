import React, { useState } from 'react'
import { PiSquaresFourThin } from "react-icons/pi";
import { PiKeyhole } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { PiHandsClappingDuotone } from "react-icons/pi";
import "./LandingMain.css"

const LandingMain = () => {
    const [active,setActive] = useState(false);

    const macChange = ()=>{
        setActive(true);
    }

    const windowChange = ()=>{
        setActive(false);
    }

  return (
    <div className='combined-container'>
        <div className='left-container'>
            <img src='bunny.png' alt='' id='bunny-image'/>
            <h1 className='left-heads' id='website-name'>NFD platform</h1>
            <h1 className='left-heads' id='website-link'>"NFD.gg"</h1>
            <div className='description'>
                <big>An Alpha community 2.0 with its own platform for participating, searching, and tracking any crypto related information.</big>
            </div>

            <div className='icon-list'>
                <div className='inner-div'>
                    <PiSquaresFourThin size={23} className='icons'/>
                    <p>Info in one place</p>
                </div>
                <div className='inner-div'>
                    <PiKeyhole size={23} className='icons'/>
                    <p>Private tools</p>
                </div>
                <div className='inner-div'>
                    <IoSettingsOutline size={21} className='icons'/>
                    <p>Wide functionality</p>
                </div>
            </div>

            <span className='choices'>
                <button>Try Platform</button>
                {/* <Link>How it works?</Link> */}
                <a href='www.google.com'>How it works?</a>
            </span>
        </div>

        <div className='right-container'>
            <div className='company'>
                <PiHandsClappingDuotone size={22}/>
                Software by NFD
            </div>
            <h1 className='right-heads' id='software-name'>NFD software</h1>
            <h1 className='right-heads' id='software-motto'>"Combine"</h1>
            <div className='description'>
                <big>Handle your crypto-wallets, farm activities and retrodrops on a single app.</big>
            </div>

            <div className='os-list'>
                <button onClick={macChange} style={{color: active ? "white" : "rgb(101, 100, 100)", borderBottomColor: active ? "white" : "rgb(101, 100, 100)", background: active ? "linear-gradient(to top, rgb(108, 76, 250), transparent, transparent)" : "black"}}><FaApple size={24} className='os' id='mac'/>macOs</button>
                <button onClick={windowChange} style={{color: active ? "rgb(101, 100, 100)" : "white", borderBottomColor: active ? "rgb(101, 100, 100)" : "white", background: active ? "black" : "linear-gradient(to top, rgb(108, 76, 250), transparent, transparent)"}}><FaWindows size={24} className='os' id='window'/>Windows</button>
            </div>

            <span className='choices'>
                <button>Download</button>
                {/* <Link>How it works?</Link> */}
                <a href='www.google.com' id='right-a'>How it works?</a>
            </span>
        </div>
    </div>
  )
}

export default LandingMain