import React from 'react'
import Table from '../components/Table';
import { useSelector } from 'react-redux';

const headers = ['First Name', 'Last Name', 'Email', 'Phone Number'];
const clients = [
  ['John', 'Doe', 'john@john.com', '123-456-7890'], 
  ['Jane', 'Doe', 'jane@jane.com', '123-456-7890'],
  ['John', 'Smith', '', '123-456-7890'],
];

const Home = () => {
  const currentUser = useSelector(state => state.session.user);

  return (
    <section className='text-white w-5/6 mx-auto text-center pt-4'>
      <h1 className='text-4xl'>Welcome {currentUser.username}!</h1>
      <p>Here are your announcements for the month:</p>
      <Table rows={clients} columns={headers} />
    </section>
  );
}

export default Home
