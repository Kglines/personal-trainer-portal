import React from 'react';
import OpenModalButton from './OpenModalButton';
import NewAnnouncementForm from '../Announcements/forms/NewAnnouncementForm';
import { useModal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LeftBar = ({ button, component, links }) => {
  const { closeModal } = useModal();

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <section className='absolute left-0 top-12 bg-dark h-full w-56 text-white'>
      <ul className='pt-20 pl-2 text-lg'>
        {/* <li className='my-4'>New Announcement</li> */}
        {sessionUser.isAdmin && (
          <OpenModalButton
            buttonText={button}
            buttonColor='secondary'
            // modalComponent={<NewAnnouncementForm onClose={closeModal} />}
            modalComponent={component}
          />
        )}
        {links?.map((link) => (
          <Link to={`/${link}`} key={link}>
            <li className='my-4 pl-6'>{link}</li>
          </Link>
        ))}
        {/* <li className='my-4 pl-6'>Birthdays</li>
        <li className='my-4 pl-6'>Anniversaries</li> */}
      </ul>
    </section>
  );
};

export default LeftBar;
