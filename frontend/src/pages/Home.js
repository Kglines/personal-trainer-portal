import React from 'react'
import Table from '../components/Table';
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
    <section className='text-white w-5/6 mx-auto text-center pt-4'>
      <h1 className='text-4xl'>Welcome {currentUser.username}!</h1>
      <p>Here are your announcements for the month:</p>
      {/* {announcements.map((announcement, idx) => (
        <Table key={idx} columns={Object.keys(announcement)} rows={Object.values(announcement)} />
      ))} */}
      <Table columns={announcements.map(announcement => Object.keys(announcement))} rows={announcements.map(announcement => Object.values(announcement))} />
      <p>{today}</p>
    </section>
  );
}

export default Home
