import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import VideoCallIcon from '@mui/icons-material/VideoCall';


const Navbar = () => {
  const router = useNavigate();

  return (
    <nav className='flex justify-between items-center px-12 py-4 border  border-white/10'>
        <div className='flex items-center gap-3'>
          <div className='bg-orange-500 p-1 rounded-xl'>
            <VideoCallIcon sx={{ color: "white", fontSize: 35 }} />
          </div>
          <h2 className='text-3xl font-bold'>Zoomify</h2>
        </div>

        <div className='flex items-center gap-5'>
          <Link to="/aljk23" className='hover:text-purple-300'>
             Join as Guest
          </Link>
          <Link to="/auth" className='hover:text-purple-300'>
            Register
          </Link>
          <button onClick={() => {router("/auth")}} className='bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 cursor-pointer'>
            Login
          </button>
        </div>
      </nav>
  )
}

export default Navbar