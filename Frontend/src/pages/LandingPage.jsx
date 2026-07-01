import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className='w-full min-h-screen bg-[url("/bg.png")] bg-no-repeat bg-cover bg-center overflow-hidden text-white' >

      {/* Navbar */}
      <Navbar/>

      {/* main container */}
      <Main/>

      {/* footer */}
      <Footer/>

    </div>
  )
}

export default LandingPage;