import React from 'react'

const Hamburger = () => {
  return (
    <>
      <div className='fixed bg-primary top-2 left-2 w-8 h-8 flex z-10 md-hidden'>
        <div className='w-14 h-1.5 border-r-10 bg-dark origin-1 transition-all'></div>
        <div className='w-14 h-1.5 border-r-10 bg-dark origin-1 transition-all'></div>
        <div className='w-14 h-1.5 border-r-10 bg-dark origin-1 transition-all'></div>
      </div>
    </>
  );
}

export default Hamburger
