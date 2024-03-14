import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchClient } from '../store/client';

const Client = () => {
  const dispatch = useDispatch();
  const { clientId } = useParams();

  const [errors, setErrors] = useState([])


  const client = useSelector(state => state.clients)

  useEffect(() => {
    try {
      
      dispatch(fetchClient(parseInt(clientId)))
    } catch (error) {
      setErrors(error?.message)
    }
  }, [dispatch, clientId])
console.log('ERRORS === ', errors)
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4'>
      <div className='pb-4'>
        <h2 className='text-4xl pb-4'>{client?.firstName} {client?.lastName}</h2>
        <input type='checkbox' checked={client?.isActive} />
        {errors?.map(err => <p>{err.message}</p>)}
      </div>
    </section>
  );
}

export default Client
