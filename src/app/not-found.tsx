// import React from 'react'

 
// export default function NotFound() {
//   return (
//     <div>
//        <div className="text-gray-500 text-sm mb-4">
//         Home / <span className="text-black">404 Error</span>
//       </div>
//       <h1 className='w-[829px] h-[115px] text-black'>404 Not Found</h1>
//       <p className='text-black'>Your visited page not found. You may go home page.</p>
//       <button className="bg-[#DB4444] text-white px-6 py-2 rounded mt-6">
//           Back to home page
//         </button>
//     </div>
//   )
// }

import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        Home / <span className="text-black">404 Error</span>
      </div>

      {/* Main Content */}
      <h1 className="text-6xl font-bold text-black mb-4">404 Not Found</h1>
      <p className="text-gray-600 text-lg mb-6">
        Your visited page not found. You may go home page.
      </p>

      {/* Back Button */}
      <button className="bg-[#DB4444] text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition duration-200">
        Back to home page
      </button>
    </div>
  );
}
