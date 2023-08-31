import React from 'react'
import lion from "./Images/lionbot.png"

export default function Top() {
  return (
    <div className=' bg-slate-200 text-black w-full left-0 p-4 border-yellow-500 border-b-2 '>
    <div className=''>
      <img src={lion} alt="Lion" className='w-16 h-16 rounded-2xl' /> {/* Adjust width and height as needed */}
      <div className='text-center text-3xl'>
        <h1>SQUARELION AGENCY</h1>
      </div>
    </div>
  </div>
  )
}
