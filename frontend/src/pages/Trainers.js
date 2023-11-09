import React from 'react'
import LeftBar from '../components/LeftBar'

const Trainers = () => {
  return (
    <section className='text-white w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <LeftBar />
      </div>
      <div>
        <div>
          <h1>Trainers</h1>
        </div>
        <div>
          <table>Trainer Table</table>
        </div>
      </div>
    </section>
  );
}

export default Trainers
