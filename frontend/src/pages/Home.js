import React, { useEffect } from 'react'
import AnnouncementTable from '../components/AnnouncementTable';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../components/OpenModalButton';
import NewAnnouncementForm from '../forms/NewAnnouncementForm';
import { getAnnouncementsThunk } from '../store/announcement';
import { useModal } from '../context/Modal';
import LeftBar from '../components/LeftBar';

const today = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });
// console.log('TODAY === ', today)

const Home = () => {
  const dispatch = useDispatch();
  const {closeModal} = useModal();
  const currentUser = useSelector(state => state.session.user);
  const announcements = Object.values(useSelector((state) => state.announcements));

// const thisMonthsAnnouncements = announcements.filter(announcement => {
//   const announcementMonth = announcement.date.slice(5, 7);
//   return announcementMonth === (new Date().getMonth() + 1).toString();
// });


  useEffect(() => {
    dispatch(getAnnouncementsThunk());
  }, [dispatch]);

  const announcementButton = '+ Announcement'
  const links = ['Birthdays', 'Anniversaries']

  // console.log('ANNOUNCEMENTS HOME PAGE === ', announcements)
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <LeftBar button={announcementButton} links={links} component={<NewAnnouncementForm onClose={closeModal} />} />
      </div>
      <div>
        <h1 className='text-4xl'>Welcome {currentUser.username}!</h1>
        {currentUser.isAdmin && (
          <OpenModalButton buttonText="+ Announcement" modalComponent={<NewAnnouncementForm onClose={closeModal} />} />
        )}
        <p className='py-2'>Here are your announcements for the month:</p>
        <AnnouncementTable announcements={announcements} />
        <p className='py-2'>{today}</p>
      </div>
    </section>
  );
}

export default Home
