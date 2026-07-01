import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function History() {

    const [loading, setLoading] = useState(true);
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-xl">Loading Meeting History...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white">

            <div className="flex justify-between items-center px-10 py-5 bg-zinc-900 border-b border-zinc-700">
                <button
                    onClick={() => routeTo("/home")}
                    className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 hover:scale-105 transition"
                >
                    <HomeIcon />
                    Home
                </button>

                <h1 className="text-3xl font-bold">Meeting History ({meetings.length})</h1>
            </div>
            {
            meetings.length !== 0 ? (
              <div className="p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meetings.map((e, i) => (
                    <div
                        key={i}
                        className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-orange-500 transition-all duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-4 text-orange-400">
                            Meeting #{i + 1}
                        </h2>

                        <p className="text-gray-400 mb-2">
                            Code:
                            <span className="text-white ml-2">
                                {e.meetingCode}
                            </span>
                        </p>

                        <p className="text-gray-400">
                            Date:
                            <span className="text-white ml-2">
                                {formatDate(e.date)}
                            </span>
                        </p>
                        <button onClick={() => routeTo(`/${e.meetingCode}`)} className="mt-4 bg-orange-500hover:bg-orange-600 hover:scale-105  px-4 py-2 rounded-lg text-sm">
                           Rejoin
                        </button>
                    </div>
                ))}
            </div>
    ) : (
        <div className="flex flex-col justify-center items-center h-[70vh]">
            <p className="text-6xl mb-4">📭</p>
            <p className="text-2xl text-gray-500">
                No meeting history found
            </p>
        </div>
    )
}



        </div>
    )

}