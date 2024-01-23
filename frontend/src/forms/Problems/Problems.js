import React, { useState } from 'react'

const Problems = ({ closeModal }) => {
    const [machineNum, setMachineNum] = useState(0);
    const [body, setBody] = useState('');

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
        <form className='flex flex-col text-white gap-4 align-top'>
          <label className='text-white'>
            Machine Number:
            <input
              type='number'
              value={machineNum}
              onChange={(e) => setMachineNum(e.target.value)}
              className='text-white bg-dark px-2 mx-4 w-1/3 text-center'
            />
          </label>
          <label className='flex'>
            Problem:
            <textarea
              type='text'
              rows={4}
              cols={30}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className='bg-dark text-white px-1 mx-2'
            />
          </label>
        </form>
      </div>
    </section>
  );
}

export default Problems
