import React, { useEffect } from 'react';
import AnnouncementTable from '../components/Announcements/tables/AnnouncementTable';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../components/UI/OpenModalButton';
import NewAnnouncementForm from '../components/Announcements/forms/NewAnnouncementForm';
import { getAnnouncementsThunk } from '../store/announcement';
import { useModal } from '../context/Modal';
import Login from './Login';

const today = new Date().toLocaleString('default', {
  month: 'short',
  year: 'numeric',
});
// console.log('TODAY === ', today)

const Home = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const currentUser = useSelector((state) => state.session.user);
  const announcements = Object.values(
    useSelector((state) => state.announcements)
  ).sort((a, b) => {
    return a?.date - b?.date;
  });
  console.log('ANNOUNCEMENTS ON HOME PAGE === ', announcements);

  useEffect(() => {
    dispatch(getAnnouncementsThunk());
  }, [dispatch]);

  const announcementButton = '+ Announcement';
  const links = ['Birthdays', 'Anniversaries'];

  // console.log('ANNOUNCEMENTS HOME PAGE === ', announcements)

  return (
    <section className='text-offWhite sm:w-full md:w-4/5 mx-auto text-center mt-12'>
      {currentUser ? (
        <div>
          <div>
            
          </div>
          <div className=''>
            <h1 className='text-4xl'>Welcome {currentUser.firstName}!</h1>
            <div className='mt-6'>
              {currentUser.role === 'admin' && (
                <OpenModalButton
                  buttonText='+ Announcement'
                  buttonColor='secondary'
                  modalComponent={<NewAnnouncementForm onClose={closeModal} />}
                />
              )}
            </div>
            <p className='py-2 mt-6'>Here are your announcements for the month:</p>
            <AnnouncementTable
              announcements={announcements}
              user={currentUser}
            />
            <p className='py-2'>{today}</p>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </section>
  );
};

export default Home;
