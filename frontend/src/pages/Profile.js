import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const sessionUser = useSelector((state) => state.session.user);

  console.log('sessionUser', sessionUser)
  return (
    <section className='flex flex-col mt-12'>
      <div>
        <h2 className='text-center text-white text-4xl'>Profile</h2>
      </div>
      <div className='flex flex-col md:flex-row justify-around mt-12'>
        <div className='flex flex-col justify-self-center'>
          <img
            src={sessionUser.profileImg}
            alt={sessionUser.username}
            height={200}
            width={200}
            className='rounded-full hover:shadow-xl hover:shadow-secondary mx-auto'
          />
          <button className='bg-primary text-offWhite px-2 py-1 mt-8 mx-2'>
            Edit Picture
          </button>
        </div>
        <div className='mt-12 border border-grey hover:shadow-xl hover:shadow-secondary p-4'>
          <p className='flex gap-2 text-light items-center'>
            Username:{' '}
            <h3 className='text-offWhite text-lg'>{sessionUser.username}</h3>
          </p>
          <p className='flex gap-2 text-light items-center'>
            First Name:{' '}
            <h3 className='text-offWhite text-lg'>{sessionUser.firstName}</h3>{' '}
          </p>
          <p className='flex gap-2 text-light items-center'>
            Last Name:{' '}
            <h3 className='text-offWhite text-lg'>{sessionUser.lastName}</h3>{' '}
          </p>
          <p className='flex gap-2 text-light items-center'>
            Email:{' '}
            <h3 className='text-offWhite text-lg'>{sessionUser.email}</h3>{' '}
          </p>
          
          <button className='bg-primary text-offWhite px-2 py-1 mt-4'>
            Edit Personal Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
