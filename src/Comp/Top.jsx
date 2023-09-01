import React from 'react'
import lion from "./Images/lionbot.png"

export default function Top() {
  return (
    <div className='bg-white border-b-4 border-yellow-500 dark:bg-gray-900 '>
    <div className=''>
      <div className='pt-2 pl-2'>
         <img src={lion} alt="Lion" className='w-16 h-16 rounded-2xl' /> {/* Adjust width and height as needed */}
      </div>
     
      <div className='text-center text-3xl text-white'>
        <h1>SQUARELION AGENCY</h1>
      </div>
    </div>
  </div>






  )
}
