import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneUserThunk } from '../store/user';

const Trainer = () => {
  const { trainerId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  console.log('user === ', parseInt(trainerId));
  useEffect(() => {
    dispatch(fetchOneUserThunk(parseInt(trainerId)));
  }, [dispatch, trainerId]);
  return (
    <section className='flex flex-col justify-center text-offWhite mx-auto mt-12 text-center'>
      <div>
        <h2>Trainer</h2>
      </div>
      <div className='flex justify-between mx-auto'>
        <img
          src={user?.profileImg}
          alt={user?.username}
          className='rounded-full w-64 mx-auto'
        />
        <div className='text-left ml-8'>
          <div className='flex gap-2'>
            <p>{user?.firstName}</p>
            <p>{user?.lastName}</p>
          </div>
          <p>{user?.email}</p>
          <p>{user?.username}</p>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
