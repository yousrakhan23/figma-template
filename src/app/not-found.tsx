import React from 'react'

 
export default function NotFound() {
  return (
    <div>
       <div className="text-gray-500 text-sm mb-4">
        Home / <span className="text-black">404 Error</span>
      </div>
      <h1 className='w-[829px] h-[115px] text-black'>404 Not Found</h1>
      <p className='text-black'>Your visited page not found. You may go home page.</p>
      <button className="bg-[#DB4444] text-white px-6 py-2 rounded mt-6">
          Back to home page
        </button>
    </div>
  )
}