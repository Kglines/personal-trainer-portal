import React from 'react'
import ClientTable from '../components/ClientTable'

const Clients = () => {
  return (
    <section className='text-white w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <h1 className='text-4xl'>Clients</h1>
      </div>
      <div>
        <ClientTable />
      </div>
    </section>
  );
}

export default Clients
