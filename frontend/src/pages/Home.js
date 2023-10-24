import React from 'react'
import Table from '../components/Table';
import { useSelector } from 'react-redux';

const announcementHeaders = ['Date', 'Announcement'];
const announcements = [
  ['2023-10-01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['2023-10-02', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['2023-10-03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['2023-10-04', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['2023-10-05', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['2023-10-06', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  ['2023-11-07', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
]

const today = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });
console.log('TODAY === ', today)

const Home = () => {
  const currentUser = useSelector(state => state.session.user);

  return (
    <section className='text-white w-5/6 mx-auto text-center pt-4'>
      <h1 className='text-4xl'>Welcome {currentUser.username}!</h1>
      <p>Here are your announcements for the month:</p>
      <Table rows={announcements} columns={announcementHeaders} />
      <p>{today}</p>
    </section>
  );
}

export default Home
