import React from 'react'

const Footer = () => {
  return (
        <div className='mt-15 px-16 mb-2'>
  <div className="grid grid-cols-3 backdrop-blur-md border  border-white/10 rounded-2xl overflow-hidden w-[80%]">

    {/* Card 1 */}
    <div className="flex items-center gap-4 px-8 py-6 border-r border-white/10">
      <div className="bg-orange-500/20 p-2 rounded-full">
        📹
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">High Quality</h3>
        <p className="text-gray-400 text-sm">
          Crystal clear video and audio calls
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center gap-4 px-8 py-6 border-r border-white/10">
      <div className="bg-purple-500/20 p-2 rounded-full">
        🔒
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">Secure & Private</h3>
        <p className="text-gray-400 text-sm">
          Your calls are end-to-end encrypted
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center gap-4 px-8 py-6">
      <div className="bg-pink-500/20 p-2 rounded-full">
        ⚡
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">Instant Connect</h3>
        <p className="text-gray-400 text-sm">
          Connect with anyone, anytime, anywhere
        </p>
      </div>
    </div>

  </div>
</div>
  )
}

export default Footer