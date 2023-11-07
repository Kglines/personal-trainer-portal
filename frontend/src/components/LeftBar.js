import React from 'react'
import OpenModalButton from './OpenModalButton';
import NewAnnouncementForm from '../forms/NewAnnouncementForm';
import { useModal } from '../context/Modal';
import { useSelector } from 'react-redux';

const LeftBar = () => {
    const { closeModal } = useModal();
    const sessionUser = useSelector(state => state.session.user);

  return (
    <section className='absolute left-0 top-12 bg-dark h-full w-56 text-white'>
      <ul className='pt-20 pl-2 text-lg'>
        {/* <li className='my-4'>New Announcement</li> */}
        {sessionUser.isAdmin && <OpenModalButton
          buttonText='New Announcement'
          modalComponent={<NewAnnouncementForm onClose={closeModal} />}
        />}
        <li className='my-4 pl-6'>Birthdays</li>
        <li className='my-4 pl-6'>Anniversaries</li>
      </ul>
    </section>
  );
}

export default LeftBar
