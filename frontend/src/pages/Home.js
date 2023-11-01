import React, { useEffect, useMemo } from 'react'
import AnnouncementTable from '../components/AnnouncementTable';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../components/OpenModalButton';
import NewAnnouncementForm from '../forms/NewAnnouncementForm';
import { getAnnouncementsThunk } from '../store/announcement';
import { useModal } from '../context/Modal';

// const announcementHeaders = ['Date', 'Announcement'];
// const announcements = [
//   { date: '2021-10-01', announcement: 'This is an announcement for the first' },
//   { date: '2021-10-02', announcement: 'This is an announcement for the second' },
//   { date: '2021-10-03', announcement: 'This is an announcement for the third' },
//   { date: '2021-10-04', announcement: 'This is an announcement for the fourth' },
//   { date: '2021-10-05', announcement: 'This is an announcement for the fifth' },
//   { date: '2021-10-06', announcement: 'This is an announcement for the sixth' },
// ]


const today = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });
console.log('TODAY === ', today)

const Home = () => {
  const dispatch = useDispatch();
  const {closeModal} = useModal();
  const currentUser = useSelector(state => state.session.user);
  const announcements = Object.values(useSelector((state) => state.announcements));
console.log('ANNOUNCEMENTS === ', announcements);

const thisMonthsAnnouncements = announcements.filter(announcement => {
  console.log('ANNOUNCEMENT DATE === ', announcement.date)
  // const announcementMonth = new Date(announcement.date).getMonth() + 1;
  const announcementMonth = announcement.date.slice(5, 7);
  console.log('ANNOUNCEMENT MONTH === ', announcementMonth);
  console.log((new Date().getMonth() + 1).toString());
  return announcementMonth === (new Date().getMonth() + 1).toString();
});

  // const thisMonthsAnnouncements  = useMemo(() => {
  //   const thisMonth = new Date().getMonth() + 1;
  //   console.log('THIS MONTH === ', thisMonth)

  //   return announcements.filter(announcement => {
  //     const announcementMonth = new Date(announcement.date).getMonth() + 1;
  //     console.log('ANNOUNCEMENT MONTH === ', announcementMonth)
  //     return announcementMonth === thisMonth;
  //   })
  // }, [announcements]);

  useEffect(() => {
    console.log('GETTING ANNOUNCEMENTS')
    dispatch(getAnnouncementsThunk());
  }, [dispatch]);

  // console.log('ANNOUNCEMENTS HOME PAGE === ', announcements)
  return (
    <section className='text-white w-4/5 mx-auto text-center pt-4'>
      <h1 className='text-4xl'>Welcome {currentUser.username}!</h1>
      {currentUser.isAdmin && (
        <OpenModalButton buttonText="+ Announcement" modalComponent={<NewAnnouncementForm onClose={closeModal} />} />
      )}
      <p className='py-2'>Here are your announcements for the month:</p>
      <AnnouncementTable announcements={thisMonthsAnnouncements} />
      <p className='py-2'>{today}</p>
    </section>
  );
}

export default Home
