import React, { useEffect, useRef, useState } from 'react'
import "./AggregatorOne.css"

const Aggregator = () => {
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
    <div className='aggregator-container'>
      <div className='scrolls'>
        <div className='part-one' style={{top: 0, position: isSticky ? "sticky" : "static", zIndex: 0}}>
          <div className='scroll1'>
            <img src='verticalScroll.png' alt='' id='vertical-scroll1'/>
            <img src='horizontalScroll.png' alt='' id='horizontal-scroll1'/>
            <img src='image1.png' alt='' className='scroll-images' id='image1'/>
          </div>

          <div className='slider-info'>
            <p>FIRST WEB3 CRYPTO</p>

            <h1>Keeping track</h1>
            <h1>of projects in</h1>
            <h1 id='color-head'>one place</h1>

            <big>The NFD.gg aggregator allows you to create a specific card of any project and parse any type of information from Discord, Twitter, Dune Analytics, TradingView, Github etc. into your own dashboard.</big>

            <div id='options-list'>
              <button>Start Creating</button>
              <a href='www.google.com'>View Roadmap</a>
            </div>
          </div>
        </div>
        <div className='scroll2' style={{zIndex: 1}}>
          <img src='verticalScroll.png' alt='' id='vertical-scroll2'/>
          <img src='horizontalScroll.png' alt='' id='horizontal-scroll2'/>
          <img src='image2.png' alt='' className='scroll-images' id='image2' style={{zIndex: 100, position: "relative"}}/>
        </div>
      </div>
      
    </div>
  )
}

export default Aggregator