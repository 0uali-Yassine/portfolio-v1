import React from 'react'
import Navbar from '../pages/Navbar';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Work from '../pages/Work';
import Footer from '../pages/Footer';

function Home() {
  return (
    <div>

        <Navbar/>
        <Hero/>
        <About/>
        <Work/>
        <Footer/>
        
    </div>
  )
}

export default Home;