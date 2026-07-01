import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        if (!meetingCode.trim()) return;
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="flex justify-between items-center px-10 py-4 bg-zinc-900 text-white border-b border-zinc-700 shadow-lg">

                <div className='flex items-center gap-3'>
                    <div className="bg-orange-500 p-2 rounded-xl">
                        📹
                    </div>

                    <h2 className="text-3xl font-bold">Zoomify</h2>
                </div>

                <div className='flex items-center gap-5'>
                    <button onClick={
                        () => 
                        navigate("/history")}
                        className="flex items-center gap-2 hover:text-orange-400 transition"
                    >
                        <RestoreIcon />
                        History
                    </button>
                    
                    <button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }} className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-white font-semibold transition" >
                        Logout
                    </button>
                </div>

            </div>


            <div className="flex items-center justify-center min-h-[85vh] px-10 gap-20">
                <div className="h-full flex items-center">
                    {/* <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl"> */}
                    <div className="bg-zinc-900/90 backdrop-blur-md rounded-3xl shadow-2xl p-14 max-w-xl">
                        <h2 className="text-4xl font-bold mb-4 text-white leading-tight">
                            Premium Video Meetings for Everyone
                        </h2>

                        <p className="text-gray-400 mb-6">
                           Join or create secure meetings instantly.
                        </p>

                        <div className='flex gap-3 mt-5'>

                            <TextField onChange={e => setMeetingCode(e.target.value)} label="Meeting Code" variant="outlined" />
                            <button
                                onClick={handleJoinVideoCall}
                                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold transition"
                            >
                                Join
                            </button>

                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="bg-orange-100 p-4 rounded-xl text-center hover:scale-105 hover:bg-orange-800 transition duration-300 cursor-pointer">
                           🎥 HD Video
                        </div>
                        <div className="bg-orange-100 p-4 rounded-xl text-center">
                            🔒 Secure
                        </div>
                        
                        <div className="bg-orange-100 p-4 rounded-xl text-center">
                            ⚡ Fast
                        </div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900  rounded-3xl p-4 shadow-3xl">
                    <img className='w-[40vw]  max-w-[500px] rounded-2xl hover:scale-105 transition duration-300' src='/logo3.png' alt="Zoomify" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)