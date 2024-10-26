import React from 'react'
import './Hero.css'
import image from '../assets/image6.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Buy and sell second-hand eco-friendly items on SustainIT</h2>
            <div>
                <p>Explore Our Collections for Greater Peace of Mind and a Brighter Tommorow.</p>
            </div>
            <div className='hero-btn'>
                <div>Latest Collection</div>
                <div className='arrow'><FaLongArrowAltRight /></div>
            </div>
        </div>
        <div className='hero-right'>
            <img src={image} alt=''/>
        </div>
    </div>
  )
}

export default Hero