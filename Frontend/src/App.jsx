import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Authentication from './pages/Authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeet from './pages/VideoMeet'
import History from './pages/History';
import home from './pages/home'

const App = () => { 
  return (
    <>
    <AuthProvider>
      <Routes>
        {/* <Route path="/home" element=</> /> */}
        <Route path='/' element={<LandingPage/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/home' element={<home />} />
        <Route path='/history' element={<History />} />
        <Route path="/:url" element={<VideoMeet/>} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App
