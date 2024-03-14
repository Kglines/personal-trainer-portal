import React, { useState } from 'react';
import { useModal } from '../../../context/Modal';
import { useDispatch } from 'react-redux';
import { createClient, fetchClients } from '../../../store/client';

const NewClientForm = ({ user }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [errors, setErrors] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: user.id,
      firstName,
      lastName,
      isActive,
    };
    // console.log('PAYLOAD === ', payload)

    dispatch(createClient(payload))
      .then(() => fetchClients())
      .then(() => {
        setFirstName('');
        setLastName('');
      })
      .then(() => closeModal())
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };
  return (
    <section className='flex flex-col bg-black text-white w-96 border border-dark'>
      <div className='bg-primary w-full rounded-sm'>
        <h2 className='text-3xl text-center p-2'>New Client</h2>
        <i
          className='fas rounded-full fa-times text-2xl text-right px-2 right-2 top-3 absolute hover:cursor-pointer hover:border hover:border-collapse hover:border-grey hover:bg-grey hover:text-dark'
          onClick={closeModal}
        ></i>
      </div>
      <div className='px-4 py-2 mt-2'>
        <form className='flex flex-col text-white p-4' onSubmit={onSubmit}>
          <label htmlFor='firstName' className='py-2'>
            First Name:
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-dark text-white px-1 mx-2 h-8'
            />
          </label>
          <label htmlFor='lastName' className='py-2'>
            Last Name:
            <input
              type='text'
              name='lastName'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-dark text-white px-1 mx-2 h-8'
            />
          </label>
          <label htmlFor='isActive' className='py-2'>
            Active:
            <input
              type='checkbox'
              name='isActive'
              id='isActive'
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className='bg-dark text-white px-2 mx-10 w-6 h-6 hover:cursor-pointer'
            />
          </label>
          <button
            type='submit'
            className='bg-secondary hover:bg-secondaryLight h-8 disabled:bg-dark'
            disabled={!firstName || !lastName}
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewClientForm;
