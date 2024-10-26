import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Send Us Your Recyclable Products</h1>
        <p>Get More Information On Your Email</p>
        <div>
            <input type='email' placeholder='     Enter Your Email Address'/>
        </div>
    </div>
  )
}

export default NewsLetter