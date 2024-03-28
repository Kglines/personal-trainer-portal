import React, { useEffect } from 'react';
import LeftBar from '../components/UI/LeftBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '../store/user';
import { Link, NavLink } from 'react-router-dom';
import TrainersTable from '../components/Trainers/tables/TrainersTable';

const Trainers = () => {
  const dispatch = useDispatch();

  const trainers = Object.values(useSelector((state) => state.users)).filter(
    (user) => user.role === 'admin' || user.role === 'trainer'
  );

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  console.log('trainers === ', trainers);
  return (
    <section className='text-offWhite w-4/5 mx-auto text-center pt-4 pl-48'>
      {/* <div>
        <LeftBar />
      </div> */}
      <div>
        <TrainersTable trainers={trainers} />
      </div>
    </section>
  );
};

export default Trainers;
