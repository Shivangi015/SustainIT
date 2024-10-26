import React from 'react'
import './footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src='' alt=''/>
            <p>SustainIT</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social'>
        <FaInstagramSquare size={25}/>
        <FaPinterest size={25}/>
        <FaFacebookF size={25}/>
        </div>
        <div className='footer-copyright'>
        <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer