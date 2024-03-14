import React, { useEffect } from 'react'
import ClientsTable from '../components/Clients/tables/ClientsTable'
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../store/client';
import OpenModalButton from '../components/UI/OpenModalButton';
import NewClientForm from '../components/Clients/forms/NewClientForm';

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
    <section className='text-offWhite sm:w-full md:w-4/5 mx-auto text-center mt-12'>
      {/* <div>
        <LeftBar button={clientButton} links={clientLinks} />
      </div> */}
      <div>
        <div className='pb-4'>
          <h1 className='text-4xl pb-6'>Clients</h1>
          <OpenModalButton buttonColor='secondary' buttonText='+ Client' modalComponent={<NewClientForm user={sessionUser} />}/>
        </div>
        <div className='mt-6'>
          <ClientsTable clients={clients} />
        </div>
      </div>
    </section>
  );
}

export default Clients
