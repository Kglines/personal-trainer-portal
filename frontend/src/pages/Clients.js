import React, { useEffect } from 'react'
import ClientsTable from '../components/Clients/ClientsTable'
import LeftBar from '../components/LeftBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../store/client';
import OpenModalButton from '../components/OpenModalButton';
import NewClientForm from '../forms/Clients/NewClientForm';

const Clients = () => {

  const dispatch = useDispatch();

  const clientButton = '+ Client';
  const clientLinks = ['report'];

  // const sessionUser = useSelector(state => state.session.user);
  const clients = useSelector(state => state.clients);
console.log('CLIENTS ===== ', clients)
  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])

  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      <div>
        <LeftBar button={clientButton} links={clientLinks} />
      </div>
      <div>
        <div>
          <h1 className='text-4xl'>Clients</h1>
          <OpenModalButton buttonColor='secondary' buttonText='New Client' modalComponent={<NewClientForm />} />
        </div>
        <div>
          <ClientsTable clients={clients} />
        </div>
      </div>
    </section>
  );
}

export default Clients
