import React from 'react'

const LeftBar = () => {
  return (
    <section className='absolute left-0 top-12 bg-dark h-full w-48 text-white'>
      <ul className='pt-20 pl-5 text-lg'>
        <li className='my-4'>New Announcement</li>
        <li className='my-4'>Birthdays</li>
        <li className='my-4'>Anniversaries</li>
      </ul>
    </section>
  );
}

export default LeftBar
