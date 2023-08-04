import React from 'react';

function Pagination() {
  return <div className=' pt-5  '>
      <div className=''>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'> 1 </span>
          of
          <span className='font-medium'> 7 </span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div className=''>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a href='/'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Previous</span>
          </a>

          <a
           
            href='/'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Next</span>
          </a>
        </nav>
      </div>
    
  </div>;
}

export default Pagination;