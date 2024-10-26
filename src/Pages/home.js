import React from 'react'
import Hero from '../components/Hero/Hero' 
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Collection from '../components/NewCollection/Collection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Collection/>
        <NewsLetter/>
    </div>
  )
}

export default Home