import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'

function About() {
  return (
    <div>
        <div className='about-title'>About</div>
        
        <div className='about-cards'>
            <div className='about-card'>
                <img src={about1} width={100} />
                <h4>Analyze Crypto market</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='about-button'>See more</button>
            </div>
            <div className='about-card'>
                <img src={about2} width={100} />
                <h4>Give insight based on you portfolio</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='about-button'>See more</button>            
            </div>
            <div className='about-card'>
                <img src={about3} width={100} />
                <h4>Personlized your portfolio</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='about-button'>See more</button>
            </div>
        </div>
    </div>
  )
}

export default About