import React from 'react'
import ClientTable from '../components/ClientTable'
import LeftBar from '../components/LeftBar';

const Clients = () => {

  const clientButton = '+ Client';
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <LeftBar button={clientButton} />
      </div>
      <div>
        <div>
          <h1 className='text-4xl'>Clients</h1>
        </div>
        <div>
          <ClientTable />
        </div>
      </div>
    </section>
  );
}

export default Clients
