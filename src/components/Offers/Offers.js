import React from 'react'
import './Offers.css'
import image from '../assets/offer3.webp'
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BESTSELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'> 
            <img src={image} alt=''/>
        </div>
    </div>
  )
}

export default Offers