import React from 'react'
import Table from '../components/Table';

const headers = ['First Name', 'Last Name', 'Email', 'Phone Number'];
const clients = [
  ['John', 'Doe', 'john@john.com', '123-456-7890'], 
  ['Jane', 'Doe', 'jane@jane.com', '123-456-7890'],
  ['John', 'Smith', '', '123-456-7890'],
];

const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <Table rows={clients} columns={headers} />
    </section>
  );
}

export default Home
