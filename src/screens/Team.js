import React from 'react'
import "./Team.css"

const Team = () => {
  return (
    <div className='team-container'>
        <div className='team-inner-container'>
            <div id='team-content'>
                <h1>We are delighted to introduce the NFD team members to you</h1>
                <p id='team-description'>NFD team is always open to new partnerships and new team members, so if you have a desire to join and you have a big experience in development or crypto - just leave your request in form and we will consider it.</p>
                
                <button>Fill out a form</button>
            </div>
            <img src='team.png' alt=''/>
        </div>
    </div>
  )
}

export default Team