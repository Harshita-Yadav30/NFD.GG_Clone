import { useEffect, useRef, useState } from "react";
import "./AboutContent.css"

const AboutContent = () => {
    const [isSticky, setIsSticky] = useState(true);
    const stickyRef = useRef(null);
    const overlappingDivRef = useRef(null);

    const handleScroll = () => {
        if (stickyRef.current && overlappingDivRef.current) {
        const stickyRect = stickyRef.current.getBoundingClientRect();
        const overlappingRect = overlappingDivRef.current.getBoundingClientRect();

        if (stickyRect.bottom > overlappingRect.top) {
            // The sticky div is overlapping with the other div
            setIsSticky(false);
        } else {
            // The sticky div is not overlapping
            setIsSticky(true);
        }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div>
        <div className='about-container'>
            <div className='info-container' style={{top: -50, position: isSticky ? "sticky" : "static"}}>
                <div className='info-box' id='problem'>
                    <h1 className='titles'>The first web3 crypto platform</h1>
                    <h2>Problem</h2>
                    <big>Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing.</big>
                </div>
                <div className='cube-animation'>
                    <div className="cube-image">
                        <video width={"90%"} muted preload="preload" draggable='true' src="cube.webm" autoPlay loop id="cube-video"></video>
                    </div>
                </div>
            </div>

            <div style={{paddingBottom: "5%", paddingLeft: "2%", position: "relative", backgroundColor: "white", width: "37.8%"}}>
                <div className='info-container' id="cover-div" style={{backgroundColor: "white", zIndex: 1, width: "100%"}}>
                    <div className='info-box' id='solution' style={{backgroundColor: "white", zIndex: 1}}>
                        <h1 className='titles' style={{backgroundColor: "white"}}>We work to make your life easier</h1>
                        <h2 style={{backgroundColor: "white"}}>Solution</h2>
                        <big style={{backgroundColor: "white"}}>NFD.gg heralds a new era in alpha communities, one where they have their own platform, which structures and condenses relevant information on all these alpha activities, where our team monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.</big>
                    </div>
                    <div className='cube-animation'></div>
                </div>

                <div id="line"></div>
                
                <div className='bottom-box' style={{position: "relative"}}>
                    <img src='logo.png' alt='' id="logo-bottom" style={{backgroundColor: "white", zIndex: 1}}/>
                    <h3 style={{backgroundColor: "white", zIndex: 1}}>NFD will save you time and help you earn money in crypto.</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent