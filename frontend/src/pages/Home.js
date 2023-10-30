import React from 'react'
import AnnouncementTable from '../components/AnnouncementTable';
import { useSelector } from 'react-redux';

const announcementHeaders = ['Date', 'Announcement'];
const announcements = [
  { date: '2021-10-01', announcement: 'This is an announcement for the first' },
  { date: '2021-10-02', announcement: 'This is an announcement for the second' },
  { date: '2021-10-03', announcement: 'This is an announcement for the third' },
  { date: '2021-10-04', announcement: 'This is an announcement for the fourth' },
  { date: '2021-10-05', announcement: 'This is an announcement for the fifth' },
  { date: '2021-10-06', announcement: 'This is an announcement for the sixth' },
]

const today = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });
console.log('TODAY === ', today)

const Home = () => {
  const currentUser = useSelector(state => state.session.user);

  return (
    <section className='text-white w-4/5 mx-auto text-center pt-4'>
      <h1 className='text-4xl'>Welcome {currentUser.username}!</h1>
      <p>Here are your announcements for the month:</p>
      <AnnouncementTable announcements={announcements} />
      <p>{today}</p>
    </section>
  );
}

export default Home
