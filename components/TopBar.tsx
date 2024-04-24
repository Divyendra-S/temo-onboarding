import Link from 'next/link';
import React from 'react';

const TopBar = () => {
 return (
   <div className="z-30 flex top-0 left-0 right-0 items-center justify-between border-b border-gray-100 h-16  bg-white px-4 sm:px-6 lg:px-8 ">
     <div className="flex-1 min-w-0">
       <span className="flex divide-x items-center">
         <div className="mr-4 cursor-pointer inline-flex items-center px-3 py-1.5 border border-gray-50 rounded-lg shadow text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth="1.5"
             stroke="currentColor"
             aria-hidden="true"
             className="-ml-1 mr-1 h-4 w-4 text-gray-500"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
             />
           </svg>
           Back
         </div>
         <p className="pl-4 text-lg font-semibold hidden sm:block">Interactive Temo Onboarding</p>
       </span>
     </div>
     <div className="flex mt-0 lg:ml-4">
       <span className="sm:ml-3">
         <Link href="/showcases">
           <div className="inline-flex items-center px-4 py-1.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             Create showcase
           </div>
         </Link>
       </span>
     </div>
   </div>
 );
};

export default TopBar;
