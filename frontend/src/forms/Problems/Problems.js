import React from 'react'

const Problems = ({ closeModal }) => {
  return (
    <section className='flex flex-col bg-black text-white w-96'>
      <div className='bg-primary w-full rounded-sm'>
        <h2 className='text-3xl text-center p-2'>Report a Problem</h2>
        <i
          className='fas rounded-full fa-times text-2xl text-right px-2 right-2 top-3 absolute hover:cursor-pointer hover:border hover:border-collapse hover:border-grey hover:bg-grey hover:text-dark'
          onClick={closeModal}
        ></i>
      </div>
      <div className='px-4 py-2 mt-2 border border-dark'>
        <form className='flex flex-col text-white gap-4 text-right'></form>
      </div>
    </section>
  );
}

export default Problems
