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

  const sessionUser = useSelector(state => state.session.user);
  const clients = useSelector(state => state.clients);
console.log('CLIENTS ===== ', clients)
  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])

  return (
    <section className='text-offWhite sm:w-full md:w-4/5 mx-auto text-center pt-4'>
      {/* <div>
        <LeftBar button={clientButton} links={clientLinks} />
      </div> */}
      <div>
        <div className='pb-4'>
          <h1 className='text-4xl pb-4'>Clients</h1>
          <OpenModalButton buttonColor='secondary' buttonText='+ Client' modalComponent={<NewClientForm user={sessionUser} />}/>
        </div>
        <div className=''>
          <ClientsTable clients={clients} />
        </div>
      </div>
    </section>
  );
}

export default Clients
