import React from 'react'
import ClientsTable from '../components/Clients/ClientsTable'
import LeftBar from '../components/LeftBar';

const Clients = () => {

  const clientButton = '+ Client';
  const clientLinks = ['report'];

  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <LeftBar button={clientButton} links={clientLinks} />
      </div>
      <div>
        <div>
          <h1 className='text-4xl'>Clients</h1>
        </div>
        <div>
          <ClientsTable />
        </div>
      </div>
    </section>
  );
}

export default Clients
