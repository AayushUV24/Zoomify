import React from 'react'
import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

const Main = () => {
  return (
    <div className='flex justify-between items-center px-16 mt-10 overflow-hidden'>
        {/* Left Section */}
        <div className='max-w-xl'>
          <h1 className='font-extrabold text-6xl leading-tight'><span className='text-[#FF9839]'>Connect</span> with your <br />
           loved Ones
          </h1>
          <p className='text-gray-400 mt-4 text-lg leading-normal' >Cover a distance by zoomify</p>
          <div role='button'>
            <Link 
              to="/auth"
              className="inline-flex items-center mt-5 bg-[#FF9839] px-4 py-1.5 rounded-lg font-medium hover:bg-orange-500 transition"
            >
              Get Started 
              <ArrowRight className='ml-1' />
            </Link>
          </div>
        </div>

        {/* Right Section*/}
        <div className='flex justify-center items-center mr-10'>
          <img src="/mobile.png" alt="mobile" className='w-[395px] object-contain' />
        </div>

      </div>
  )
}

export default Main